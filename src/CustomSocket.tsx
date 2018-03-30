import * as React from 'react';
import { IDaimlerData } from './Chat';
import { PARENT_ORIGIN } from './Constants';

interface IConnection {
    error: Function;
    on: Function;
    disconnected: Function;
    start: Function;
    createHubProxy: Function;
}

interface IHub {
    on: Function;
    invoke: Function;
}

let connection: IConnection;
let hub: IHub;
let userId: Number;

const handleConnected = (userId: Number) => {
    console.log('Connection start');
    hub.on('broadcastConfig', handleReceiveMessage);
    hub.invoke('subscribe', userId);
};

const handleConnectError = error => {
    console.log('error', error);
};

const handleDisconnected = () => {
    // connectToSignalR();
};

const handleReceiveMessage = (message: IDaimlerData) => {
    console.log('config message', message);

    window.parent.postMessage({ data: message }, PARENT_ORIGIN);
};

const connectToSignalR = (userId: Number) => {
    connection = window.$.hubConnection('https://daimlerbot-staging.azurewebsites.net/signalr');
    hub = connection.createHubProxy('conversationHub');

    // error handler
    connection.error(handleConnectError);
    connection.disconnected(handleDisconnected);
    connection.start().done(() => handleConnected(userId));
};

export const initSignalR = (userId: Number) => {
    connectToSignalR(userId);
};
