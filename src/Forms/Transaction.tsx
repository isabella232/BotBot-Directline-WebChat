import 'whatwg-fetch'
import * as React from 'react';
import { CURRENCIES, NOSTRO, REASONS } from './mockData';
import { Moment } from 'moment';
import * as moment from 'moment';
import * as DateTime from 'react-datetime';
import * as _ from "lodash";

const TRANSACTION_KEYS: string[] = [
    "currency",
    "fromVD",
    "toVD",
    "reasons",
    "details",
    "type",
    "account",
]


const TRANSACTION_DETAILS_KEYS: string[]  = [
    "accountOrPortfolio",
    "nostro",
    "amount",
]

export class Transaction extends React.Component<{
    submitUrl: string,
}, any> {
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

    getControlClass(validity?: ValidityState, ...className: string[]) {
        if (!validity) return className.join(' ');
        else return `${className.join(' ')} ${validity.valid ? 'valid' : 'invalid'}`
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (this.props.submitUrl) {
            const formData = {
                'transaction': 
                    _.zipObject(TRANSACTION_KEYS, TRANSACTION_KEYS.map(key => this.state[key])),
                'transactionDetails': 
                    _.zipObject(TRANSACTION_DETAILS_KEYS, TRANSACTION_DETAILS_KEYS.map(key => this.state[key])),
            }

            fetch(this.props.submitUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            })
            .then(resp => console.log(resp))
            .catch(err => console.error(err))
        }
    }

    render() {
        const portfolioNames = _.uniq(NOSTRO
                                .filter((nostro) => nostro.GS_CURR_ABBR === this.state.currency)
                                .map((nostro) => nostro.GS_ACCNT_GROUP))
                            .map((item, idx) => <option key={idx}>{item}</option>)
        const bankNames = _.uniq(NOSTRO
                                .filter((nostro) => nostro.GS_CURR_ABBR === this.state.currency
                                                && nostro.GS_ACCNT_GROUP === this.state.accountOrPortfolio)
                                .map((nostro) => nostro.GS_CPARTY_DES))
                            .map((item, idx) => <option key={idx}>{item}</option>)

        const reasons = REASONS.map((item, idx) => <option key={idx}>{item}</option>)

        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <h1>Transaction</h1>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="currency">Currency</label>
                    </div>
                    <select
                        name="currency"
                        className={this.getControlClass(this.state['currency-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        {CURRENCIES.map((currency: string) => <option>{currency}</option>)}
                    </select>
                    {/* <div className="error">{this.state['currency-error']}</div> */}
                </div>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="fromVD">From V/D</label>
                    </div>
                    <div className="form-group">
                        <DateTime
                            className={this.getControlClass(this.state['fromVD-valid'], "small")}
                            onChange={(value) => this.handleDateChange('fromVD', value)}
                            isValidDate={(currentDate: Moment) => (currentDate.isSameOrAfter(moment()))}
                            timeFormat={false}
                        />
                        {/* <div className="error">{this.state['fromVD-error']}</div> */}
                        <label htmlFor="toVD">To V/D</label>
                        <DateTime
                            className={this.getControlClass(this.state['toVD-valid'], "small")}
                            onChange={(value) => this.handleDateChange('toVD', value)}
                            isValidDate={(currentDate: Moment) => (currentDate.isSameOrAfter(moment()))}
                            timeFormat={false}
                        />
                        {/* <div className="error">{this.state['toVD-error']}</div> */}
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="reasons">Reasons</label>
                    </div>
                    <select 
                        name="reasons"
                        className={this.getControlClass(this.state['reasons-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        required 
                    >
                        {reasons}
                    </select>
                    {/* <div className="error">{this.state['reasons-error']}</div> */}
                </div>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="details">Supplementary Details</label>
                    </div>
                    <textarea
                        id="details"
                        name="details"
                        className={this.getControlClass(this.state['details-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={1024}
                    />
                    {/* <div className="error">{this.state['details-error']}</div> */}
                </div>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="type">Type</label>
                    </div>
                    <select
                        name="type"
                        className={this.getControlClass(this.state['type-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        defaultValue="account"
                        required
                    >
                        <option value="account">Account</option>
                    </select>
                    {/* <div className="error">{this.state['type-error']}</div> */}
                </div>

                <h1>Transaction Details</h1>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="accountOrPortfolio" className="col-1">Account / Portfolio</label>
                    </div>
                    <select
                        name="accountOrPortfolio"
                        className={this.getControlClass(this.state['accountOrPortfolio-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                    {portfolioNames}
                    </select>
                    {/* <div className="error">{this.state['accountOrPortfolio-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="nostro" className="col-1">Nostro Bank / Nostro AC / Bank Name</label>
                    </div>
                    <select
                        name="nostro"
                        className={this.getControlClass(this.state['nostro-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        {bankNames}
                    </select>
                    {/* <div className="error">{this.state['nostro-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="amount" className="col-1">Amount</label>
                    </div>
                    <input 
                        name="amount"
                        type="text" 
                        className={this.getControlClass(this.state['amount-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        required 
                    />
                    {/* <div className="error">{this.state['amount-error']}</div> */}
                </div>

                <input 
                    type="submit" 
                    value="Enter" 
                />
            </form>
        );
    }
}