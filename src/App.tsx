import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chat, ChatProps } from './Chat';
import * as konsole from './Konsole';
import { requestCustomiseUI, isProduction } from './helpers';
import { queryParams } from './BotChat';
import axios from 'axios';

export type AppProps = ChatProps;

let SECRET = {
    STAGING: 'hWhA3IfZkGA.cwA.058.GhnhDXs43TpcG9z6p3XZFAXSGeSxT8nmWyvPNoan9vw',
    PRODUCTION: 'rMjwcSJUrS0.cwA.6Gw.vBMKKOrGWxIcb9FpjrdGoRpVbESov5D0V9OUSKuuOk8'
};

export const App = (props: AppProps, container: HTMLElement) => {
    konsole.log('BotChat.App props', props);
    ReactDOM.render(React.createElement(AppContainer, props), container);
};

function uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

// https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname: string, cvalue: string, exdays: number) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname: string) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const USER_ID_KEY: string = 'user_id'
function getUserId(): string {
    let userId = getCookie(USER_ID_KEY)
    if (!userId) {
        userId = uuidv4()
        setCookie(USER_ID_KEY, userId, 365)
    }
    return userId
}

function getAppProps(): Object {
    var params = queryParams(location.search);

    var user = {
        id: params['userid'] || getUserId(),
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

class AppContainer extends React.PureComponent<ChatProps> {
    constructor() {
        super()
        requestCustomiseUI()
    }
    render() {
        return (
            <div className="wc-app">
                <Chat {...this.props} {...getAppProps()} />
            </div>
        );
    }
}
