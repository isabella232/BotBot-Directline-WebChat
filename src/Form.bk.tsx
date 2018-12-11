import * as React from 'react';
import axios from 'axios';
import * as ReactDOMServer from 'react-dom/server';
import * as ReactDOM from 'react-dom';

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
    // this.handleFrameLoad = this.handleFrameLoad.bind(this);
    this.formEl = null;
  }

  getFormRef = ref => {
    this.formEl = ref;
  };

  componentDidMount() {
    this.iframeEl.contentDocument.body.innerHTML = ReactDOMServer.renderToString(this.renderForm());
    const link = document.createElement('link');
    link.setAttribute('href', './form.css');
    link.setAttribute('rel', 'stylesheet');
    this.iframeEl.contentDocument.head.appendChild(link);

    const form = this.iframeEl.contentDocument.querySelector('form');
    form.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit(e) {
    // e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData2 = new FormData(this.formEl);

    this.setState({ submitting: true, errorMessage: '' });

    axios
      .post(this.props.action, formData)
      .then(resp => {
        // this.setState({
        //   submitted: true
        // });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.response.data.message
        });
      })
      .then(() => {
        // this.setState({ submitting: false });
      });

    // formData2.delete('accept');
    // formData2.delete('File_Upload');

    // axios.post(
    //   'https://kcp--GBQAbox.cs14.my.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8',
    //   formData2
    // );
    // call to saleforces
    // axios.post('https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8', formData2);
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
  }

  renderForm() {
    const { inputs } = this.props;
    const { submitted, submitting, errorMessage } = this.state;

    return (
      <div className="custom-form">
        <form
          action="https://kcp--GBQAbox.cs14.my.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
          method="POST"
          ref={el => (this.formEl = el)}
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="retURL" value={`${window.location.origin}/success.html`} />

          {errorMessage && <p className="error">{errorMessage}</p>}
          {inputs &&
            inputs.map(item => (
              <div
                key={item.id}
                className={item.type === 'checkbox' ? 'checkbox-group' : 'form-group'}
              >
                {item.type !== 'checkbox' && <label>{item.label}</label>}
                {item.type === 'select' ? (
                  <select
                    disabled={submitting || submitted}
                    placeholder={item.placeholder}
                    name={item.id}
                    defaultValue={item.value}
                    required={item.required}
                    onInvalid={e => this.handleInvalid(e, item)}
                    onChange={e => this.handleInvalid(e, item)}
                  >
                    {item.optionSelections.map(o => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={item.id}
                    type={item.type}
                    placeholder={item.placeholder}
                    onChange={e => this.handleInvalid(e, item)}
                    disabled={submitting || submitted}
                    defaultValue={item.value}
                    autoComplete="off"
                    multiple={item.multiple}
                    required={item.required}
                    onInvalid={e => this.handleInvalid(e, item)}
                  />
                )}
                {item.type === 'checkbox' && <label>{item.label}</label>}
              </div>
            ))}
        </form>
      </div>
    );
  }

  // handleFrameLoad() {
  //   const frameBody = ReactDOMServer.renderToString(this.renderForm());

  //   console.log(this.frameEl);
  // }

  render() {
    const { errorMessage } = this.state;
    return;
    <div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <iframe ref={el => (this.iframeEl = el)} style={{ border: 0 }} />;
    </div>;
  }
}

// export default Form;

ReactDOM.render(Form, document.getElementById('app'));
