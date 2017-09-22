import 'whatwg-fetch'
import * as React from 'react';
import { CURRENCIES, NOSTRO, REASONS } from './mockData';
import { Moment } from 'moment';
import * as moment from 'moment';
import * as DateTime from 'react-datetime';
import * as _ from "lodash";

const DATE_FORMAT = "DD/MM/YYYY"

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
    refs: any = {};

    constructor() {
        super();

        const portfolioNamesDropdown = this.getPortfolioNames(CURRENCIES[0]);
        const bankNamesDropdown = this.getBankNames(CURRENCIES[0], portfolioNamesDropdown[0])

        const accountOrPortfolio = portfolioNamesDropdown ? portfolioNamesDropdown[0] : '';
        const nostro = bankNamesDropdown ? bankNamesDropdown[0]: '';

        this.state = {
            'currency': CURRENCIES[0],
            'type': 'account',
            'reasons': REASONS[0],
            'currenciesDropdown': CURRENCIES,
            portfolioNamesDropdown,
            accountOrPortfolio,
            bankNamesDropdown,
            nostro,
            'reasonsDropdown': REASONS,
        }
    }

    getPortfolioNames(currency: string) {
        return _.uniq(NOSTRO
            .filter((nostro) => nostro.GS_CURR_ABBR === currency)
            .map((nostro) => nostro.GS_ACCNT_GROUP))
    }

    getBankNames(currency: string, accountOrPortfolio: string) {
        return _.uniq(NOSTRO
            .filter((nostro) => nostro.GS_CURR_ABBR === currency
                            && nostro.GS_ACCNT_GROUP === accountOrPortfolio)
            .map((nostro) => nostro.GS_CPARTY_DES))
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const target = e.target as (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement);
        const targetName = target.name;
        const targetValue = target.value;

        let bankNamesDropdown = this.state.bankNamesDropdown;
        let nostro = this.state.nostro;

        let portfolioNamesDropdown = this.state.portfolioNamesDropdown;
        let accountOrPortfolio = this.state.accountOrPortfolio;

        if (targetName === 'currency') {
            bankNamesDropdown = this.getBankNames(targetValue, this.state.accountOrPortfolio);
            nostro = bankNamesDropdown ? bankNamesDropdown[0] : '';

            portfolioNamesDropdown = this.getPortfolioNames(targetValue);
            accountOrPortfolio = portfolioNamesDropdown ? portfolioNamesDropdown[0] : '';
        }
        else if (targetName === 'accountOrPortfolio') {
            bankNamesDropdown = this.getBankNames(this.state.currency, targetValue);
            nostro = bankNamesDropdown ? bankNamesDropdown[0] : '';
        }

        // lets the target state override the previous state
        this.setState(Object.assign(
            {},
            {
                bankNamesDropdown,
                nostro,
                portfolioNamesDropdown,
                accountOrPortfolio,
            },
            {
                [targetName]: targetValue,
                [`${targetName}-valid`]: target.validity,
                [`${targetName}-error`]: target.validationMessage,
            }
        ));
    }

    handleDateChange(elemName: string, value: any) {
        this.setState({
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
                    _.zipObject(TRANSACTION_KEYS, 
                        TRANSACTION_KEYS.map(key => this.state[key] || '')),
                'transactionDetails': 
                    _.zipObject(TRANSACTION_DETAILS_KEYS, 
                        TRANSACTION_DETAILS_KEYS.map(key => this.state[key] || '')),
                'submitToEmail': this.state.submitToEmail || '',
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
        const currencies = this.state.currenciesDropdown
            .map((currency: string) => <option>{currency}</option>)
        const portfolioNames = this.state.portfolioNamesDropdown
            .map((item: string, idx: number) => <option key={idx}>{item}</option>)
        const bankNames = this.state.bankNamesDropdown
            .map((item: string, idx: number) => <option key={idx}>{item}</option>)
        const reasons = this.state.reasonsDropdown
            .map((item: string, idx: number) => <option key={idx}>{item}</option>)

        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <h1>Transaction</h1>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="currency" className="required">Currency</label>
                    </div>
                    <select
                        name="currency"
                        className={this.getControlClass(this.state['currency-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.currency}
                        required
                    >
                        {currencies || []}
                    </select>
                    {/* <div className="error">{this.state['currency-error']}</div> */}
                </div>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="fromVD" className="required">From V/D</label>
                    </div>
                    <div className="form-group">
                        <DateTime
                            dateFormat={DATE_FORMAT}
                            className={this.getControlClass(this.state['fromVD-valid'], "small")}
                            onChange={(value) => this.handleDateChange('fromVD', value)}
                            isValidDate={(currentDate: Moment) => (currentDate.isSameOrAfter(moment(), 'day'))}
                            timeFormat={false}
                            inputProps={{required: true}}
                            value={this.state.fromVD}
                        />
                        {/* <div className="error">{this.state['fromVD-error']}</div> */}
                        <label htmlFor="toVD" className="required">To V/D</label>
                        <DateTime
                            dateFormat={DATE_FORMAT}
                            className={this.getControlClass(this.state['toVD-valid'], "small")}
                            onChange={(value) => this.handleDateChange('toVD', value)}
                            isValidDate={(currentDate: Moment) => (currentDate.isSameOrAfter(moment(), 'day'))}
                            timeFormat={false}
                            inputProps={{required: true}}
                            value={this.state.toVD}
                        />
                        {/* <div className="error">{this.state['toVD-error']}</div> */}
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="reasons" className="required">Reasons</label>
                    </div>
                    <select 
                        name="reasons"
                        className={this.getControlClass(this.state['reasons-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.reasons}
                        required 
                    >
                        {reasons || []}
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
                        value={this.state.details}
                        maxLength={1024}
                    />
                    {/* <div className="error">{this.state['details-error']}</div> */}
                </div>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="type" className="required">Type</label>
                    </div>
                    <select
                        name="type"
                        className={this.getControlClass(this.state['type-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.type}
                        required
                    >
                        <option value="account">Account</option>
                    </select>
                    {/* <div className="error">{this.state['type-error']}</div> */}
                </div>

                <h1>Transaction Details</h1>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="accountOrPortfolio" className="required">Account / Portfolio</label>
                    </div>
                    <select
                        name="accountOrPortfolio"
                        className={this.getControlClass(this.state['accountOrPortfolio-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.accountOrPortfolio}
                        required
                    >
                    {portfolioNames || []}
                    </select>
                    {/* <div className="error">{this.state['accountOrPortfolio-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="nostro" className="required">Nostro Bank / Nostro AC / Bank Name</label>
                    </div>
                    <select
                        name="nostro"
                        className={this.getControlClass(this.state['nostro-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.nostro}
                        required
                    >
                        {bankNames || []}
                    </select>
                    {/* <div className="error">{this.state['nostro-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="amount" className="required">Amount</label>
                    </div>
                    <div className="input-label">{this.state['currency']}</div>
                    <input 
                        name="amount"
                        type="text" 
                        className={this.getControlClass(this.state['amount-valid'], "with-label")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.amount}
                        required 
                    />
                    {/* <div className="error">{this.state['amount-error']}</div> */}
                </div>

                {/* separator div */}
                <div style={{height: '25px'}} />

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="submitToEmail" className="required">Submit to Email</label>
                    </div>
                    <input 
                        name="submitToEmail"
                        type="email" 
                        className={this.getControlClass(this.state['submitToEmail-valid'])}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.submitToEmail}
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