import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chat, ChatProps } from './Chat';
import * as konsole from './Konsole';
import axios from 'axios';

export type AppProps = ChatProps;
const PRODUCTION_SHORT_URL = 'canonbot.azurewebsites.net';
const SECRET = {
    STAGING: 'vHJJa7VhBGQ.cwA.MPM.eWdF_cJu2ZPoE-weTDWzWvbmJOoHGz4OPDai9nlkGwA',
    PRODUCTION: 'Gq5EM3rwkfU.cwA.Fp8.GBNJR72aRCX01jLRgdhcc4_hNUaMSWmry3PiJS__K2E'
};
const DASHBOARD_API_URL = ' https://botbotapi-staging.azurewebsites.net/api';
const BOT_API_URL = 'http://daimlerbot-staging.azurewebsites.net/api'

export const App = (props: AppProps, container: HTMLElement) => {
    konsole.log("BotChat.App props", props);
    ReactDOM.render(React.createElement(AppContainer, props), container);
}

function uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getAppProps() : Object {
    var params = BotChat.queryParams(location.search);

    var user = {
        id: params['userid'] || uuidv4(),
        name: params["username"] || 'user'
    };

    var bot = {
        id: params['botid'] || 'botid',
        name: params["botname"] || 'botname'
    };

    return {
        directLine: {
            secret: window.location.hostname.indexOf(PRODUCTION_SHORT_URL) === -1 ? SECRET.STAGING : SECRET.PRODUCTION,
            token: params['t'],
            domain: params['domain'],
            webSocket: params['webSocket'] && params['webSocket'] === 'true'
        },
        user: user,
        bot: bot,
        locale: params['locale'],
        resize: 'window'
        // sendTyping: true,    // defaults to false. set to true to send 'typing' activities to bot (and other users) when user is typing
    }
}

export interface IConfig {
  fontUrl: string,
  fontFamily: string,
  textColor: string,
  brandColor: string,
  headerBg: string,
  textProfileColor: string,
  logo: string
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

function requestCustomiseUI() {
  axios.get(`${BOT_API_URL}/dashboard/botid`)
    .then(resp => axios.get(`${DASHBOARD_API_URL}/feconfig/get?botid=${resp.data.id}`))
    .then(resp => {
      compileStyle(resp.data);
    });
}

const AppContainer = (props: AppProps) => {
  requestCustomiseUI();

    return  <div className="wc-app">
        <Chat { ...props } {...getAppProps()} />
    </div>
}
