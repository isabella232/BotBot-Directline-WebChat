import * as React from 'react';
import { connect } from 'react-redux';

class FormRender extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.selectedBotName && nextProps.selectedBotName !== this.props.selectedBotName) {
      return false;
    }
  }

  render() {
    const { action } = this.props;

    return (
      <iframe
        ref={el => (this.formEl = el)}
        src={`${window.location.origin}/form.html?lang=${
          this.props.selectedBotName
        }&action=${action}`}
        style={{
          border: 0,
          height: 450,
          display: 'block',
          width: '100%'
        }}
      />
    );
  }
}

export default connect(state => ({
  selectedBotName: state.history.selectedBotName
}))(FormRender);
