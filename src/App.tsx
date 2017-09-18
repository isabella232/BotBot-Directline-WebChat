import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chat, ChatProps, konsole } from './Chat';

export type AppProps = ChatProps;

export const App = (props: AppProps, container: HTMLElement) => {
    konsole.log("BotChat.App props", props);
    ReactDOM.render(React.createElement(AppContainer, props), container);
} 

const GICProps: AppProps = {
    directLine: {
        // secret: 'R1KG1jopgus.cwA.biA.u1ngrrUaHcHxI_dWNcC-mboA5UuLTBMqoFjSpgFsEUM',
        // secret: 'bIpwQ2WmFc4.cwA.uio.cHbLvIBsUBDEB6G0qysaEfP7oflLUx4B1P6TsRSfmbI',
        secret: 'apThmtE5X9w.cwA.Rh8.S11jhfB7O3Bj_IYY3fuQ0oID6P1jJXp0NpQDnXoraz0',
        token: '',
        domain: '',
        webSocket: true
    },
    locale: 'en-US',
    user: {
        id: 'default_userid',
        name: 'Guest'
    },
    bot: {
        id: 'default_botid',
        name: 'botname'
    },
    resize: 'window'
}

const AppContainer = (props: AppProps) =>
    <div className="wc-app">
        <Chat { ...{...GICProps, ...props} } />
    </div>;
