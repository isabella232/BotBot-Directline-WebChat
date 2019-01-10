import * as React from 'react';
import axios from 'axios';

export interface IInputItem {
  label: string;
  value: string;
  type: string;
  required: boolean;
  placeholder: string;
  id: string;
  checked: boolean;
}
export interface FormProps {
  action: string;
  inputs: Array<IInputItem>;
}

export interface InputData {
  [key: string]: any;
}

export interface FormState {
  data: InputData;
  submitted: boolean;
}

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    let data: InputData = {};
    if (props.inputs && props.inputs.length > 0) {
      props.inputs.forEach((item: IInputItem) => {
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
    let isValid: number = this.props.inputs.findIndex(
      (item: IInputItem) => !this.state.data[item.id]
    );

    return isValid === -1;
  }

  handleSubmit(e: any) {
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

  handleChange(e: any) {
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
            inputs.map((item: IInputItem) => (
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
