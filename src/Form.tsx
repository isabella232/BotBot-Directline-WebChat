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
    this.state = { data, submitted: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      formData.append(k, this.state.data[k]);
    });
    axios.post(this.props.action, formData).then(resp => {
      this.setState({
        submitted: true
      });
    });
  }

  handleChange(e) {
    let value = e.target.value;
    if (e.target.type === 'file') {
      value = e.target.files[0];
    }

    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: value
      }
    });
  }

  render() {
    const { inputs } = this.props;

    return (
      <div className="custom-form">
        <form onSubmit={this.handleSubmit}>
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
                  onChange={this.handleChange}
                  disabled={this.state.submitted}
                />
                {item.type === 'checkbox' && <label>{item.label}</label>}
              </div>
            ))}
          <button type="submit" disabled={this.isValid() || this.state.submitted}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;