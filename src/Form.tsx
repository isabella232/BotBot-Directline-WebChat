import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';

interface FormState {
  data: any;
  action?: string;
  inputs?: Array<object>;
  submitting: boolean;
  submitted: boolean;
  errorMessage: string;
}

interface FormProps {
  inputs: any[];
  action: string;
}

class Form extends React.Component<FormProps, FormState> {
  static POLICY_LINK = 'https://www.kcprofessional.co.uk/privacy-policy';
  static TERM_LINK = 'https://www.kcprofessional.co.uk/terms-of-use';
  private formEl: HTMLFormElement

  static renderDisclaimer(str: string) {
    var reg = /\{\{((\w+\s?)*)\}\}/;
    str = str.replace(reg, '<a href="' + Form.POLICY_LINK + '" target="_blank">$1</a>');
    str = str.replace(reg, '<a href="' + Form.TERM_LINK + '" target="_blank">$1</a>');

    return <span dangerouslySetInnerHTML={{ __html: str }} />;
  }

  constructor(props: FormProps) {
    super(props);

    let data: any = {};
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

    this.formEl = null;
  }

  private _handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);

  getFormRef = (ref: HTMLFormElement) => {
    this.formEl = ref;
  };

  handleSubmitButtonClick(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();

    const formData = new FormData(this.formEl);

    this.setState({ submitting: true, errorMessage: '' });
    // call to saleforces
    // axios.post('https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8', formData);

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

  handleInvalid(e: React.SyntheticEvent<EventTarget>, item: any) {
    const el = e.target as (HTMLSelectElement | HTMLTextAreaElement);
    // const value = el.value;
    if (el.validity.valueMissing && item.requiredMessage) {
      el.setCustomValidity(item.requiredMessage);
    } else if (el.validity.typeMismatch && item.typeMismatchMessage) {
      el.setCustomValidity(item.typeMismatchMessage);
    } else {
      el.setCustomValidity('');
    }
  }

  renderInput(item: any) {
    const { submitting } = this.state;

    switch (item.type) {
      case 'select':
        return (
          <select
            disabled={submitting}
            // placeholder={item.placeholder}
            name={item.id}
            value={item.value}
            required={item.required}
            onInvalid={e => this.handleInvalid(e, item)}
            onChange={e => this.handleInvalid(e, item)}
          >
            {item.optionSelections.map((o: any) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        );

      case 'textarea':
        return (
          <textarea
            name={item.id}
            placeholder={item.placeholder}
            onChange={e => this.handleInvalid(e, item)}
            disabled={submitting}
            value={item.value}
            // autoComplete="off"
            // multiple={item.multiple}
            required={item.required}
            onInvalid={e => this.handleInvalid(e, item)}
            rows={4}
          />
        );
      default:
        return (
          <input
            name={item.id}
            type={item.type}
            placeholder={item.placeholder}
            onChange={e => this.handleInvalid(e, item)}
            disabled={submitting}
            value={item.value}
            autoComplete="off"
            multiple={item.multiple}
            required={item.required}
            onInvalid={e => this.handleInvalid(e, item)}
          />
        );
    }
  }

  render() {
    const { inputs } = this.props;
    const { submitted, errorMessage } = this.state;

    if (!inputs || inputs.length === 0) {
      return (
        <div className="loading">
          <svg
            width="135"
            height="135"
            viewBox="0 0 135 135"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 67 67"
                to="-360 67 67"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 67 67"
                to="360 67 67"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      );
    } else if (submitted) {
      return (
        <div>
          <svg width="511" height="511" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              style={{ fill: '#C3E678' }}
              d="M256,512C114.844,512,0,397.156,0,256S114.844,0,256,0s256,114.844,256,256S397.156,512,256,512z"
            />
            <path
              style={{ fill: '#A5D76E' }}
              d="M375.467,426.667c-141.156,0-256-114.844-256-256c0-59.087,20.318-113.41,54.071-156.783C72.768,48.311,0,143.72,0,256c0,141.156,114.844,256,256,256c82.069,0,155.049-38.974,201.929-99.217C432.012,421.638,404.342,426.667,375.467,426.667z"
            />
            <path
              style={{ fill: '#FFFFFF' }}
              d="M203.034,388.414c-4.518,0-9.038-1.725-12.483-5.173L84.62,277.31c-6.897-6.892-6.897-18.073,0-24.966c6.888-6.897,18.078-6.897,24.966,0l93.449,93.444l181.724-181.72c6.888-6.897,18.078-6.897,24.966,0c6.897,6.892,6.897,18.073,0,24.966L215.517,383.241C212.073,386.689,207.552,388.414,203.034,388.414z"
            />
          </svg>
        </div>
      );
    }

    return (
      <div className="custom-form">
        <form ref={this.getFormRef} onSubmit={this._handleSubmitButtonClick}>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {inputs &&
            inputs.map(item => (
              <div
                key={item.id}
                className={item.type === 'checkbox' ? 'checkbox-group' : 'form-group'}
              >
                {item.type !== 'checkbox' && <label>{item.label}</label>}
                {this.renderInput(item)}
                {item.type === 'checkbox' && <label>{Form.renderDisclaimer(item.label)}</label>}
              </div>
            ))}
        </form>
      </div>
    );
  }
}

// Form.defaultProps = {
//   action:
//     'https://kc-emea-staging.azurewebsites.net/api/feedback/comment/directline/1fe34971-2e9d-4ba5-a9c4-fb9931c76fa3/en-English',
//   inputs: [
//     {
//       type: 'text',
//       id: '00Nc0000003eKOP',
//       label: 'Name',
//       multiple: false,
//       required: true,
//       requiredMessage: 'Name should not be empty',
//       placeholder: 'e.g. John Doe'
//     },
//     {
//       type: 'email',
//       id: '00Nc0000003eKOU',
//       label: 'Email',
//       multiple: false,
//       required: true,
//       requiredMessage: 'Email should not be empty',
//       typeMismatchMessage: 'Email is not in the correct format.',
//       placeholder: 'e.g. name@company.com'
//     },
//     {
//       type: 'text',
//       id: 'description',
//       label: 'Comment',
//       multiple: false,
//       required: true,
//       requiredMessage: 'Comment should not be empty',
//       placeholder: 'Leave your comment here'
//     },
//     {
//       type: 'file',
//       id: 'File_Upload',
//       label: 'File Upload',
//       multiple: true,
//       required: false,
//       placeholder: ''
//     },
//     {
//       type: 'checkbox',
//       id: 'accept',
//       label: 'I hereby consent to the collection and use of my personal data above',
//       multiple: false,
//       required: true,
//       requiredMessage: 'Please accept the consent condition.',
//       typeMismatchMessage: 'Please accept the consent condition.',
//       placeholder: '',
//       checked: false
//     },
//     {
//       type: 'submit',
//       id: 'Submit',
//       label: '',
//       value: 'Submit',
//       multiple: false,
//       required: false,
//       placeholder: ''
//     },
//     { type: 'hidden', id: 'orgid', value: '00Dc0000003odkb', multiple: false, required: false },
//     { type: 'hidden', id: 'recordType', value: '012c000000023xO', multiple: false, required: false }
//   ]
// };
export default Form;
