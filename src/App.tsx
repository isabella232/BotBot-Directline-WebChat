import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatProps, konsole } from './Chat';
import { LoginForm } from './LoginForm';
import axios from 'axios';

export type AppProps = ChatProps;

export const App = (props: AppProps, container: HTMLElement) => {
  konsole.log('BotChat.App props', props);
  ReactDOM.render(React.createElement(AppContainer, props), container);
};

const AppContainer = (props: AppProps) => <LoginForm {...props} />;

export const DASHBOARD_API_URL = ' https://botbotapi-staging.azurewebsites.net/api';
export const BOT_API_URL = 'https://gic-investment-staging.azurewebsites.net/api';

export interface IConfig {
  fontUrl: string;
  fontFamily: string;
  textColor: string;
  brandColor: string;
  headerBg: string;
  textProfileColor: string;
  logo: string;
}

const lightenDarkenColor = (col: string, amt: number) => {
  let usePound = false;
  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);
  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

const compileStyle = (config: IConfig) => {
  let style;

  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    @import url(${config.fontUrl});
    body .wc-app {
    font-family: "${config.fontFamily}", sans-serif;
      color: ${config.textColor};
    }
    /*.wc-message-from-bot { border-color: ${config.brandColor} }
    .wc-message-from-me { border-color: ${lightenDarkenColor(config.brandColor, 60)} }
    .wc-console #wc-send-icon { fill: ${config.brandColor} }
    .wc-adaptive-card * {
      font-family: inherit !important;
      color: inherit !important;
    }
    .wc-card button {
      color: ${config.brandColor} !important;
    }*/
    .wc-header {
      background-color: ${config.headerBg};
      color: ${config.brandColor}
    }
    /*.wc-message-meta { color: ${config.textProfileColor} }
    .wc-suggested-actions .wc-hscroll > ul > li button { color: ${config.brandColor} }*/
    `;

  document.head.appendChild(styleTag);

  // change logo
  const logoEl = document.querySelector('#BotChatWindow .wc-chatview-panel .wc-header img');

  if (config.logo && logoEl) {
    logoEl.setAttribute('src', config.logo);
    logoEl.style.display = '';
  }
};

export function requestCustomiseUI() {
  axios
    .get(`${BOT_API_URL}/dashboard/botid`)
    .then(resp => axios.get(`${DASHBOARD_API_URL}/feconfig/get?botid=${resp.data.id}`))
    .then(resp => {
      compileStyle(resp.data);
    });
}
