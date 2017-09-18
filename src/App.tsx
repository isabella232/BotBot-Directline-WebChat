import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatProps, konsole } from './Chat';
import { LoginForm } from './LoginForm';

export type AppProps = ChatProps;

export const App = (props: AppProps, container: HTMLElement) => {
    konsole.log("BotChat.App props", props);
    ReactDOM.render(React.createElement(AppContainer, props), container);
}

const AppContainer = (props: AppProps) => 
    <LoginForm {...props} />;
