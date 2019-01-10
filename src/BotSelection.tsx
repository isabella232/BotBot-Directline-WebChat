import * as React from 'react';
import { User } from 'botframework-directlinejs';
import { connect } from 'react-redux';
import { ChatState } from './Store'

export const getLanguageCode = (botName = '') => {
  if (botName.indexOf('-') > -1) {
    const arr = botName.split('-');

    return arr[0];
  }

  return '';
};

export const getLanguageTitle = (botName = '') => {
  if (botName.indexOf('-') > -1) {
    const arr = botName.split('-');

    return arr[1];
  }

  return botName;
};

export interface BotSelectionProps {
  bots: Array<string>;
  selectedBotName: string;
  onChange: (botName: string, from: User) => void;
  user: User;
}

const FONTS: {[language: string] : { fontFamily: string, url?: string }} = {
  nl: { fontFamily: 'Museo' },
  de: { fontFamily: 'Museo' },
  en: { fontFamily: 'Museo' },
  es: { fontFamily: 'Museo' },
  fr: { fontFamily: 'Museo' },
  it: { fontFamily: 'Museo' },
  ru: { fontFamily: 'Museo Cyrl' }
};

class BotSelection extends React.PureComponent<BotSelectionProps, {}> {
  constructor(props: BotSelectionProps) {
    super(props);

    this.updateFont(props.selectedBotName);
  }

  updateFont(lang: string) {
    // change fonts
    const code = getLanguageCode(lang);
    const config = FONTS[code];
    const style = config
      ? `
    ${config.url ? `@import url(${config.url});` : ''}
    body .wc-app {
      font-family: "${config.fontFamily}", sans-serif;
    }
    `
    : '';

    let styleTag = document.getElementById('custom-font');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.setAttribute('id', 'custom-font');

      document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = style;
  }

  private handleBotChange(lang: string) {
    this.updateFont(lang);

    if (lang !== this.props.selectedBotName) {
      this.props.onChange(lang, this.props.user);
    }
  }

  render() {
    const { bots, selectedBotName } = this.props;

    return (
      <div className="bot-selection">
        <button className="value">
          <img src={`./img/${getLanguageCode(selectedBotName)}.svg`} alt="Flag" className="flag" />
          <span className="language-name">{getLanguageTitle(selectedBotName)}</span>
          <span className="caret" />
        </button>
        <ul className="bot-list">
          {bots &&
            bots.length > 0 &&
            bots.map(lang => (
              <li key={lang}>
                <button onClick={() => this.handleBotChange(lang)}>
                  <img src={`./img/${getLanguageCode(lang)}.svg`} alt="Flag" className="flag" />
                  <span className="language-name">{getLanguageTitle(lang)}</span>
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state: ChatState) => ({
    selectedBotName: state.history.selectedBotName,
    bots: state.format.bots,
    user: state.connection.user,
  }),
  {
    onChange: (botName: string, from: User) => ({
      type: 'Set_Selected_Bot',
      selectedBotName: botName,
      from,
    })
  },
  (stateProps: any, dispatchProps: any, ownProps: any): BotSelectionProps => ({
    selectedBotName: stateProps.selectedBotName,
    bots: stateProps.bots,
    onChange: (botName: string, from: User) => {
      dispatchProps.onChange(botName, from);

      if (typeof ownProps.onChange === 'function') {
        ownProps.onChange(botName, from);
      }
    },
    user: stateProps.user,
  })
)(BotSelection);
