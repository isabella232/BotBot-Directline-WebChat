import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chat, ChatProps } from './Chat';
import * as konsole from './Konsole';
import { requestCustomiseUI } from './helpers';
import { queryParams } from './BotChat'
import axios from 'axios';

export type AppProps = ChatProps;
const PRODUCTION_SHORT_URL = 'gicpublicsite.azurewebsites.net';
let SECRET = {
    STAGING: 'hWhA3IfZkGA.cwA.058.GhnhDXs43TpcG9z6p3XZFAXSGeSxT8nmWyvPNoan9vw',
    PRODUCTION: 'rMjwcSJUrS0.cwA.6Gw.vBMKKOrGWxIcb9FpjrdGoRpVbESov5D0V9OUSKuuOk8'
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

interface ChatState {
    isCorrectIP: boolean,
    error: string,
}

const ALLOWED_IPS = [
    '203.116.80.0',
    '203.126.225.0',
    '80.169.164.0',
    '65.223.191.160',
    '206.169.170.240',
    '203.116.205.128',
    '118.201.225.61'
]

class AppContainer extends React.PureComponent<ChatProps, ChatState> {
    state: ChatState = {
        isCorrectIP: false,
        error: ''
    }

    componentDidMount() {
        axios
            .get('https://api.ipify.org?format=json')
            .then((resp: any) => {
                console.log(resp.data)
                if (resp.data.ip && ALLOWED_IPS.indexOf(resp.data.ip) > 1)
                    this.setState({isCorrectIP: true})
            })
            .catch((err) => this.setState({error: err}))
    }

    render() {
        if (!this.state.isCorrectIP) {
            return <div>Access to this page is currently restricted</div>
        }
        
        if (this.state.error) {
            return <div>Error while querying API</div>
        }

        requestCustomiseUI();
        return (
            <div className="wc-app">
                <Chat {...this.props} {...getAppProps()} />
            </div>
        );
    }
}
