import * as _ from 'lodash';

export const GS_CURR_ABBR: string[] = [
    "EEP", 
    "MDE", 
    "EPS", 
    "ENA", 
    "CNH", 
    "XAM", 
    "TOF", 
    "CHf", 
    "JOD", 
    "KES", 
    "KGS", 
    "KHR", 
    "KMF", 
    "KWd", 
    "KWD", 
    "KZT", 
    "LAK", 
    "LVL", 
    "LYD", 
    "THB", 
    "ISK", 
    "BZD", 
    "CDF", 
    "CLF", 
    "COP", 
    "CUP", 
    "CVE", 
    "CYP", 
    "DJF", 
    "DZD", 
    "EAS", 
    "EBF", 
    "SDR", 
    "BWp", 
    "GNF", 
    "GTQ", 
    "GWP", 
    "GYD", 
    "HRK", 
    "IEp", 
    "PKR", 
    "GEL", 
    "AMD", 
    "AOA", 
    "AWG", 
    "AZM", 
    "BAM", 
     "", 
     "", 
    "JER", 
    "NOR", 
    "BVI", 
    "AED", 
    "LSL", 
    "LTL", 
    "LUC", 
    "USD", 
    "GBP", 
    "DEM", 
    "CHF", 
    "DKK", 
    "FRF", 
    "ITL", 
    "VEF", 
    "PAS", 
    "PEU", 
    "PAM", 
    "PXJ", 
    "GXS", 
    "SCR", 
    "SLL", 
    "SVC", 
    "TOP", 
    "TZS", 
    "UZS", 
    "XBC", 
    "XBD", 
    "BWP", 
    "BEF", 
    "CAD", 
    "JPY", 
    "SGD", 
    "NZD", 
    "BRL", 
    "INR", 
    "BEE", 
    "BEL", 
    "BER", 
    "BEZ", 
    "BGL", 
    "BGN", 
    "BIF", 
    "BND", 
    "BOB", 
    "BRC", 
    "BSD", 
    "NIO", 
    "BEB", 
    "MGF", 
    "MLF", 
    "MNT", 
    "MRO", 
    "MTL", 
    "MUR", 
    "MVR", 
    "MYr", 
    "EDM", 
    "MZM", 
    "NAD", 
    "NGN", 
    "NPR", 
    "PAB", 
    "PYG", 
    "QAR", 
    "RUB", 
    "RUR", 
    "RWF", 
    "SAR", 
    "SDP", 
    "SGd", 
    "ZWR", 
    "SPL", 
    "NOK", 
    "SEK", 
    "MMK", 
    "XEU", 
    "XCD", 
    "ZWd", 
    "XOF", 
    "XPF", 
    "XXX", 
    "YER", 
    "CHI", 
    "YUM", 
    "YUN", 
    "MWk", 
    "ZAr", 
    "NLG", 
    "IQD", 
    "IRR", 
    "ZMK", 
    "ZWD", 
    "=DM", 
    "GUE", 
    "SZl", 
    "XAU", 
    "LUF", 
    "HUF", 
    "AUD", 
    "ZAR", 
    "CZK", 
    "TWD", 
    "XDR", 
    "MYR", 
    "BMD", 
    "VND", 
    "ALL", 
    "ANG", 
    "BTN", 
    "CRC", 
    "DOP", 
    "EEK", 
    "GIP", 
    "HNL", 
    "JMD", 
    "KPW", 
    "LRD", 
    "MAD", 
    "MOP", 
    "MWK", 
    "OMR", 
    "ROL", 
    "XPD", 
    "SHP", 
    "SIT", 
    "SKK", 
    "SOS", 
    "SRG", 
    "SYP", 
    "SZL", 
    "TJR", 
    "TMM", 
    "TND", 
    "XBB", 
    "ATS", 
    "UGX", 
    "USd", 
    "UYU", 
    "VUV", 
    "WST", 
    "XAF", 
    "LUL", 
    "XAG", 
    "ILs", 
    "LKR", 
    "PEN", 
    "BEC", 
    "ILS", 
    "KYD", 
    "AP", 
    "NA", 
    "EPR", 
    "195",
    "ADP", 
    "LBP", 
    "BBD", 
    "BDT", 
    "MDL", 
    "ESP", 
    "IEP", 
    "GHC", 
    "EUR", 
    "PTE", 
    "PHP", 
    "BHD", 
    "GRD", 
    "EDG", 
    "EEC", 
    "EES", 
    "EFM", 
    "EGP", 
    "EIP", 
    "ELF", 
    "EPE", 
    "ERN", 
    "ESA", 
    "ESB", 
    "ETB", 
    "=ES", 
    "SDD", 
    "FJD", 
    "FKP", 
    "GBp", 
    "ECS", 
    "IDR", 
    "TRL", 
    "ARS", 
    "AFN", 
    "CLP", 
    "VEB", 
    "CNY", 
    "PGK", 
    "XBA", 
    "TTD", 
    "ZMk", 
    "RSD", 
    "HTG", 
    "MXN", 
    "STD", 
    "KRW", 
    "AUd", 
    "BRI", 
    "CAd", 
    "EGD", 
    "EUr", 
    "NAd", 
    "TPE", 
    "MZN", 
    "FIM", 
    "MKD", 
    "GBL", 
    "EIL", 
    "HKD", 
    "PLN", 
    "EFR", 
    "GMD", 
    "SBD", 
    "UAH", 
    "EM", 
    "=AS", 
    "=DG", 
    "=BF", 
    "EMA", 
    "TRY", 
    "BYR", 
    "MGA", 
    "RON", 
    "AZN", 
    "=GD", 
    "ZWN", 
    "UYI", 
    "SDG", 
    "XPT", 
    "UDI", 
    "ZWL", 
    "TMT", 
    "=FR", 
    "GHS", 
    "JEP", 
    "COU", 
    "ZMW", 
    "CNT", 
    "BYN"
]

export const COUNTRIES = [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
  ]

  export const REASONS = [
    "(+) Buy Trade Cancellation not entered/approved",
    "(+) Payment Cancellation not entered/approved",
    "(+) Receipt not entered/approved",
    "(+) Redemption proceeds not entered/approved",
    "(+) Sell Trade not entered/approved",
    "(-) Buy Trade not entered/approved",
    "(-) Deposit for IPO/Placement not entered/approved",
    "(-) IEO (Institutional Entitlement Offer), payment not entered/approved",
    "(-) Payment not entered/approved",
    "(-) Pre-Funding Purchase/Payment - Holidays",
    "(-) Receipt Cancellation not entered/approved",
    "(-) Redemption Proceeds/Receipt/Income not confirmed, do not utilise",
    "(-) Sell Trade Cancellation not entered/approved",
    "(-) Sell Trade Pending Settlement, do not utilise",    
  ]

  export const NOSTRO = 
  [
    {
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.96-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.95-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.94-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "EURO3-13103.93-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.92-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "EURO3-13103.91-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "EURO3-13103.90-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.89-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "EURO3-13103.88-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.46-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "EURO3-13103.43-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.42-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "EURO3-13103.41-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "EURO3-13103.27-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.26-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "EURO3-13103.25-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "EURO3-13103.23-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.22-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "EURO3-13103.21-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "EURO3-13103.15-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.14-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "EURO3-13103.13-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "EURO3-13103.11-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.10-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "EURO3-13103.09-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "EURO3-13103.07-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.06-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "EURO3-13103.05-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "EURO3-13103.03-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "EURO3-13103.02-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "EURO3-13103.01-EUROCLEAR BANK SA/NV, BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "DB.MB-10327.25-DEUTSCHE BANK AG,MUMBAI"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "DB.MB-10327.24-DEUTSCHE BANK AG,MUMBAI"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "DB.MB-10327.48-DEUTSCHE BANK AG,MUMBAI"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "DB.MB-10327.21-DEUTSCHE BANK AG,MUMBAI"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONYM.BS-25052.64-THE BANK OF NEW YORK MELLON,BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONYM.BS-25052.63-THE BANK OF NEW YORK MELLON,BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONYM.BS-25052.62-THE BANK OF NEW YORK MELLON,BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONYM.BS-25052.61-THE BANK OF NEW YORK MELLON,BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONYM.BS-25052.60-THE BANK OF NEW YORK MELLON,BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONYM.BS-25052.59-THE BANK OF NEW YORK MELLON,BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONYM.NY-25053.22-THE BANK OF NEW YORK MELLON, NY"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONYM.NY-25053.21-THE BANK OF NEW YORK MELLON, NY"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONYM.NY-25053.20-THE BANK OF NEW YORK MELLON, NY"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BOTM.TK-37202.03-THE BANK OF TOKYO-MITSUBISHI UFJ, LTD, TOKYO"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BOTM.TK-37202.02-THE BANK OF TOKYO-MITSUBISHI UFJ, LTD, TOKYO"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BOTM.TK-37202.01-THE BANK OF TOKYO-MITSUBISHI UFJ, LTD, TOKYO"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BOE.LN-4351.21-BANK OF ENGLAND, LONDON"
    },
    {
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.BK-7131.22-CITIBANK NA, BANGKOK"
    },
    {
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.BK-7131.21-CITIBANK NA, BANGKOK"
    },
    {
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.BK-7131.20-CITIBANK NA, BANGKOK"
    },
    {
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CTLF.TP-7132.21-CITIBANK TAIWAN LIMITED, TAIPEI-FIA"
    },
    {
      "GS_CURR_ABBR": "LKR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.SG-55501.44-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "KES",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.SG-55501.46-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "LKR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.SG-55501.45-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "PKR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.SG-55501.48-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "PKR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.SG-55501.47-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.SG-55501.38-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.SG-55501.37-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCB.SG-55501.36-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCB.SG-55501.23-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.SG-55501.21-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.SG-55501.20-STANDARD CHARTERED BANK, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.JK-55504.22-STANDARD CHARTERED BANK, JAKARTA BRANCH"
    },
    {
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.JK-55504.21-STANDARD CHARTERED BANK, JAKARTA BRANCH"
    },
    {
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCB.JK-55504.20-STANDARD CHARTERED BANK, JAKARTA BRANCH"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCB.HK-55505.29-STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.HK-55505.26-STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.HK-55505.25-STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.HK-55505.22-STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.HK-55505.21-STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCB.HK-55505.20-STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.KL-55506.22-STANDARD CHARTERED BANK MALAYSIA BERHAD,KL"
    },
    {
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.KL-55506.21-STANDARD CHARTERED BANK MALAYSIA BERHAD,KL"
    },
    {
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCB.KL-55506.20-STANDARD CHARTERED BANK MALAYSIA BERHAD,KL"
    },
    {
      "GS_CURR_ABBR": "XAU",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "UBSAG.LN-61254.26-UBS AG, LONDON"
    },
    {
      "GS_CURR_ABBR": "XAU",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMC.LN-7003.73-JPMORGAN CHASE BANK, N.A. , LONDON"
    },
    {
      "GS_CURR_ABBR": "XAU",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMC.LN-7003.72-JPMORGAN CHASE BANK, N.A. , LONDON"
    },
    {
      "GS_CURR_ABBR": "XAU",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "JPMC.LN-7003.26-JPMORGAN CHASE BANK, N.A. , LONDON"
    },
    {
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.97-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.99-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.98-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "COP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.101-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "COP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.100-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.93-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.92-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.91-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.96-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.94-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.95-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.87-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.82-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.76-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.70-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.65-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "SAR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.03-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "SAR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.02-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "SAR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.01-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.06-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.05-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.04-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.90-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.89-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.88-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.86-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.85-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.84-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.83-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.81-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.80-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG-7102.79-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.78-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.77-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.75-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.74-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.73-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.72-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.71-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.69-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.68-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG-7102.67-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.66-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.64-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.63-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.62-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.61-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.60-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.59-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.58-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.57-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.56-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG-7102.55-CITIBANK NA, SINGAPORE"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.63-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.62-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.61-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.60-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.59-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.58-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.57-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.56-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.55-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.54-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.53-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.52-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.51-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.50-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.49-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.48-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.47-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.43-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.42-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.HK-7120.41-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.45-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.44-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.46-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.80-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.79-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.78-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.77-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.76-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.75-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.74-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.73-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.72-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.71-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.70-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.69-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.68-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.67-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.66-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.65-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.HK-7120.64-CITIBANK NA, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CTL.TP-7122.29-CITIBANK TAIWAN LIMITED, TAIPEI"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CTL.TP-7122.28-CITIBANK TAIWAN LIMITED, TAIPEI"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CTL.TP-7122.27-CITIBANK TAIWAN LIMITED, TAIPEI"
    },
    {
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CTL.TP-7122.22-CITIBANK TAIWAN LIMITED, TAIPEI"
    },
    {
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CTL.TP-7122.21-CITIBANK TAIWAN LIMITED, TAIPEI"
    },
    {
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CTL.TP-7122.20-CITIBANK TAIWAN LIMITED, TAIPEI"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MANUAL-88888.101-MANUAL INPUT"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MANUAL-88888.96-MANUAL INPUT"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MANUAL-88888.30-MANUAL INPUT"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MANUAL-88888.21-MANUAL INPUT"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MANUAL-88888.20-MANUAL INPUT"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CI.AL-97076.22-CITIBANK NA, AUCKLAND"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CI.AL-97076.21-CITIBANK NA, AUCKLAND"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CI.AL-97076.20-CITIBANK NA, AUCKLAND"
    },
    {
      "GS_CURR_ABBR": "RSD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.85-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.82-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.83-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.80-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.79-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.78-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.64-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.63-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.62-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.60-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.59-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.58-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.56-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.55-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.54-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.52-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.51-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.50-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.48-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.47-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.43-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.39-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.38-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.37-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.35-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.34-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.33-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.31-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.30-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.29-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.26-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.25-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCAV.LN-40366.23-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCAV.LN-40366.22-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCAV.LN-40366.21-THE NORTHERN TRUST CO (AVFC), LDN"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCBCL.SH-55515.03-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCBCL.SH-55515.02-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCBCL.SH-55515.01-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCBCL.SH-55515.06-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCBCL.SH-55515.05-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCBCL.SH-55515.04-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.MN-97269.02-STANDARD CHARTERED BANK, MANILA"
    },
    {
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.MN-97269.03-STANDARD CHARTERED BANK, MANILA"
    },
    {
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.MN-97269.04-STANDARD CHARTERED BANK, MANILA"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.MN-97269.01-STANDARD CHARTERED BANK, MANILA"
    },
    {
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCO1.LN-40370.21-THE NORTHERN TRUST CO (AVFC),LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCO1.LN-40370.20-THE NORTHERN TRUST CO (AVFC),LONDON"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.58-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.57-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.56-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.55-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.54-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.53-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.52-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.51-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.50-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.49-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.48-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.47-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.46-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.45-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.44-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.43-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.42-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.41-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.CLS-25060.40-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.39-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.38-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.37-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.36-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.35-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.34-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.33-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.32-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.31-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.30-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.29-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.28-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.CLS-25060.27-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.13-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.12-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.11-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.10-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.09-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.08-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.07-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.06-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.05-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.04-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.03-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.02-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.CLS-25060.01-BANK OF NEW YORK MELLON, NEW YORK"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "DBK.MB-10338.22-DEUTSCHE BANK AG,MUMBAI-GR"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "DBK.MB-10338.21-DEUTSCHE BANK AG,MUMBAI-GR"
    },
    {
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCTPC.BK-97376.02-STANDARD CHARTERED BANK (THAI) PUBLIC COMPANY LIMITED,BANGKOK"
    },
    {
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCTPC.BK-97376.01-STANDARD CHARTERED BANK (THAI) PUBLIC COMPANY LIMITED,BANGKOK"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "DB1.MB-10339.03-DEUTSCHE BANK AG,MUMBAI"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "DB1.MB-10339.02-DEUTSCHE BANK AG,MUMBAI"
    },
    {
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.MM-97481.22-JOINT STOCK COMPANY COMMERCIAL BANK CITIBANK,MOSCOW"
    },
    {
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.MM-97481.21-JOINT STOCK COMPANY COMMERCIAL BANK CITIBANK,MOSCOW"
    },
    {
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.MM-97481.20-JOINT STOCK COMPANY COMMERCIAL BANK CITIBANK,MOSCOW"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB-SH-88893.22-PSEUDO-STAND CHART BK,SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB-SH-88893.21-PSEUDO-STAND CHART BK,SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCB-SH-88893.20-PSEUDO-STAND CHART BK,SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "JPMCC.LN-7008.08-JPMORGAN CHASE BANK, LONDON"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMCC.LN-7008.07-JPMORGAN CHASE BANK, LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMCC.LN-7008.06-JPMORGAN CHASE BANK, LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMCC.LN-7008.04-JPMORGAN CHASE BANK, LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "JPMCC.LN-7008.05-JPMORGAN CHASE BANK, LONDON"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMCC.LN-7008.03-JPMORGAN CHASE BANK, LONDON"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "JPMCC.LN-7008.02-JPMORGAN CHASE BANK, LONDON"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMCC.LN-7008.01-JPMORGAN CHASE BANK, LONDON"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MS-PB.LN-37419.09-MORGAN STANLEY + CO. INTERNATIONAL "
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MS-PB.LN-37419.08-MORGAN STANLEY + CO. INTERNATIONAL "
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MS-PB.LN-37419.07-MORGAN STANLEY + CO. INTERNATIONAL "
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MS-PB.LN-37419.06-MORGAN STANLEY + CO. INTERNATIONAL "
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MS-PB.LN-37419.05-MORGAN STANLEY + CO. INTERNATIONAL "
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MS-PB.LN-37419.04-MORGAN STANLEY + CO. INTERNATIONAL "
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MS-PB.LN-37419.03-MORGAN STANLEY + CO. INTERNATIONAL "
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MS-PB.LN-37419.02-MORGAN STANLEY + CO. INTERNATIONAL "
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "MS-PB.LN-37419.01-MORGAN STANLEY + CO. INTERNATIONAL "
    },
    {
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BDC.SA-92791.02-BANCO DE CHILE, SANTIAGO"
    },
    {
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BDC.SA-92791.06-BANCO DE CHILE, SANTIAGO"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BDC.SA-92791.05-BANCO DE CHILE, SANTIAGO"
    },
    {
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BDC.SA-92791.04-BANCO DE CHILE, SANTIAGO"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BDC.SA-92791.03-BANCO DE CHILE, SANTIAGO"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BDC.SA-92791.01-BANCO DE CHILE, SANTIAGO"
    },
    {
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.61-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.60-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.59-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.62-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "RON",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.57-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.56-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.55-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.51-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.54-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.53-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.49-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.52-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.50-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.43-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.46-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.45-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.44-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.40-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.39-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.48-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.47-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.38-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.37-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.36-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.35-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.34-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.33-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.32-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.31-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.30-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.29-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.28-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.27-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.26-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.25-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.24-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.23-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.22-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.21-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.20-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "JPMFI.LN-7009.19-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.18-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.17-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.16-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.15-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.14-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.13-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.12-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.11-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.10-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.09-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.08-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.07-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.06-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.05-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.04-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.03-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.02-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "JPMFI.LN-7009.01-JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.30-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "RON",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.29-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.28-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.26-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.27-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.25-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.22-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.21-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.24-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.23-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.20-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.19-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.18-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.17-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.16-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.15-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.14-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.13-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.12-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.11-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.10-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.09-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.08-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.07-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.06-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.05-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.04-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.03-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.02-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYFI.BS-25062.01-THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGV.CG-93265.20-NORTHERN TRUST COMPANY (CHICAGO) GAMVEST"
    },
    {
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCBK.SO-14701.06-STANDARD CHARTERED BANK KOREA LIMITED,SEOUL"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCBK.SO-14701.05-STANDARD CHARTERED BANK KOREA LIMITED,SEOUL"
    },
    {
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCBK.SO-14701.04-STANDARD CHARTERED BANK KOREA LIMITED,SEOUL"
    },
    {
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCBK.SO-14701.03-STANDARD CHARTERED BANK KOREA LIMITED,SEOUL"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCBK.SO-14701.02-STANDARD CHARTERED BANK KOREA LIMITED,SEOUL"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCBK.SO-14701.01-STANDARD CHARTERED BANK KOREA LIMITED,SEOUL"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SSB.TO-55562.12-STATE STREET BANK N TRUST CO, TOR"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SSB.TO-55562.11-STATE STREET BANK N TRUST CO, TOR"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SSB.TO-55562.10-STATE STREET BANK N TRUST CO, TOR"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SSB.TO-55562.08-STATE STREET BANK N TRUST CO, TOR"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SSB.TO-55562.07-STATE STREET BANK N TRUST CO, TOR"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SSB.TO-55562.09-STATE STREET BANK N TRUST CO, TOR"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "DBEQ.FF-10341.03-DEUTSCHE BANK AG, FRANKFURT"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "DBEQ.FF-10341.02-DEUTSCHE BANK AG, FRANKFURT"
    },
    {
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG1-7144.22-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG1-7144.21-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "COP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG1-7144.18-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "COP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG1-7144.16-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG1-7144.15-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG1-7144.14-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "VND",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG1-7144.03-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "VND",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG1-7144.02-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG1-7144.13-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG1-7144.12-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG1-7144.11-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CITI.SG1-7144.10-CITIBANK NA,SINGAPORE(EQ)"
    },
    {
      "GS_CURR_ABBR": "EGP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "THSBC.HK-22028.15-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "QAR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "THSBC.HK-22028.14-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "QAR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "THSBC.HK-22028.13-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "EGP",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "THSBC.HK-22028.16-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "THSBC.HK-22028.12-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "THSBC.HK-22028.11-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "THSBC.HK-22028.10-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "KWD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "THSBC.HK-22028.09-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "THSBC.HK-22028.06-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "THSBC.HK-22028.07-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "AED",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "THSBC.HK-22028.05-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "AED",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "THSBC.HK-22028.04-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "KWD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "THSBC.HK-22028.02-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "THSBC.HK-22028.01-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTC8.CG-40374.07-NTC (CHG) INTERNAL ASSETS"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTC8.CG-40374.08-NTC (CHG) INTERNAL ASSETS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTC8.CG-40374.06-NTC (CHG) INTERNAL ASSETS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTC8.CG-40374.05-NTC (CHG) INTERNAL ASSETS"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTC8.CG-40374.04-NTC (CHG) INTERNAL ASSETS"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CGAPL.ME-55068.22-CITIGROUP PTY LIMITED, MELBOURNE"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CGAPL.ME-55068.21-CITIGROUP PTY LIMITED, MELBOURNE"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "CGAPL.ME-55068.20-CITIGROUP PTY LIMITED, MELBOURNE"
    },
    {
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.29-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.28-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.27-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.26-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.25-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.24-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.23-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.22-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.21-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.20-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.19-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.18-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.17-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.16-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.15-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.14-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.13-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.12-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.11-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.10-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.09-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.08-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.07-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.06-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.05-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.04-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.03-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.02-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCTA.LN-40386.01-NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BONY.IMS-25059.07-THE BANK OF NEW YORK MELLON , NY"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BONY.IMS-25059.06-THE BANK OF NEW YORK MELLON , NY"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BONY.IMS-25059.05-THE BANK OF NEW YORK MELLON , NY"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BDF.PA-4701.25-BANQUE DE FRANCE, PARIS"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BDF.PA-4701.24-BANQUE DE FRANCE, PARIS"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BDF.PA-4701.23-BANQUE DE FRANCE, PARIS"
    },
    {
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCOS.LN-40368.30-THE NORTHERN TRUST CO (AVFC),LONDON"
    },
    {
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCOS.LN-40368.28-THE NORTHERN TRUST CO (AVFC),LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCOS.LN-40368.26-THE NORTHERN TRUST CO (AVFC),LONDON"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCOS.LN-40368.24-THE NORTHERN TRUST CO (AVFC),LONDON"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCOS.LN-40368.22-THE NORTHERN TRUST CO (AVFC),LONDON"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCOS.LN-40368.21-THE NORTHERN TRUST CO (AVFC),LONDON"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "NTCOS.LN-40368.20-THE NORTHERN TRUST CO (AVFC),LONDON"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "DBFDI.MB-10342.03-DEUTSCHE BANK AG,MUMBAI (FDI)"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "DBFDI.MB-10342.02-DEUTSCHE BANK AG,MUMBAI (FDI)"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BNYIL.BS-25064.01-BANK OF NEW YORK MELLON (ENHANCED INFLATION LINKED BONDS), BRUSSELS"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG3-7096.05-CITIBANK NA, SINGAPORE (VNEQ)"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG3-7096.03-CITIBANK NA, SINGAPORE (VNEQ)"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CITI.SG3-7096.02-CITIBANK NA, SINGAPORE (VNEQ)"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CITI.SG3-7096.06-CITIBANK NA, SINGAPORE (VNEQ)"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGA.LN-40390.02-NORTHERN TRUST COMPANY (LONDON), GAMSTAR (US) PTE LTD"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGA.LN-40390.01-NORTHERN TRUST COMPANY (LONDON), GAMSTAR (US) PTE LTD"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGP.CG-40391.01-NORTHERN TRUST COMPANY (CHICAGO), GAMSTAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCCGPL-40388.01-NORTHERN TRUST COMPANY,CHICAGO - GAMNAT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "DBB1.FF-29051.02-DEUTSCHE BUNDESBANK, FRANKFURT (FIXED DEPOSITS)"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "DBB1.FF-29051.03-DEUTSCHE BUNDESBANK, FRANKFURT (FIXED DEPOSITS)"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "DBB1.FF-29051.01-DEUTSCHE BUNDESBANK, FRANKFURT (FIXED DEPOSITS)"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGP.LN-40392.01-NORTHERN TRUST COMPANY (LONDON), GAMSTAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGP.LN-40392.02-NORTHERN TRUST COMPANY (LONDON), GAMSTAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGA.CG-40387.01-NORTHERN TRUST COMPANY (CHICAGO) GAMSTAR (US) PTE LTD"
    },
    {
      "GS_CURR_ABBR": "QAR",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "SCB.DO-97629.01-STANDARD CHARTERED BANK , DOHA"
    },
    {
      "GS_CURR_ABBR": "QAR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCB.DO-97629.03-STANDARD CHARTERED BANK , DOHA"
    },
    {
      "GS_CURR_ABBR": "QAR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCB.DO-97629.02-STANDARD CHARTERED BANK , DOHA"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "PBC.SH-93861.03-THE PEOPLES BANK OF CHINA, SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "PBC.SH-93861.02-THE PEOPLES BANK OF CHINA, SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "PBC.SH-93861.01-THE PEOPLES BANK OF CHINA, SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "VND",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTGPL.LN-93762.02-NORTHERN TRUST COMPANY (LONDON), GAMVEST PTE LTD"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTGPL.LN-93762.01-NORTHERN TRUST COMPANY (LONDON), GAMVEST PTE LTD"
    },
    {
      "GS_CURR_ABBR": "KWD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "THSBCFX-22031.03-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG (FX)"
    },
    {
      "GS_CURR_ABBR": "KWD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "THSBCFX-22031.02-THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG (FX)"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCOP.CG-40334.01-THE NORTHERN TRUST COMPANY, CHICAGO - OPPSTAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCBRC.SH-55522.01-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFIICIBM"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCBRC.SH-55522.02-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFIICIBM"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCCGBP-95611.01-NTC (CG)-BRIGHTLIGHT PSL 2016-1 LTD"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCDU.CG-40348.01-NORTHERN TRUST COMPANY (CHICAGO), DELTASTAR (US) INVESTMENTS PTE LTD"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCBQC.SH-55521.02-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - QFIICIBM"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCBQC.SH-55521.01-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - QFIICIBM"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCDI.LN-40344.05-NORTHERN TRUST COMPANY (LONDON), DELTASTAR INVESTMENTS PTE LTD"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCDI.LN-40344.04-NORTHERN TRUST COMPANY (LONDON), DELTASTAR INVESTMENTS PTE LTD"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCDI.LN-40344.03-NORTHERN TRUST COMPANY (LONDON), DELTASTAR INVESTMENTS PTE LTD"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCDI.LN-40344.01-NORTHERN TRUST COMPANY (LONDON), DELTASTAR INVESTMENTS PTE LTD"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCDI.LN-40344.02-NORTHERN TRUST COMPANY (LONDON), DELTASTAR INVESTMENTS PTE LTD"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCEI.CG-40325.01-NORTHERN TRUST COMPANY (CHICAGO)-EIDOLON INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGI.CG-40324.01-NORTHERN TRUST COMPANY (CHICAGO)-GLOIRE INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCDU.LN-40347.01-NORTHERN TRUST COMPANY (LONDON), DELTASTAR (US) INVESTMENTS PTE LTD"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCDU.LN-40347.02-NORTHERN TRUST COMPANY (LONDON), DELTASTAR (US) INVESTMENTS PTE LTD"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCBRQ-SH-55520.03-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFII"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCBRQ.SH-55520.02-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFII"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "SCBRQ-SH-55520.04-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFII"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "SCBRQ.SH-55520.01-STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFII"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCEI.SG-40321.03-NORTHERN TRUST COMPANY (SINGAPORE)-EIDOLON INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCEI.SG-40321.02-NORTHERN TRUST COMPANY (SINGAPORE)-EIDOLON INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCEI.SG-40321.01-NORTHERN TRUST COMPANY (SINGAPORE)-EIDOLON INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGI.SG-40320.04-NORTHERN TRUST COMPANY (SINGAPORE)-GLOIRE INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGI.SG-40320.01-NORTHERN TRUST COMPANY (SINGAPORE)-GLOIRE INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGI.SG-40320.03-NORTHERN TRUST COMPANY (SINGAPORE)-GLOIRE INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCBRLLN-40340.02-THE NORTHERN TRUST CO (AVFC) , LONDON"
    },
    {
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "NTCBRLLN-40340.01-THE NORTHERN TRUST CO (AVFC) , LONDON"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCOP.LN-40335.06-NORTHERN TRUST COMPANY, (LONDON) OPPSTAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCOP.LN-40335.05-NORTHERN TRUST COMPANY, (LONDON) OPPSTAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCOP.LN-40335.04-NORTHERN TRUST COMPANY, (LONDON) OPPSTAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCOP.LN-40335.03-NORTHERN TRUST COMPANY, (LONDON) OPPSTAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCOP.LN-40335.02-NORTHERN TRUST COMPANY, (LONDON) OPPSTAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BOCL.SH-19902.02-BANK OF CHINA LIMITED, SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "B",
      "GS_CPARTY_DES": "BOCL.SH-19902.01-BANK OF CHINA LIMITED, SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BOCL.SH-19902.03-BANK OF CHINA LIMITED, SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "DBAG.MB-10343.02-DEUTSCHE BANK AG, MUMBAI (FCCB)"
    },
    {
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "DBAG.MB-10343.01-DEUTSCHE BANK AG, MUMBAI (FCCB)"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "CICCL.SH-19704.02-CHINA INTERNATIONAL CAPITAL CORPORATION LIMITED, SHAHGHAI"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "CICCL.SH-19704.01-CHINA INTERNATIONAL CAPITAL CORPORATION LIMITED, SHAHGHAI"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCSS.CG-40332.01-NORTHERN TRUST COMPANY (CHICAGO) - SPARKLE STAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCSS.LN-40331.02-NORTHERN TRUST COMPANY (LONDON) - SPARKLE STAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCSS.LN-40331.05-NORTHERN TRUST COMPANY (LONDON) - SPARKLE STAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCSS.LN-40331.04-NORTHERN TRUST COMPANY (LONDON) - SPARKLE STAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCSS.LN-40331.03-NORTHERN TRUST COMPANY (LONDON) - SPARKLE STAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCSS.LN-40331.01-NORTHERN TRUST COMPANY (LONDON) - SPARKLE STAR PTE LTD"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H",
      "GS_CPARTY_DES": "BOCOM.SH-14952.03-BANK OF COMMUNICATIONS CO. LTD, SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "BOCOM.SH-14952.02-BANK OF COMMUNICATIONS CO. LTD, SHANGHAI"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCEI.LN-40323.02-NORTHERN TRUST COMPANY (LONDON)-EIDOLON INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCEI.LN-40323.01-NORTHERN TRUST COMPANY (LONDON)-EIDOLON INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGI.LN-40322.02-NORTHERN TRUST COMPANY (LONDON)-GLOIRE INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCGI.LN-40322.01-NORTHERN TRUST COMPANY (LONDON)-GLOIRE INVESTMENT PTE LTD"
    },
    {
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C",
      "GS_CPARTY_DES": "NTCDI.CG-40345.01-NORTHERN TRUST COMPANY (CHICAGO), DELTASTAR INVESTMENTS PTE LTD"
    }
   ]

   export const CURRENCIES = _.uniq(NOSTRO.map(nostroObj => nostroObj.GS_CURR_ABBR))