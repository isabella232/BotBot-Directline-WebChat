import React, { Component } from 'react';
import { GS_CURR_ABBR } from './mockData';

class Transaction extends Component {
    constructor() {
        super();
        this.state = {}
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const target = e.target as (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement);

        this.setState({
            ...this.state,
            [target.name]: target.value,
            [`${target.name}-valid`]: target.validity,
            [`${target.name}-error`]: target.validationMessage,
        });
    }

    getControlClass(validity: ValidityState, ...className: string[]) {
        return `${className.join(' ')} ${validity.valid ? 'valid' : 'invalid'}`
    }

    render() {
        return (
            <form>
                <h1>Transaction</h1>
                <div className="form-group">
                    <label htmlFor="currency">Currency</label>
                    <select
                        name="currency"
                        className={this.getControlClass(this.state['currency-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        {GS_CURR_ABBR.map(currency => <option>{currency}</option>)}
                    </select>
                    <div className="error">{this.state['currency-error']}</div>
                </div>
                <div className="form-group row">
                    <div className="form-group">
                        <label htmlFor="fromVD">From V/D</label>
                        <input 
                            type="text" 
                            name="fromVD"
                            className={this.getControlClass(this.state['fromVD-valid'], "form-control")}
                            onChange={(e) => this.handleChange(e)}
                            required
                        />
                        <div className="error">{this.state['fromVD-error']}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="toVD">To V/D</label>
                        <input
                            name="toVD"
                            type="text" 
                            className={this.getControlClass(this.state['toVD-valid'], "form-control")}
                            onChange={(e) => this.handleChange(e)}
                            required
                        />
                        <div className="error">{this.state['toVD-error']}</div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="reasons">Reasons</label>
                    <input 
                        name="reasons"
                        type="text" 
                        className={this.getControlClass(this.state['reasons-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required 
                    />
                    <div className="error">{this.state['reasons-error']}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="details">Supplementary Details</label>
                    <textarea
                        id="details"
                        name="details"
                        className={this.getControlClass(this.state['details-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={1024}
                    />
                    <div className="error">{this.state['details-error']}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select
                        name="type"
                        className={this.getControlClass(this.state['type-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        <option>Account</option>
                    </select>
                    <div className="error">{this.state['type-error']}</div>
                </div>

                <input type="submit" value="Enter" />
            </form>
        );
    }
}

export default Transaction;