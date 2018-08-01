import * as React from 'react';
import { findDOMNode } from 'react-dom';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import {
    Activity,
    IBotConnection,
    User,
    DirectLine,
    DirectLineOptions,
    CardActionTypes
} from 'botframework-directlinejs';
import { createStore, ChatActions, ChatState } from './Store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, Store } from 'react-redux';
import { SpeechOptions } from './SpeechOptions';
import { Speech } from './SpeechModule';
import { ActivityOrID, FormatOptions } from './Types';
import * as konsole from './Konsole';
import { getTabIndex } from './getTabIndex';

export interface ChatProps {
    user: User;
    bot: User;
    botConnection?: IBotConnection;
    directLine?: DirectLineOptions;
    speechOptions?: SpeechOptions;
    locale?: string;
    selectedActivity?: BehaviorSubject<ActivityOrID>;
    sendTyping?: boolean;
    formatOptions?: FormatOptions;
    resize?: 'none' | 'window' | 'detect';
}

import { History } from './History';
import { MessagePane } from './MessagePane';
import { Shell, ShellFunctions } from './Shell';

export class Chat extends React.Component<ChatProps, {}> {
    private store: Store<ChatState> = null;
    private persistor: any;

    private botConnection: IBotConnection;

    private activitySubscription: Subscription;
    private connectionStatusSubscription: Subscription;
    private selectedActivitySubscription: Subscription;
    private shellRef: React.Component & ShellFunctions;

    private scrollContent: HTMLElement;
    private chatviewPanel: HTMLElement;
    private resizeListener = () => this.setSize();

    private _handleKeyDownCapture = this.handleKeyDownCapture.bind(this);
    private _saveShellRef = this.saveShellRef.bind(this);
    private _handleScrollToTop = this.handleScrollToTop.bind(this);
    private _handleGetRef = this.handleGetRef.bind(this);

    private rehydrated: boolean = false
    private mounted: boolean = false

    constructor(props: ChatProps) {
        super(props);

        konsole.log('BotChat.Chat props', props);

        const {store, persistor} = createStore(() => {
             // Set rehydrated when loading complete
            this.rehydrated = true
            if (this.mounted) {
                this.setSize()
            }
        })

        this.store = store
        this.persistor = persistor

        this.store.dispatch<ChatActions>({
            type: 'Set_Locale',
            locale:
                props.locale ||
                (window.navigator as any)['userLanguage'] ||
                window.navigator.language ||
                'en'
        });

        if (props.formatOptions)
            this.store.dispatch<ChatActions>({
                type: 'Set_Format_Options',
                options: props.formatOptions
            });

        if (props.sendTyping)
            this.store.dispatch<ChatActions>({
                type: 'Set_Send_Typing',
                sendTyping: props.sendTyping
            });

        if (props.speechOptions) {
            Speech.SpeechRecognizer.setSpeechRecognizer(props.speechOptions.speechRecognizer);
            Speech.SpeechSynthesizer.setSpeechSynthesizer(props.speechOptions.speechSynthesizer);
        }
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
        if (this.chatviewPanel)
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
        if (shellWrapper) this.shellRef = shellWrapper.getWrappedInstance();
    }

    componentDidMount() {
        // Now that we're mounted, we know our dimensions. Put them in the store (this will force a re-render)
        // this.setSize();
        // This flag is to indicate - if mounted, we can safely setSize when store is rehydrated
        this.mounted = true;
        if (this.rehydrated) {
            this.setSize();
        }

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
            this.selectedActivitySubscription = this.props.selectedActivity.subscribe(
                activityOrID => {
                    this.store.dispatch<ChatActions>({
                        type: 'Select_Activity',
                        selectedActivity:
                            activityOrID.activity ||
                            this.store
                                .getState()
                                .history.activities.find(
                                    (activity: Activity) => activity.id === activityOrID.id
                                )
                    });
                }
            );
        }
    }

    componentWillUnmount() {
        this.connectionStatusSubscription.unsubscribe();
        this.activitySubscription.unsubscribe();
        if (this.selectedActivitySubscription) this.selectedActivitySubscription.unsubscribe();
        if (this.botConnection) this.botConnection.end();
        window.removeEventListener('resize', this.resizeListener);
    }

    private handleScrollToTop() {
        this.scrollContent.scrollTop = 0;
    }

    private handleGetRef(div: HTMLElement) {
        this.scrollContent = div;
    }

    // At startup we do three render passes:
    // 1. To determine the dimensions of the chat panel (nothing needs to actually render here, so we don't)
    // 2. To determine the margins of any given carousel (we just render one mock activity so that we can measure it)
    // 3. (this is also the normal re-render case) To render without the mock activity

    render() {
        const state = this.store.getState();
        konsole.log('BotChat.Chat state', state);

        // only render real stuff after we know our dimensions
        let header: JSX.Element;
        if (state.format.options.showHeader)
            header = (
                <div className="wc-header">
                    <img src="./avatar.png" alt="Logo" />
                    <div>
                        <h2 className="js-botname">{state.format.strings.title}</h2>
                        <p className="subtext">Learning & Understand Cognitive Assist System</p>
                    </div>
                    <a className="contact-link" target="_blank" href="https://www.gic.com.sg/contact-us/#Connect-with-us">
                        <img src="./CustService2.png" style={{ display: 'block', maxHeight: '100%' }} />
                    </a>
                </div>
            );

        let resize: JSX.Element;
        if (this.props.resize === 'detect')
            resize = <ResizeDetector onresize={this.resizeListener} />;

        return (
            <Provider store={this.store}>
                <PersistGate loading={null} persistor={this.persistor}>
                    <div
                        className="wc-chatview-panel"
                        onKeyDownCapture={this._handleKeyDownCapture}
                        ref={div => (this.chatviewPanel = div)}
                        tabIndex={0}
                    >
                        {header}
                        <MessagePane>
                            <History getRef={this._handleGetRef} />
                        </MessagePane>
                        <Shell ref={this._saveShellRef} />
                        {resize}
                        <button className="wc-back-top" onClick={this._handleScrollToTop}>
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill="#000000"
                                    d="M2.782 3.782c-1.794 1.794-2.782 4.18-2.782 6.718s0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782 2.782-4.18 2.782-6.717-0.988-4.923-2.782-6.718-4.18-2.782-6.718-2.782-4.923 0.988-6.718 2.782zM18 10.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5z"
                                />
                                <path
                                    fill="#000000"
                                    d="M9.147 4.647l-4 4c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l3.146-3.147v10.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10.293l3.147 3.146c0.195 0.195 0.512 0.195 0.707 0 0.098-0.098 0.146-0.226 0.146-0.353s-0.049-0.256-0.147-0.353l-4-4c-0.195-0.195-0.512-0.195-0.707 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </PersistGate>
            </Provider>
        );
    }
}

export interface IDoCardAction {
    (type: CardActionTypes, value: string | object): void;
}

export const doCardAction = (
    botConnection: IBotConnection,
    from: User,
    locale: string,
    sendMessage: (value: string, user: User, locale: string) => void
): IDoCardAction => (type, actionValue) => {
    const text = typeof actionValue === 'string' ? (actionValue as string) : undefined;
    const value = typeof actionValue === 'object' ? (actionValue as object) : undefined;

    switch (type) {
        case 'imBack':
            if (typeof text === 'string') sendMessage(text, from, locale);
            break;

        case 'postBack':
            sendPostBack(botConnection, text, value, from, locale);
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
    botConnection: IBotConnection,
    text: string,
    value: object,
    from: User,
    locale: string
) => {
    botConnection
        .postActivity({
            type: 'message',
            text,
            value,
            from,
            locale
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
