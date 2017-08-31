import 'whatwg-fetch'
import * as React from 'react';
import { Moment } from 'moment';
import * as moment from 'moment';
import * as DateTime from 'react-datetime';
import * as _ from "lodash";
import { COUNTRIES, GS_CURR_ABBR } from './mockData'

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

    handleSubmit(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        if (this.props.submitUrl) {
            const formData = {
                'manualSecref': 
                    _.zipObject(MANUALSECREF_KEYS, MANUALSECREF_KEYS.map(key => this.state[key])),
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
        return (
            <form>
                <h1>Manual Secref Creation</h1>
                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="account">Account</label>
                    </div>
                    <select
                        name="account"
                        className={this.getControlClass(this.state['account-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        <option>Blakeney_LP</option>
                    </select>
                    {/* <div className="error">{this.state['account-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="asOfDate">As of Date</label>
                    </div>
                    <DateTime
                        className={this.getControlClass(this.state['asOfDate-valid'], "form-control")}
                        onChange={(value) => this.handleDateChange('asOfDate', value)}
                        timeFormat={false}
                    />
                    {/* <div className="error">{this.state['asOfDate-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="assetType">Asset Type</label>
                    </div>
                    <select
                        name="assetType"
                        className={this.getControlClass(this.state['assetType-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        <option>P Note</option>
                    </select>
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
                    />
                    {/* <div className="error">{this.state['vendorUniqueQualifier-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="pNoteISIN">P Note ISIN</label>
                    </div>
                    <select
                        name="pNoteISIN"
                        className={this.getControlClass(this.state['pNoteISIN-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        <option>CWN5647P7682</option>
                        <option>CWN5647Q7251</option>
                    </select>
                    {/* <div className="error">{this.state['pNoteISIN-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="securityDescription">Security Description</label>
                    </div>
                    <select
                        name="securityDescription"
                        className={this.getControlClass(this.state['securityDescription-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        <option>Dallah Healthcare</option>
                        <option>Al Rajhi Bank</option>
                    </select>
                    {/* <div className="error">{this.state['securityDescription-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="maturityDate">Maturity Date</label>
                    </div>
                    <DateTime
                        className={this.getControlClass(this.state['maturityDate-valid'], "form-control")}
                        onChange={(value) => this.handleDateChange('maturityDate', value)}
                        isValidDate={(currentDate: Moment) => (currentDate.isAfter(moment()))}
                        timeFormat={false}
                    />
                    {/* <div className="error">{this.state['maturityDate-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="countryOfIssue">Country Of Issue</label>
                    </div>
                    <select
                        name="countryOfIssue"
                        className={this.getControlClass(this.state['countryOfIssue-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        {COUNTRIES.map((country) => <option>{country.name}</option>)}
                    </select>
                    {/* <div className="error">{this.state['countryOfIssue-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="tradeCurrency">Trade Currency</label>
                    </div>
                    <select
                        name="tradeCurrency"
                        className={this.getControlClass(this.state['tradeCurrency-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                        required
                    >
                        {GS_CURR_ABBR.map(currency => <option>{currency}</option>)}
                    </select>
                    <div className="error">{this.state['tradeCurrency-error']}</div>
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="underlyingISIN">Underlying ISIN</label>
                    </div>
                    <select
                        name="underlyingISIN"
                        className={this.getControlClass(this.state['underlyingISIN-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                    >
                        <option>CWN5647P7682</option>
                        <option>CWN5647Q7251</option>
                    </select>
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
                    />
                    {/* <div className="error">{this.state['underlyingBloombergSecurityTicker-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="underlyingSecurityDescription">Underlying Security Description</label>
                    </div>
                    <select
                        name="underlyingSecurityDescription"
                        className={this.getControlClass(this.state['underlyingSecurityDescription-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                    >
                        <option>Dallah Health Care</option>
                        <option>Al Rajhi</option>
                    </select>
                    {/* <div className="error">{this.state['underlyingSecurityDescription-error']}</div> */}
                </div>

                <div className="form-group row">
                    <div className="col-1">
                        <label htmlFor="underlyingCountryOfIssue">Underlying Country Of Issue</label>
                    </div>
                    <select
                        name="underlyingCountryOfIssue"
                        className={this.getControlClass(this.state['underlyingCountryOfIssue-valid'], "form-control")}
                        onChange={(e) => this.handleChange(e)}
                    >
                        <option>Dallah Health Care</option>
                        <option>Al Rajhi</option>
                    </select>
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
                    >
                        {GS_CURR_ABBR.map((currency, idx) => <option key={idx}>{currency}</option>)}
                    </select>
                    {/* <div className="error">{this.state['underlyingTradeCurrency-error']}</div> */}
                </div>

                <input 
                    type="submit" 
                    value="Submit" 
                    onSubmit={e => this.handleSubmit(e)}
                    onClick={e => this.handleSubmit(e)}
                />
            </form>
        );
    }
}