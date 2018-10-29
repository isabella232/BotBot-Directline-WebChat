import * as React from 'react';

export interface LoginProps {
  onSubmit: Function,
  loggingIn: boolean,
  error: boolean
}

export interface LoginState {
  username: string,
  password: string
}

class Login extends React.PureComponent<LoginProps, LoginState> {
  private onSubmit: Function;

  state: LoginState = {
    username: '',
    password: ''
  }

  constructor(p: LoginProps) {
    super(p);

    this.hanldeSubmit = this.hanldeSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const nextState: any = {
      [name]: e.target.value
    };

    this.setState(nextState);
  }

  hanldeSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    return <main className="wc-login-page">
      <form onSubmit={this.hanldeSubmit}>
        <img src="./avatar.jpg" className="wc-login-avatar" />
        <h1>BOTBOT.AI</h1>
        <p className="form-group">
          <label htmlFor="username">Username</label>
          <input disabled={this.props.loggingIn} required id="username" type="text" value={this.state.username} name="username" placeholder="Enter username..." onChange={this.handleChange} />
        </p>
        <p className="form-group">
          <label htmlFor="password">Password</label>
          <input disabled={this.props.loggingIn} required id="password" type="password" value={this.state.password} name="password" placeholder="Enter your password..." onChange={this.handleChange} />
          {this.props.error && <span className="error-message">Password is invalid</span>}
        </p>
        <button disabled={this.props.loggingIn || !(this.state.username && this.state.password)}>
          {this.props.loggingIn ? 'LOGGING IN...' : 'LOGIN'}
        </button>
      </form>
    </main>
  }
}

export default Login;
