/* global $ */
import * as React from 'react';
import { IDaimlerData } from './Chat';
import { PARENT_ORIGIN, SIGNALR_URL } from './Constants';

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

const handleConnected = (userId: String, callback: Function) => {
  hub.on('broadcastConfig', (message: IDaimlerData) => handleReceiveMessage(message, callback));
  hub.invoke('subscribe', userId);
};

const handleConnectError = (error: Object) => {
  console.log('error', error);
};

const handleDisconnected = (userId: String, callback: Function) => {
  setTimeout(() => {
    connectToSignalR(userId, callback);
  }, 3000);
};

const handleReceiveMessage = (message: IDaimlerData, onComplete: Function) => {
  console.log('config message', message);

  if (onComplete) {
    onComplete(message);
  }
};

const connectToSignalR = (userId: String, callback: Function) => {
  connection = $.hubConnection(SIGNALR_URL);
  hub = connection.createHubProxy('conversationHub');

  // error handler
  connection.error(handleConnectError);
  connection.disconnected(() => handleDisconnected(userId, callback));
  connection.start().done(() => handleConnected(userId, callback));
};

export const initSignalR = (userId: String, callback: Function) => {
  connectToSignalR(userId, callback);
};
