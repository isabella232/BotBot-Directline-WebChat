import * as React from 'react';
import { Attachment } from 'botframework-directlinejs';
import { connect } from 'react-redux';

import { AttachmentView } from './Attachment';
import { FormatState, SizeState } from './Store';
import { HScroll } from './HScroll';
import { IDoCardAction } from './Chat';
import * as konsole from './Konsole';

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
  onChange: () => void;
}

interface BotSelectionState {}

const FONTS = {
  nl: { url: '', fontFamily: '' },
  de: { url: '', fontFamily: '' },
  en: { url: '', fontFamily: '' },
  es: { url: '', fontFamily: '' },
  fr: { url: '', fontFamily: '' },
  it: { url: '', fontFamily: '' },
  ru: { url: '', fontFamily: '' }
};

class BotSelection extends React.PureComponent<BotSelectionProps, BotSelectionState> {
  private _handleBotChange = this.handleBotChange.bind(this);

  private handleBotChange(lang) {
    // change fonts
    const code = getLanguageCode(lang);
    const config = FONTS[code];
    const style = `
    @import url(${config.url});
    body .wc-app {
      font-family: "${config.fontdFamily}", sans-serif;
    }
    `;

    let styleTag = document.getElementById('custom-font');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.setAttribute('id', 'custom-font');

      document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = style;

    this.props.onChange(lang);
  }

  render() {
    const { bots, selectedBotName, onChange } = this.props;

    return (
      <div className="bot-selection">
        <button className="value">
          <img src={`./img/${getLanguageCode(selectedBotName)}.svg`} alt="Flag" className="flag" />
          <span>{getLanguageTitle(selectedBotName)}</span>
          <span className="caret" />
        </button>
        <ul className="bot-list">
          {bots &&
            bots.length > 0 &&
            bots.map(lang => (
              <li key={lang}>
                <button onClick={() => this.handleBotChange(lang)}>
                  <img src={`./img/${getLanguageCode(lang)}.svg`} alt="Flag" className="flag" />
                  <span>{getLanguageTitle(lang)}</span>
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state: BotSelectionState) => ({
    selectedBotName: state.history.selectedBotName,
    bots: state.format.bots
  }),
  {
    onChange: (botName: string) => ({
      type: 'Set_Selected_Bot',
      selectedBotName: botName
    })
  },
  (stateProps: any, dispatchProps: any, ownProps: any): BotSelectionProps => ({
    selectedBotName: stateProps.selectedBotName,
    bots: stateProps.bots,
    onChange: dispatchProps.onChange
  })
)(BotSelection);
