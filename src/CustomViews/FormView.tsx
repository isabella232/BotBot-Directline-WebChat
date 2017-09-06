import * as React from 'react';
import { Transaction } from './Forms/Transaction';
import { ManualSecrefCreation } from './Forms/ManualSecrefCreation';
import { SizeState } from '../Store';

export interface FormProps {
    formType: string | number,
    channelData: any,
    size: SizeState,
}

export class FormView extends React.Component<FormProps, {}> {
    constructor(props: FormProps) {
        super(props)
    }

    render() {
        return (
            <div className="form-container">
                {this.props.channelData.name === "form.fundreserve" && <Transaction submitUrl={this.props.channelData.data} />}
                {this.props.channelData.name === "form.manualsecref" && <ManualSecrefCreation submitUrl={this.props.channelData.data} />}
            </div>
        )
    }
}

export const Form = FormView