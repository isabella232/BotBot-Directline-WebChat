import React, { Component } from 'react';
import { CURRENCIES, NOSTRO } from './mockData';
import moment, { Moment } from 'moment';
import DateTime from 'react-datetime';

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

    handleDateChange(elemName: string, value: any) {
        this.setState({
            ...this.state,
            [elemName]: value,
            [`${elemName}-valid`]: (typeof(value) === 'string'),
            [`${elemName}-error`]: "Date is invalid",
        })
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
                        {CURRENCIES.map(currency => <option>{currency}</option>)}
                    </select>
                    <div className="error">{this.state['currency-error']}</div>
                </div>
                <div className="form-group row">
                    <div className="form-group">
                        <label htmlFor="fromVD">From V/D</label>
                        <DateTime
                            className={this.getControlClass(this.state['fromVD-valid'], "form-control")}
                            onChange={(value) => this.handleDateChange('fromVD', value)}
                            timeFormat={false}
                        />
                        <div className="error">{this.state['fromVD-error']}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="toVD">To V/D</label>
                        <DateTime
                            className={this.getControlClass(this.state['toVD-valid'], "form-control")}
                            onChange={(value) => this.handleDateChange('toVD', value)}
                            timeFormat={false}
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
                        <option selected>Account</option>
                    </select>
                    <div className="error">{this.state['type-error']}</div>
                </div>

                <h1>Transaction</h1>
                <div className="form-group">
                    <label htmlFor="accountOrPortfolio">Account / Portfolio</label>
                    <select
                        name="accountOrPortfolio"
                        className={this.getControlClass(this.state['accountOrPortfolio-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        <option selected>B</option>
                        <option selected>C</option>
                        <option selected>H</option>
                    </select>
                    <div className="error">{this.state['accountOrPortfolio-error']}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="nostro">Nostro Bank / Nostro AC / Bank Name</label>
                    <select
                        name="nostro"
                        className={this.getControlClass(this.state['nostro-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        {NOSTRO.map((nostro) => <option>{nostro}</option>)}
                    </select>
                    <div className="error">{this.state['nostro-error']}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input 
                        name="amount"
                        type="text" 
                        className={this.getControlClass(this.state['amount-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required 
                    />
                    <div className="error">{this.state['amount-error']}</div>
                </div>

                <input type="submit" value="Enter" />
            </form>
        );
    }
}

export default Transaction;