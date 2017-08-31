import * as React from 'react';
import { connect } from 'react-redux';
import { ChatActions } from './Store';
import { konsole } from './Chat';
import { Transaction } from './Forms/Transaction';
import { ManualSecrefCreation } from './Forms/ManualSecrefCreation';
import { SizeState } from './Store';

export interface FormProps {
    formType: string | number,
    channelData: any,
    size: SizeState,
}

export class FormView extends React.Component<FormProps, {}> {
    private root: HTMLDivElement;

    constructor(props: FormProps) {
        super(props)
    }
    
    private updateContentWidth() {
        //after the attachments have been rendered, we can now measure their actual width
        const width = this.props.size.width;
        
        this.root.style.width = width.toString() + "px";
    }

    componentDidMount() {
        this.updateContentWidth();
    }

    componentDidUpdate() {
        this.updateContentWidth();
    }

    render() {
        return (
            <div className="form-container" ref={ div => this.root = div }>
                {this.props.channelData.name === "form.fundreserve" && <Transaction submitUrl={this.props.channelData.action} />}
                {this.props.channelData.name === "form.manualsecref" && <ManualSecrefCreation submitUrl={this.props.channelData.action} />}
            </div>
        )
    }
}

export const Form = FormView