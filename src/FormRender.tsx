import * as React from 'react';
import { connect } from 'react-redux';

class FormRender extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.selectedBotName && nextProps.selectedBotName !== this.props.selectedBotName) {
      return false;
    }
  }

  handleLoad = (e) => {
    const form = this.formEl; // e.target;
    if (form.contentDocument) {
      form.style.height = '';
      form.style.minHeight = '';
      form.style.minHeight = `${form.contentDocument.body.offsetHeight + 40}px`;
    } else {
      form.style.height = '';
      form.style.minHeight = '';
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
          display: 'block',
          height: 646,
          width: '100%'
        }}
        onLoad={this.handleLoad}
      />
    );
  }
}

export default connect(state => ({
  selectedBotName: state.history.selectedBotName
}))(FormRender);
