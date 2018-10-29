import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chat, ChatProps } from './Chat';
import * as konsole from './Konsole';
import axios from 'axios';
import { PRODUCTION_SHORT_URL, SECRET, DASHBOARD_API_URL, BOT_API_URL } from './Constants';
import { queryParams } from './BotChat';
import { HubConnectionBuilder } from '@aspnet/signalr';

export type AppProps = ChatProps;

export const App = (props: AppProps, container: HTMLElement) => {
  // konsole.log('BotChat.App props', props);
  // ReactDOM.render(React.createElement(AppContainer, props), container);

  const API_URL =
    process.env.NODE_ENV === 'development' ? 'https://kc-emea-staging.azurewebsites.net' : '';

  axios.post(API_URL + '/api/setting/adsfdgkhdsfdkaj32453535').then(resp => {
    // props.directLine = {
    //   secret: resp.data.secret
    // };

    props.bots = resp.data.bots;

    // requestCustomiseUI(resp.data.feconfig);

    const botConnection = new HubConnectionBuilder()
      .withUrl('https://webhook.botbot.ai/botbot-api/chat')
      .build();
    // botConnection.serverTimeoutInMilliseconds = 2000;

    props.botConnection = botConnection;

    ReactDOM.render(
      React.createElement(AppContainer, {
        ...getAppProps(),
        ...props
      }),
      container
    );
  });
};

export function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getAppProps(): Object {
  const localUserId = localStorage.getItem('userid');
  var params = queryParams(location.search);
  const userid = localUserId || params['userid'] || uuidv4();

  localStorage.setItem('userid', userid);

  var user = {
    id: userid,
    name: params['username'] || 'user'
  };

  var bot = {
    id: params['botid'] || 'botid',
    name: params['botname'] || 'botname'
  };

  return {
    // directLine: {
    //   token: params['t'],
    //   domain: params['domain'],
    //   webSocket: params['webSocket'] && params['webSocket'] === 'true'
    // },
    user: user,
    bot: bot,
    locale: params['locale'],
    resize: 'window'
    // sendTyping: true,    // defaults to false. set to true to send 'typing' activities to bot (and other users) when user is typing
  };
}

export interface IConfig {
  fontUrl: string;
  fontFamily: string;
  textColor: string;
  brandColor: string;
  headerBg: string;
  textProfileColor: string;
  logo: string;
}

const compileStyle = (config: IConfig) => {
  let style;

  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    @import url(${config.fontUrl});
    body .wc-app {
      font-family: "${config.fontFamily}", sans-serif;
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
      background-color: ${config.headerBg};
      color: ${config.brandColor}
    }
    .wc-message-meta { color: ${config.textProfileColor} }
    .wc-suggested-actions .wc-hscroll > ul > li button { color: ${config.brandColor} }
    `;

  document.head.appendChild(styleTag);

  // change logo
  const logoEl = document.querySelector('#BotChatWindow .wc-chatview-panel .wc-header img');

  if (config.logo) {
    logoEl.setAttribute('src', config.logo);
  }
};

function requestCustomiseUI(url: string) {
  axios.get(url).then(resp => {
    compileStyle(resp.data);
  });
}

const AppContainer = (props: AppProps) => {
  // requestCustomiseUI();

  return (
    <div className="wc-app">
      <Chat {...props} />
    </div>
  );
};
