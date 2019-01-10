import * as React from 'react';
import { findDOMNode } from 'react-dom';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {
  Activity,
  
  User,
  DirectLine,
  DirectLineOptions,
  CardActionTypes
} from 'botframework-directlinejs';
import { createStore, ChatActions, sendMessage, HistoryAction } from './Store';
import { Provider } from 'react-redux';
import { SpeechOptions } from './SpeechOptions';
import { Speech } from './SpeechModule';
import { ActivityOrID, FormatOptions, IMyBotConnection } from './Types';
import * as konsole from './Konsole';
import { getTabIndex } from './getTabIndex';
import BotSelection from './BotSelection';

export interface ChatProps {
  user: User;
  bot: User;
  botConnection?: IMyBotConnection;
  directLine?: DirectLineOptions;
  speechOptions?: SpeechOptions;
  locale?: string;
  selectedActivity?: BehaviorSubject<ActivityOrID>;
  sendTyping?: boolean;
  formatOptions?: FormatOptions;
  resize?: 'none' | 'window' | 'detect';
  bots: Array<string>;
}

import { History } from './History';
import { MessagePane } from './MessagePane';
import { Shell, ShellFunctions } from './Shell';

export class Chat extends React.Component<ChatProps, {}> {
  private store = createStore();

  private botConnection: IMyBotConnection;

  private activitySubscription: any;
  private connectionStatusSubscription: any;
  private selectedActivitySubscription: any;
  private shellRef: React.Component & ShellFunctions;

  private chatviewPanel: HTMLElement;
  private resizeListener = () => this.setSize();

  private _handleKeyDownCapture = this.handleKeyDownCapture.bind(this);
  private _saveShellRef = this.saveShellRef.bind(this);
  private _handleChangeBot = this.handleChangeBot.bind(this);

  constructor(props: ChatProps) {
    super(props);

    konsole.log('BotChat.Chat props', props);

    this.store.dispatch<ChatActions>({
      type: 'Set_Locale',
      locale:
        props.locale ||
        (window.navigator as any)['userLanguage'] ||
        window.navigator.language ||
        'en',
      bots: props.bots || []
    });

    if (props.formatOptions)
      this.store.dispatch<ChatActions>({
        type: 'Set_Format_Options',
        options: props.formatOptions
      });

    if (props.sendTyping)
      this.store.dispatch<ChatActions>({ type: 'Set_Send_Typing', sendTyping: props.sendTyping });

    if (props.speechOptions) {
      Speech.SpeechRecognizer.setSpeechRecognizer(props.speechOptions.speechRecognizer);
      Speech.SpeechSynthesizer.setSpeechSynthesizer(props.speechOptions.speechSynthesizer);
    }

    this.setActiveBot();
  }

  private setActiveBot() {
    // get active bot
    const bots = this.props.bots;
    if (!bots || bots.length === 0) {
      return;
    }

    const localLanguage = window.navigator.language;
    const arr = localLanguage.split('-');
    const code = arr[0];
    const filteredBots = bots.filter(item => item.indexOf(`${code}-`) > -1);
    const activeBot = filteredBots[0] || bots[0];

    this.store.dispatch<HistoryAction>({
      type: 'Set_Selected_Bot',
      selectedBotName: activeBot
    });
  }

  private handleIncomingActivity(activity: Activity) {
    let state = this.store.getState();
    switch (activity.type) {
      case 'message':
        this.store.dispatch<ChatActions>({
          type:
            activity.from.id === state.connection.user.id
              ? 'Receive_Sent_Message'
              : 'Receive_Message',
          activity
        });
        break;

      case 'typing':
        if (activity.from.id !== state.connection.user.id)
          this.store.dispatch<ChatActions>({ type: 'Show_Typing', activity });
        break;
    }
  }

  private setSize() {
    this.store.dispatch<ChatActions>({
      type: 'Set_Size',
      width: this.chatviewPanel.offsetWidth,
      height: this.chatviewPanel.offsetHeight
    });
  }

  private handleKeyDownCapture(evt: React.KeyboardEvent<HTMLDivElement>) {
    const target = evt.target as HTMLElement;
    const tabIndex = getTabIndex(target);

    if (
      target === findDOMNode(this.chatviewPanel) ||
      typeof tabIndex !== 'number' ||
      tabIndex < 0
    ) {
      evt.stopPropagation();

      let key: string;

      // Quirks: onKeyDown we re-focus, but the newly focused element does not receive the subsequent onKeyPress event
      //         It is working in Chrome/Firefox/IE, confirmed not working in Edge/16
      //         So we are manually appending the key if they can be inputted in the box
      if (/(^|\s)Edge\/16\./.test(navigator.userAgent)) {
        key = inputtableKey(evt.key);
      }

      this.shellRef.focus(key);
    }
  }

  private saveShellRef(shellWrapper: any) {
    this.shellRef = shellWrapper.getWrappedInstance();
  }

  private handleChangeBot(botName: string) {
    sendPostBack(this.botConnection, 'Hi', undefined, this.props.user, undefined, botName);
  }

  componentDidMount() {
    // Now that we're mounted, we know our dimensions. Put them in the store (this will force a re-render)
    this.setSize();

    const botConnection = this.props.directLine
      ? (this.botConnection = new DirectLine(this.props.directLine))
      : this.props.botConnection;

    if (this.props.resize === 'window') window.addEventListener('resize', this.resizeListener);

    this.store.dispatch<ChatActions>({
      type: 'Start_Connection',
      user: this.props.user,
      bot: this.props.bot,
      botConnection,
      selectedActivity: this.props.selectedActivity
    });

    this.connectionStatusSubscription = botConnection.connectionStatus$.subscribe(
      connectionStatus => {
        if (this.props.speechOptions && this.props.speechOptions.speechRecognizer) {
          let refGrammarId = botConnection.referenceGrammarId;
          if (refGrammarId)
            this.props.speechOptions.speechRecognizer.referenceGrammarId = refGrammarId;
        }
        this.store.dispatch<ChatActions>({ type: 'Connection_Change', connectionStatus });
      }
    );

    this.activitySubscription = botConnection.activity$.subscribe(
      activity => this.handleIncomingActivity(activity),
      error => konsole.log('activity$ error', error)
    );

    if (this.props.selectedActivity) {
      this.selectedActivitySubscription = this.props.selectedActivity.subscribe(activityOrID => {
        this.store.dispatch<ChatActions>({
          type: 'Select_Activity',
          selectedActivity:
            activityOrID.activity ||
            this.store
              .getState()
              .history.activities.find(activity => activity.id === activityOrID.id)
        });
      });
    }

    sendPostBack(
      this.botConnection,
      'Hi',
      undefined,
      this.props.user,
      undefined,
      this.store.getState().history.selectedBotName
    );
  }

  componentWillUnmount() {
    this.connectionStatusSubscription.unsubscribe();
    this.activitySubscription.unsubscribe();
    if (this.selectedActivitySubscription) this.selectedActivitySubscription.unsubscribe();
    if (this.botConnection) this.botConnection.end();
    window.removeEventListener('resize', this.resizeListener);
  }

  // At startup we do three render passes:
  // 1. To determine the dimensions of the chat panel (nothing needs to actually render here, so we don't)
  // 2. To determine the margins of any given carousel (we just render one mock activity so that we can measure it)
  // 3. (this is also the normal re-render case) To render without the mock activity

  render() {
    const state = this.store.getState();
    console.log('BotChat.Chat state', process.env.SHOW_AVATAR);

    // only render real stuff after we know our dimensions
    let header: JSX.Element;
    if (state.format.options.showHeader)
      header = (
        <div className="wc-header">
          <div className="wc-logo-name">
            {process.env.SHOW_AVATAR === 'true' && <img src="./avatar.png" />}
            {process.env.BOT_NAME === 'true' && <h1>{process.env.BOT_NAME}</h1>}
          </div>
          {state.format.bots &&
            state.format.bots.length > 0 && (
              <BotSelection bots={state.format.bots} onChange={this._handleChangeBot} />
            )}
        </div>
      );

    let resize: JSX.Element;
    if (this.props.resize === 'detect') resize = <ResizeDetector onresize={this.resizeListener} />;

    return (
      <Provider store={this.store}>
        <div
          className="wc-chatview-panel"
          onKeyDownCapture={this._handleKeyDownCapture}
          ref={div => (this.chatviewPanel = div)}
          tabIndex={0}
        >
          {header}
          <MessagePane>
            <History />
          </MessagePane>
          <Shell ref={this._saveShellRef} />
          {resize}
        </div>
      </Provider>
    );
  }
}

export interface IDoCardAction {
  (type: CardActionTypes, value: string | object): void;
}

export const doCardAction = (
  botConnection: IMyBotConnection,
  from: User,
  locale: string,
  sendMessage: (value: string, user: User, locale: string) => void,
  botName: string
): IDoCardAction => (type, actionValue) => {
  const text = typeof actionValue === 'string' ? (actionValue as string) : undefined;
  const value = typeof actionValue === 'object' ? (actionValue as object) : undefined;

  switch (type) {
    case 'imBack':
      if (typeof text === 'string') sendMessage(text, from, locale);
      break;

    case 'postBack':
      sendPostBack(botConnection, text, value, from, locale, botName);
      break;

    case 'call':
    case 'openUrl':
    case 'playAudio':
    case 'playVideo':
    case 'showImage':
    case 'downloadFile':
    case 'signin':
      window.open(text);
      break;

    default:
      konsole.log('unknown button type', type);
  }
};

export const sendPostBack = (
  botConnection: IMyBotConnection,
  text: string,
  value: object,
  from: User,
  locale: string,
  botName: string
) => {
  botConnection
    .postActivity({
      type: 'message',
      text,
      value,
      from,
      locale,
      channelData: {
        botName
      }
    })
    .subscribe(
      id => {
        konsole.log('success sending postBack', id);
      },
      error => {
        konsole.log('failed to send postBack', error);
      }
    );
};

export const renderIfNonempty = (value: any, renderer: (value: any) => JSX.Element) => {
  if (value !== undefined && value !== null && (typeof value !== 'string' || value.length > 0))
    return renderer(value);
};

export const classList = (...args: (string | boolean)[]) => {
  return args.filter(Boolean).join(' ');
};

// note: container of this element must have CSS position of either absolute or relative
const ResizeDetector = (props: { onresize: () => void }) => (
  // adapted to React from https://github.com/developit/simple-element-resize-detector
  <iframe
    style={{
      position: 'absolute',
      left: '0',
      top: '-100%',
      width: '100%',
      height: '100%',
      margin: '1px 0 0',
      border: 'none',
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none'
    }}
    ref={frame => {
      if (frame) frame.contentWindow.onresize = props.onresize;
    }}
  />
);

// For auto-focus in some browsers, we synthetically insert keys into the chatbox.
// By default, we insert keys when:
// 1. evt.key.length === 1 (e.g. "1", "A", "=" keys), or
// 2. evt.key is one of the map keys below (e.g. "Add" will insert "+", "Decimal" will insert ".")
const INPUTTABLE_KEY: { [key: string]: string } = {
  Add: '+', // Numpad add key
  Decimal: '.', // Numpad decimal key
  Divide: '/', // Numpad divide key
  Multiply: '*', // Numpad multiply key
  Subtract: '-' // Numpad subtract key
};

function inputtableKey(key: string) {
  return key.length === 1 ? key : INPUTTABLE_KEY[key];
}
