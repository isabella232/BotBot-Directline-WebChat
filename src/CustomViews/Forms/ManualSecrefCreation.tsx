import 'whatwg-fetch'
import * as React from 'react';
import { Moment } from 'moment';
import * as moment from 'moment';
import * as DateTime from 'react-datetime';
import * as _ from "lodash";
import { COUNTRIES, GS_CURR_ABBR } from './mockData'

const DATE_FORMAT = "DD/MM/YYYY"

const MANUALSECREF_KEYS: string[] = [
    "account",
    "asOfDate",
    "assetType",
    "vendorUniqueQualifier",
    "pNoteISIN",
    "securityDescription",
    "maturityDate",
    "countryOfIssue",
    "tradeCurrency",
    "underlyingISIN",
    "underlyingCUSIP",
    "underlyingSEDOL",
    "underlyingBloombergSecurityTicker",
    "underlyingSecurityDescription",
    "underlyingCountryOfIssue",
    "underlyingTradeCurrency",
]

export class ManualSecrefCreation extends React.Component<{
    submitUrl: string,
}, any> {
    constructor() {
        super();
        this.state = Object.assign(
            {},
            _.fromPairs(MANUALSECREF_KEYS.map(key => [key, ''])),
            {
                'countryOfIssue': COUNTRIES[0],
                'tradeCurrencyOptions': GS_CURR_ABBR[0],
                'underlyingTradeCurrencyOptions': GS_CURR_ABBR[0],
                'submitToEmail': '',
            }
        );
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
                'manualSecref': 
                    _.zipObject(MANUALSECREF_KEYS, MANUALSECREF_KEYS.map(key => this.state[key] || '')),
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
        const countryOfIssueOptions = COUNTRIES.map((country, idx) => <option key={idx}>{country.name}</option>)
        const tradeCurrencyOptions = GS_CURR_ABBR.map((currency, idx) => <option key={idx}>{currency}</option>)
        const underlyingTradeCurrencyOptions = GS_CURR_ABBR.map((currency, idx) => <option key={idx}>{currency}</option>)
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <h1>Manual Secref Creation</h1>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="account">Account</label>
                    </div>
                    <input
                        name="account"
                        className={this.getControlClass(this.state['account-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.account}
                    />
                    {/* <div className="error">{this.state['account-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="asOfDate">As of Date</label>
                    </div>
                    <DateTime
                        dateFormat={DATE_FORMAT}
                        className={this.getControlClass(this.state['asOfDate-valid'], "form-control")}
                        onChange={(value) => this.handleDateChange('asOfDate', value)}
                        timeFormat={false}
                        value={this.state.asOfDate}
                    />
                    {/* <div className="error">{this.state['asOfDate-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="assetType">Asset Type</label>
                    </div>
                    <input
                        name="assetType"
                        className={this.getControlClass(this.state['assetType-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.assetType}
                    />
                    {/* <div className="error">{this.state['assetType-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="vendorUniqueQualifier">Vendor Unique Qualifier</label>
                    </div>
                    <input 
                        name="vendorUniqueQualifier"
                        type="text" 
                        className={this.getControlClass(this.state['vendorUniqueQualifier-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.vendorUniqueQualifier}
                    />
                    {/* <div className="error">{this.state['vendorUniqueQualifier-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="pNoteISIN" className="required">P Note ISIN</label>
                    </div>
                    <input
                        name="pNoteISIN"
                        className={this.getControlClass(this.state['pNoteISIN-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        minLength={12}
                        maxLength={12}
                        required
                        value={this.state.pNoteISIN}
                    />
                    {/* <div className="error">{this.state['pNoteISIN-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="securityDescription" className="required">Security Description</label>
                    </div>
                    <input
                        name="securityDescription"
                        className={this.getControlClass(this.state['securityDescription-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                        value={this.state.securityDescription}
                    />
                    {/* <div className="error">{this.state['securityDescription-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="maturityDate">Maturity Date</label>
                    </div>
                    <DateTime
                        dateFormat={DATE_FORMAT}
                        className={this.getControlClass(this.state['maturityDate-valid'], "form-control")}
                        onChange={(value) => this.handleDateChange('maturityDate', value)}
                        isValidDate={(currentDate: Moment) => (currentDate.isSameOrAfter(moment(), 'day'))}
                        timeFormat={false}
                        value={this.state.maturityDate}
                    />
                    {/* <div className="error">{this.state['maturityDate-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="countryOfIssue" className="required">Country Of Issue</label>
                    </div>
                    <select
                        name="countryOfIssue"
                        className={this.getControlClass(this.state['countryOfIssue-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                        value={this.state.countryOfIssue}
                    >
                        {countryOfIssueOptions || []}
                    </select>
                    {/* <div className="error">{this.state['countryOfIssue-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="tradeCurrency" className="required">Trade Currency</label>
                    </div>
                    <select
                        name="tradeCurrency"
                        className={this.getControlClass(this.state['tradeCurrency-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                        value={this.state.tradeCurrency}
                    >
                        {tradeCurrencyOptions || []}
                    </select>
                    <div className="error">{this.state['tradeCurrency-error']}</div>
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="underlyingISIN">Underlying ISIN</label>
                    </div>
                    <input
                        name="underlyingISIN"
                        className={this.getControlClass(this.state['underlyingISIN-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.underlyingISIN}
                    />
                    {/* <div className="error">{this.state['underlyingISIN-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="underlyingCUSIP">Underlying CUSIP</label>
                    </div>
                    <input 
                        name="underlyingCUSIP"
                        type="text" 
                        className={this.getControlClass(this.state['underlyingCUSIP-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.underlyingCUSIP}
                    />
                    {/* <div className="error">{this.state['underlyingCUSIP-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="underlyingSEDOL">Underlying SEDOL</label>
                    </div>
                    <input 
                        name="underlyingSEDOL"
                        type="text" 
                        className={this.getControlClass(this.state['underlyingSEDOL-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.underlyingSEDOL}
                    />
                    {/* <div className="error">{this.state['underlyingSEDOL-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="underlyingBloombergSecurityTicker">Underlying Bloomberg Security Ticker</label>
                    </div>
                    <input 
                        name="underlyingBloombergSecurityTicker"
                        type="text" 
                        className={this.getControlClass(this.state['underlyingBloombergSecurityTicker-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.underlyingBloombergSecurityTicker}
                    />
                    {/* <div className="error">{this.state['underlyingBloombergSecurityTicker-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="underlyingSecurityDescription">Underlying Security Description</label>
                    </div>
                    <input
                        name="underlyingSecurityDescription"
                        className={this.getControlClass(this.state['underlyingSecurityDescription-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.underlyingSecurityDescription}
                    />
                    {/* <div className="error">{this.state['underlyingSecurityDescription-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="underlyingCountryOfIssue">Underlying Country Of Issue</label>
                    </div>
                    <input
                        name="underlyingCountryOfIssue"
                        className={this.getControlClass(this.state['underlyingCountryOfIssue-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.underlyingCountryOfIssue}
                    />
                    {/* <div className="error">{this.state['underlyingCountryOfIssue-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="underlyingTradeCurrency">Underlying Trade Currency</label>
                    </div>
                    <select
                        name="underlyingTradeCurrency"
                        className={this.getControlClass(this.state['underlyingTradeCurrency-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.underlyingTradeCurrency}
                    >
                        {underlyingTradeCurrencyOptions || []}
                    </select>
                    {/* <div className="error">{this.state['underlyingTradeCurrency-error']}</div> */}
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
                    value="Submit"
                />
            </form>
        );
    }
}