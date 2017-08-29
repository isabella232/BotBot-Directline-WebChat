import * as React from 'react';
import { connect } from 'react-redux';
import { ChatActions } from './Store';
import { konsole } from './Chat';

export interface FormProps {
    activityId?: string,
    action?: string,
    formType: string,
    formData?: object,
}

export class FormView extends React.Component<FormProps, {}> {        
    constructor(props: FormProps) {
        super(props)
    }
    
    render() {
        return (
            <div>
            </div>
        )
    }
}

export const Form = FormView