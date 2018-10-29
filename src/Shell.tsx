import * as React from 'react';
import { ChatState } from './Store';
// import { User } from 'botframework-directlinejs';
import { classList } from './Chat';
import { connect } from 'react-redux';
import { Strings } from './Strings';
// import { Speech } from './SpeechModule';
import { ChatActions, sendMessage } from './Store';

interface Props {
  inputText: string;
  strings: Strings;

  onChangeText: (inputText: string) => void;
  sendMessage: (inputText: string) => void;
}

export interface ShellFunctions {
  focus: (appendKey?: string) => void;
}

class ShellContainer extends React.Component<Props> implements ShellFunctions {
  private textInput: HTMLInputElement;

  private sendMessage() {
    if (this.props.inputText.trim().length > 0) {
      this.props.sendMessage(this.props.inputText);
    }
  }

  private handleSendButtonKeyPress(evt: React.KeyboardEvent<HTMLButtonElement>) {
    if (evt.key === 'Enter' || evt.key === ' ') {
      evt.preventDefault();
      this.sendMessage();
      this.textInput.focus();
    }
  }

  private onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }

  private onClickSend() {
    this.sendMessage();
  }

  private onTextInputFocus() {
    if (this.props.listening) {
      this.props.stopListening();
    }
  }

  public focus(appendKey?: string) {
    this.textInput.focus();

    if (appendKey) {
      this.props.onChangeText(this.props.inputText + appendKey);
    }
  }

  render() {
    const className = classList('wc-console', this.props.inputText.length > 0 && 'has-text');
    const placeholder = this.props.strings.consolePlaceholder;

    return (
      <div className={className}>
        <div className="wc-textbox">
          <input
            type="text"
            className="wc-shellinput"
            ref={input => (this.textInput = input)}
            autoFocus
            value={this.props.inputText}
            onChange={_ => this.props.onChangeText(this.textInput.value)}
            onKeyPress={e => this.onKeyPress(e)}
            onFocus={() => this.onTextInputFocus()}
            placeholder={placeholder}
            aria-label={this.props.inputText ? null : placeholder}
            aria-live="polite"
          />
        </div>
        <button
          className="wc-send"
          onClick={() => this.onClickSend()}
          aria-label={this.props.strings.send}
          role="button"
          onKeyPress={evt => this.handleSendButtonKeyPress(evt)}
          tabIndex={0}
        >
          <svg width="24px" height="21px" viewBox="0 0 24 21">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                id="wc-send-icon"
                transform="translate(-358.000000, -593.000000)"
                fillRule="nonzero"
              >
                <g transform="translate(30.000000, 576.000000)">
                  <polygon
                    id="btn_send_inactive"
                    points="328 37.5714286 352 27.2857143 328 17 328 25 345.142857 27.2857143 328 29.5714286"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    );
  }
}

export const Shell = connect(
  (state: ChatState) => ({
    // passed down to ShellContainer
    inputText: state.shell.input,
    strings: state.format.strings,
    // only used to create helper functions below
    locale: state.format.locale,
    user: state.connection.user
  }),
  {
    // passed down to ShellContainer
    onChangeText: (input: string) =>
      ({ type: 'Update_Input', input, source: 'text' } as ChatActions),

    // only used to create helper functions below
    sendMessage
  },
  (stateProps: any, dispatchProps: any, ownProps: any): Props => ({
    // from stateProps
    inputText: stateProps.inputText,
    user: stateProps.user,
    strings: stateProps.strings,
    listening: stateProps.listening,

    // from dispatchProps
    onChangeText: dispatchProps.onChangeText,
    // helper functions
    sendMessage: (text: string) =>
      dispatchProps.sendMessage(text, stateProps.user, stateProps.locale)
  }),
  {
    withRef: true
  }
)(ShellContainer);
