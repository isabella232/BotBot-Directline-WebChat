import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chat, ChatProps } from './Chat';
import * as konsole from './Konsole';
import axios from 'axios';
import { PRODUCTION_SHORT_URL, SECRET } from './Constants';
import { queryParams } from './BotChat';

export type AppProps = ChatProps;

export const App = (props: AppProps, container: HTMLElement) => {
  // konsole.log('BotChat.App props', props);
  // ReactDOM.render(React.createElement(AppContainer, props), container);

  ReactDOM.render(
    React.createElement(AppContainer, {
      ...getAppProps(),
      ...props
    }),
    container
  );
};

function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getAppProps(): Object {
  var params = queryParams(location.search);

  var user = {
    id: params['userid'] || uuidv4(),
    name: params['username'] || 'user'
  };

  var bot = {
    id: params['botid'] || 'botid',
    name: params['botname'] || 'botname'
  };

  return {
    directLine: {
      token: params['t'],
      domain: params['domain'],
      webSocket: params['webSocket'] && params['webSocket'] === 'true'
    },
    user: user,
    bot: bot,
    locale: params['locale'],
    resize: 'window'
    // sendTyping: true,    // defaults to false. set to true to send 'typing' activities to bot (and other users) when user is typing
  };
}

export interface IConfig {
  fontUrl: string
  fontFamily: string
  textColor: string
  brandColor: string
  headerBg: string
  textProfileColor: string
  logo: string
  displayName: string
  userResponseBg: string
  botResponseBg: string
}

const compileStyle = (config: IConfig) => {
  let style;

  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    @import url(${config.fontUrl});
    body .wc-app {
      color: ${config.textColor};
    }
    .wc-message { border-color: ${config.brandColor} }
    .wc-console #wc-send-icon { fill: ${config.brandColor} }
    .wc-adaptive-card * {
      font-family: inherit !important;
      color: inherit !important;
    }
    .wc-card button {
      color: ${config.brandColor} !important;
    }
    .wc-header {
      background-image: linear-gradient(60deg, ${config.headerBg}, ${config.headerBg}, ${
      config.headerBg
    });
    }
    .wc-message-meta { color: ${config.textProfileColor} }
    .wc-suggested-actions .wc-hscroll > ul > li button { color: ${config.brandColor} }
    .wc-message-from-me .wc-message-content-inner { background-color: ${config.userResponseBg}; }
    .wc-message-from-bot .wc-message-content-inner { background-color: ${config.botResponseBg}; }
    `;

  document.head.appendChild(styleTag);

  // change logo
  const logoEl = document.querySelector('#BotChatWindow .wc-chatview-panel .wc-header img');
  const titleEL = document.querySelector('#BotChatWindow .wc-chatview-panel .wc-header h1') as HTMLElement;

  if (logoEl && config.logo) {
    logoEl.setAttribute('src', config.logo);
  }

  if (titleEL && config.displayName) {
    document.title = config.displayName;
    titleEL.innerText = config.displayName;
  }
};

function requestCustomiseUI(url: string) {
  axios.get(url).then(resp => {
    compileStyle(resp.data);
  });
}

interface AppState {
  bots: Array<string>;
  directLine: any;
  loading: boolean;
}
class AppContainer extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      loading: true,
      directLine: null,
      bots: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const API_URL =
      process.env.NODE_ENV === 'development' ? 'https://kc-emea-staging.azurewebsites.net' : '';

    axios.post(API_URL + '/api/setting/adsfdgkhdsfdkaj32453535').then(resp => {
      // props.directLine = {
      //   secret: resp.data.secret
      // };

      // props.bots = resp.data.bots;

      requestCustomiseUI(resp.data.feconfig);

      this.setState({
        loading: false,
        bots: resp.data.bots,
        directLine: {
          secret: resp.data.secret
        }
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-wrapper">
          <img src="./loading.svg" />
        </div>
      );
    }

    return (
      <div className="wc-app">
        <Chat {...this.props} bots={this.state.bots} directLine={this.state.directLine} />
      </div>
    );
  }
}
