import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chat, ChatProps } from './Chat';
import * as konsole from './Konsole';
import axios from 'axios';

import Login from './Login';
import { requestCustomiseUI } from './helpers';

export type AppProps = ChatProps;
const PRODUCTION_SHORT_URL = 'gicpublicsite.azurewebsites.net';
let SECRET = {
    STAGING: '', // 'hWhA3IfZkGA.cwA.058.GhnhDXs43TpcG9z6p3XZFAXSGeSxT8nmWyvPNoan9vw',
    PRODUCTION: '' //'rMjwcSJUrS0.cwA.6Gw.vBMKKOrGWxIcb9FpjrdGoRpVbESov5D0V9OUSKuuOk8'
};

export const App = (props: AppProps, container: HTMLElement) => {
    konsole.log('BotChat.App props', props);
    ReactDOM.render(React.createElement(AppContainer, props), container);
};

function isProduction() {
    return !(window.location.hostname.indexOf(PRODUCTION_SHORT_URL) === -1);
}

function uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function getAppProps(): Object {
    var params = BotChat.queryParams(location.search);

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
            secret: isProduction() ? SECRET.PRODUCTION : SECRET.STAGING,
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

export interface ChatState {
    loggedIn: boolean;
    loggingIn: boolean;
    error: boolean;
}

class AppContainer extends React.PureComponent<ChatProps, ChatState> {
    state: ChatState = {
        loggedIn: false,
        error: false,
        loggingIn: false
    };

    constructor(p: ChatProps) {
        super(p);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(username: string, password: string) {
        this.setState({ loggingIn: true });
        let url = '';
        if (isProduction()) {
            url = '/api/form/secret';
        } else {
            url = 'https://gicpublicsitebot-staging.azurewebsites.net/api/form/secret';
        }

        axios
            .post(url, {
                username,
                password
            })
            .then(resp => {
                if (isProduction()) {
                    SECRET.PRODUCTION = resp.data;
                } else {
                    SECRET.STAGING = resp.data;
                }

                this.setState({ loggedIn: true, loggingIn: false, error: false });
            })
            .catch(error => {
                this.setState({ loggedIn: false, loggingIn: false, error: true });
            });
    }

    render() {
        if (!this.state.loggedIn) {
            return (
                <Login
                    loggingIn={this.state.loggingIn}
                    onSubmit={this.handleSubmit}
                    error={this.state.error}
                />
            );
        }

        requestCustomiseUI();
        return (
            <div className="wc-app">
                <Chat {...this.props} {...getAppProps()} />
            </div>
        );
    }
}
