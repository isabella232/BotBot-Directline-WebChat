import 'whatwg-fetch'
import * as React from 'react';
import { Chat } from './Chat';
import { App, AppProps } from './App';

const API_URL = process.env.NODE_ENV === 'production' ? '' : 'https://gic-investment-staging.azurewebsites.net'

function uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export type LoginState = {
    username: string,
    password: string,
    isLoggedIn: boolean,
    isLoggingIn: boolean,
    loginError: any,
    token: any,
}

export class LoginForm extends React.Component<AppProps, LoginState> {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            isLoggingIn: false,
            isLoggedIn: false,
            loginError: null,
            token: ''
        }
        console.log(API_URL);
    }

    getGICProps(): AppProps {
        return {
            directLine: {
                secret: this.state.token,
                token: '',
                domain: '',
                webSocket: true
            },
            locale: 'en-US',
            user: {
                id: uuidv4(),
                name: this.state.username,
            },
            bot: {
                id: 'default_botid',
                name: 'botname'
            },
        }
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        this.setState({loginError: '', isLoggingIn: true});

        const formData = {
            password: this.state.password,
        }

        fetch(`${API_URL}/api/form/secret`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then((resp: Response) => {
            if (resp.ok) {
                return resp.json();
            }
            else {
                throw new Error(resp.statusText);
            }
        })
        .then((data: string) => {
            if (data && typeof(data) === 'string' && data !== '') {
                this.setState({isLoggingIn: false, isLoggedIn: true, token: data})
            }
            else {
                this.setState({isLoggingIn: false, loginError: 'Invalid password'})
            }
        })
        .catch(err => {
            this.setState({isLoggingIn: false, loginError: `Error trying to log in: ${err}`})
        })
    }

    render() {
        if (!this.state.isLoggedIn) {
            return (
                <form id="loginForm" onSubmit={(event) => this.handleSubmit(event)}>
                    <fieldset disabled={this.state.isLoggingIn}>
                        <ul>
                            <h1>Login</h1>
                            <li>
                                <label>Username</label>
                                <input 
                                    type="username"
                                    placeholder="Username"
                                    onChange={(event: React.FormEvent<HTMLInputElement>) => this.setState({username: event.currentTarget.value})}
                                    value={this.state.username}
                                    minLength={4} maxLength={60} 
                                />
                            </li>
                            <li>
                                <label>Password</label>
                                <input 
                                    type="password"
                                    placeholder="Password" 
                                    onChange={(event: React.FormEvent<HTMLInputElement>) => this.setState({password: event.currentTarget.value})}
                                    value={this.state.password}
                                    minLength={4} maxLength={60} />
                            </li>
                            {this.state.loginError && <li><label className="error">{this.state.loginError}</label></li>}
                            <li><button type="submit">Login</button></li>
                        </ul>
                    </fieldset>
                </form>
            );
        }
        else {
            return (
                <div className="wc-app">
                    <Chat {...{...this.props, ...this.getGICProps()}} />
                </div>
            )
        }
    }
}