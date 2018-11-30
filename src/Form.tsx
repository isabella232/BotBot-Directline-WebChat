import * as React from 'react';
import axios from 'axios';

interface FormProps {
  action: string;
  inputs: Array<object>;
}

class Form extends React.Component<FormProps> {
  constructor(props) {
    super(props);

    let data = {};
    if (props.inputs && props.inputs.length > 0) {
      props.inputs.forEach(item => {
        if (item.type === 'checkbox') {
          data[item.id] = item.checked;
        } else {
          data[item.id] = '';
        }
      });
    }
    this.state = {
      data,
      submitted: false,
      submitting: false,
      errorMessage: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleInvalid = this.handleInvalid.bind(this);
  }

  isValid() {
    let isValid = false;
    isValid = this.props.inputs.findIndex(item => !this.state.data[item]);

    return isValid === -1;
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    const keys = Object.keys(this.state.data);
    keys.forEach(k => {
      const values = this.state.data[k];
      if (typeof values === 'object' && values.length > 0) {
        for (let i = 0; i < values.length; i++) {
          formData.append(k, values[i]);
        }
      } else {
        formData.append(k, this.state.data[k] === false ? '' : this.state.data[k]);
      }
    });
    this.setState({ submitting: true, errorMessage: '' });
    axios
      .post(this.props.action, formData)
      .then(resp => {
        this.setState({
          submitted: true
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.response.data.message
        });
      })
      .then(() => {
        this.setState({ submitting: false });
      });
  }

  handleChange(e, item) {
    let value;
    const data = {};
    if (e.target.type === 'file') {
      value = e.target.files;
    } else {
      value = e.target.value;
    }

    data[e.target.name] = value;
    if (e.target.type === 'checkbox') {
      data[e.target.name] = e.target.checked;
    }

    this.setState({
      data: {
        ...this.state.data,
        ...data
      }
    });

    this.handleInvalid(e, item);
  }

  handleInvalid(e, item) {
    const el = e.target;
    const value = e.target.value;
    if (el.validity.valueMissing && item.requiredMessage) {
      el.setCustomValidity(item.requiredMessage);
    } else if (el.validity.typeMismatch && item.typeMismatchMessage) {
      el.setCustomValidity(item.typeMismatchMessage);
    } else {
      el.setCustomValidity('');
    }

    // return false;
  }

  render() {
    const { inputs } = this.props;
    const { submitted, submitting, errorMessage } = this.state;

    return (
      <div className="custom-form">
        <form onSubmit={this.handleSubmit}>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {inputs &&
            inputs.map(item => (
              <div
                key={item.id}
                className={item.type === 'checkbox' ? 'checkbox-group' : 'form-group'}
              >
                {item.type !== 'checkbox' && <label>{item.label}</label>}
                <input
                  name={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                  onChange={e => this.handleChange(e, item)}
                  disabled={submitting || submitted}
                  value={item.value}
                  autoComplete="off"
                  multiple={item.multiple}
                  required={item.required}
                  onInvalid={e => this.handleInvalid(e, item)}
                />
                {item.type === 'checkbox' && <label>{item.label}</label>}
              </div>
            ))}
        </form>
      </div>
    );
  }
}

export default Form;
