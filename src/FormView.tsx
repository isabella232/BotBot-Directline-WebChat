import * as React from 'react';
import { connect } from 'react-redux';
import { ChatActions } from './Store';
import { konsole } from './Chat';

export interface FormInput {
    id: string,
    label: string,
    placeholder: string,
    type: string,
    value?: any
    checked?: boolean
}

export interface FormProps {
    activityId: string,
    action: string,
    inputs: Array<FormInput>,
    submitDisabled: boolean,
    updateFormInput: (activityId: string, id: string, input: any) => void,
    toggleCheckbox: (activityId: string, id: string) => void,
    disableSubmit: (activityId: string) => void,
    enableSubmit: (activityId: string) => void,
}

export class FormView extends React.Component<FormProps, {}> {        
    constructor(props: FormProps) {
        super(props)
    }
    
    private generateFormData() {
        const { inputs } = this.props;
        const data: any = new FormData();
        for (let i = 0; i < inputs.length; i++) {
            data.append(inputs[i].id, inputs[i].value)
        }
        return data
    }
    
    private formIsValid() {
        const { inputs } = this.props;
        // if there is a checkbox, it needs to be checked for the form to be validated
        const checkbox = inputs.filter((input) => {
            return input.type === 'checkbox'
        })[0];
        if (checkbox) {
            return checkbox.checked
        }
            
        // if there is no checkbox, at the moment, there is no other validation
        return true;
    }
    
    private handleSubmit(event: any) {
        event.preventDefault();
        let { activityId, action, submitDisabled, disableSubmit, enableSubmit } = this.props;
        const data = this.generateFormData();
    
        if (this.formIsValid() && !submitDisabled) {
            // disableSubmit(activityId);
            // axios.post(action, data).then(
            //     (res) => {
            //         konsole.log(res)
            //     }
            // ).catch(
            //     (err) => {
            //         enableSubmit(activityId)
            //         konsole.log(err)
            //     }
            // )
        }
        
    }
    
    private renderInputFields() {
        const { activityId, inputs, updateFormInput, toggleCheckbox } = this.props;
        
        return inputs.map((input: any, index: number) => {
            const { id, label, placeholder, type } = input;
            const value = input.value || '';
            switch(type) {
                case "checkbox":
                    return (
                        <div className="checkbox-group" key={index}>
                            <input 
                                type="checkbox" 
                                id={id} 
                                checked={input.checked} 
                                onChange={ (event) => toggleCheckbox( activityId, id) }/>
                            <label htmlFor={id}>{label}</label>
                        </div>
                    )
                case "textarea":
                    return (
                        <div className="form-group" key={index}>
                            <label htmlFor={id}>{label}</label>
                            <textarea 
                                id={id} 
                                placeholder={placeholder} 
                                value={value} 
                                onChange={ (event) => updateFormInput( activityId, id, event.target.value) }>
                            </textarea>
                        </div>
                    )
                case "file":
                    return (
                        <div className="form-group" key={index}>
                            <label htmlFor={id}>{label}</label>
                            <input 
                                type={type}
                                accept="application/pdf" 
                                id={id} 
                                onChange={ (event) => updateFormInput( activityId, id, event.target.files[0]) }/>
                        </div>
                    )
                default:
                return (
                    <div className="form-group" key={index}>
                        <label htmlFor={id}>{label}</label>
                        <input 
                            type={type} 
                            id={id} 
                            placeholder={placeholder} 
                            value={value} 
                            onChange={ (event) => updateFormInput( activityId, id, event.target.value) }/>
                    </div>
                )
            }
        })
    }
    
    render() {
        const { action, submitDisabled } = this.props;
        const submitClassName = (submitDisabled) ? 'disabled' : '';

        return (
            <div className="customForm">
                <form onSubmit={e => this.handleSubmit(e)}>
                    {this.renderInputFields()}
                    <input className={submitClassName} type="submit" value="Submit" />
                </form>
            </div>   
        )
    }
}

export const Form = connect(
    null, 
    {
        updateFormInput: (activityId: string, id: string, input: any) => ({
             type: 'Update_Form_Input',
             activityId,
             id,
             input 
         } as ChatActions),
         toggleCheckbox: (activityId: string, id: string) => ({
             type: 'Toggle_Checkbox',
             activityId,
             id
         }),
         disableSubmit: (activityId: string) => ({
             type: 'Disable_Submit',
             activityId
         }),
         enableSubmit: (activityId: string) => ({
             type: 'Enable_Submit',
             activityId
         })
    }, 
    (stateProps: any, dispatchProps: any, ownProps: any): FormProps => ({
        // from stateProps
        activityId: ownProps.activityId,
        action: ownProps.action,
        inputs: ownProps.inputs,
        submitDisabled: ownProps.submitDisabled,
        updateFormInput: dispatchProps.updateFormInput,
        toggleCheckbox: dispatchProps.toggleCheckbox,
        disableSubmit: dispatchProps.disableSubmit,
        enableSubmit: dispatchProps.enableSubmit,
    })
)(FormView);