import _uniq from 'lodash/uniq';

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

  export const NOSTRO = [
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "EUROCLEAR BANK SA/NV, BRUSSELS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG,MUMBAI",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG,MUMBAI",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG,MUMBAI",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG,MUMBAI",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON,BRUSSELS",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON,BRUSSELS",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON,BRUSSELS",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON,BRUSSELS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON,BRUSSELS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON,BRUSSELS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON, NY",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON, NY",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON, NY",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF TOKYO-MITSUBISHI UFJ, LTD, TOKYO",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF TOKYO-MITSUBISHI UFJ, LTD, TOKYO",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF TOKYO-MITSUBISHI UFJ, LTD, TOKYO",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF ENGLAND, LONDON",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, BANGKOK",
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, BANGKOK",
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, BANGKOK",
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK TAIWAN LIMITED, TAIPEI-FIA",
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "LKR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "KES",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "LKR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "PKR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "PKR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, SINGAPORE",
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, JAKARTA BRANCH",
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, JAKARTA BRANCH",
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, JAKARTA BRANCH",
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (HONG KONG) LIMITED, HONG KONG",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK MALAYSIA BERHAD,KL",
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK MALAYSIA BERHAD,KL",
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK MALAYSIA BERHAD,KL",
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "UBS AG, LONDON",
      "GS_CURR_ABBR": "XAU",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, N.A. , LONDON",
      "GS_CURR_ABBR": "XAU",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, N.A. , LONDON",
      "GS_CURR_ABBR": "XAU",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, N.A. , LONDON",
      "GS_CURR_ABBR": "XAU",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "COP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "COP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "SAR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "SAR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "SAR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, HONG KONG",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK TAIWAN LIMITED, TAIPEI",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK TAIWAN LIMITED, TAIPEI",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK TAIWAN LIMITED, TAIPEI",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK TAIWAN LIMITED, TAIPEI",
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK TAIWAN LIMITED, TAIPEI",
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK TAIWAN LIMITED, TAIPEI",
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "MANUAL INPUT",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MANUAL INPUT",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MANUAL INPUT",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MANUAL INPUT",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MANUAL INPUT",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, AUCKLAND",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, AUCKLAND",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, AUCKLAND",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "RSD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC), LDN",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, MANILA",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, MANILA",
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, MANILA",
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK, MANILA",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC),LONDON",
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC),LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "SGD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON, NEW YORK",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG,MUMBAI-GR",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG,MUMBAI-GR",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (THAI) PUBLIC COMPANY LIMITED,BANGKOK",
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (THAI) PUBLIC COMPANY LIMITED,BANGKOK",
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG,MUMBAI",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG,MUMBAI",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "JOINT STOCK COMPANY COMMERCIAL BANK CITIBANK,MOSCOW",
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JOINT STOCK COMPANY COMMERCIAL BANK CITIBANK,MOSCOW",
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "JOINT STOCK COMPANY COMMERCIAL BANK CITIBANK,MOSCOW",
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "PSEUDO-STAND CHART BK,SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "PSEUDO-STAND CHART BK,SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "PSEUDO-STAND CHART BK,SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, LONDON",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, LONDON",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, LONDON",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, LONDON",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "JPMORGAN CHASE BANK, LONDON",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "MORGAN STANLEY + CO. INTERNATIONAL ",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MORGAN STANLEY + CO. INTERNATIONAL ",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MORGAN STANLEY + CO. INTERNATIONAL ",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MORGAN STANLEY + CO. INTERNATIONAL ",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MORGAN STANLEY + CO. INTERNATIONAL ",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MORGAN STANLEY + CO. INTERNATIONAL ",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MORGAN STANLEY + CO. INTERNATIONAL ",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MORGAN STANLEY + CO. INTERNATIONAL ",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "MORGAN STANLEY + CO. INTERNATIONAL ",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANCO DE CHILE, SANTIAGO",
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANCO DE CHILE, SANTIAGO",
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANCO DE CHILE, SANTIAGO",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANCO DE CHILE, SANTIAGO",
      "GS_CURR_ABBR": "CLP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANCO DE CHILE, SANTIAGO",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANCO DE CHILE, SANTIAGO",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "RON",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "JP MORGAN CHASE BANK N.A. (GLOBAL FI CUSTODIAN), LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "RON",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "RUB",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON(GLOBAL FI CUSTODIAN), BRUSSELS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (CHICAGO) GAMVEST",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK KOREA LIMITED,SEOUL",
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK KOREA LIMITED,SEOUL",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK KOREA LIMITED,SEOUL",
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK KOREA LIMITED,SEOUL",
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK KOREA LIMITED,SEOUL",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK KOREA LIMITED,SEOUL",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STATE STREET BANK N TRUST CO, TOR",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STATE STREET BANK N TRUST CO, TOR",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STATE STREET BANK N TRUST CO, TOR",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STATE STREET BANK N TRUST CO, TOR",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STATE STREET BANK N TRUST CO, TOR",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STATE STREET BANK N TRUST CO, TOR",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG, FRANKFURT",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG, FRANKFURT",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "COP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "COP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "VND",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "VND",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "PEN",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA,SINGAPORE(EQ)",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "EGP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "QAR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "QAR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "EGP",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "KWD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "AED",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "AED",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "KWD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NTC (CHG) INTERNAL ASSETS",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NTC (CHG) INTERNAL ASSETS",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "NTC (CHG) INTERNAL ASSETS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "NTC (CHG) INTERNAL ASSETS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NTC (CHG) INTERNAL ASSETS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "CITIGROUP PTY LIMITED, MELBOURNE",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIGROUP PTY LIMITED, MELBOURNE",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIGROUP PTY LIMITED, MELBOURNE",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "ARS",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "CNH",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "TRY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "ILS",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "MYR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "IDR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "TWD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "PHP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "CZK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "PLN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "THB",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "MXN",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "NZD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "ZAR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "CAD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "HUF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "SEK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "NOK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "DKK",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "CHF",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY TRANSITION ACCOUNT,LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON , NY",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON , NY",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE BANK OF NEW YORK MELLON , NY",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANQUE DE FRANCE, PARIS",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANQUE DE FRANCE, PARIS",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANQUE DE FRANCE, PARIS",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC),LONDON",
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC),LONDON",
      "GS_CURR_ABBR": "KRW",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC),LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC),LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC),LONDON",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC),LONDON",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC),LONDON",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG,MUMBAI (FDI)",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG,MUMBAI (FDI)",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF NEW YORK MELLON (ENHANCED INFLATION LINKED BONDS), BRUSSELS",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE (VNEQ)",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE (VNEQ)",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE (VNEQ)",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CITIBANK NA, SINGAPORE (VNEQ)",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), GAMSTAR (US) PTE LTD",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), GAMSTAR (US) PTE LTD",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (CHICAGO), GAMSTAR PTE LTD",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY,CHICAGO - GAMNAT PTE LTD",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BUNDESBANK, FRANKFURT (FIXED DEPOSITS)",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BUNDESBANK, FRANKFURT (FIXED DEPOSITS)",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BUNDESBANK, FRANKFURT (FIXED DEPOSITS)",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), GAMSTAR PTE LTD",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), GAMSTAR PTE LTD",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (CHICAGO) GAMSTAR (US) PTE LTD",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK , DOHA",
      "GS_CURR_ABBR": "QAR",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK , DOHA",
      "GS_CURR_ABBR": "QAR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK , DOHA",
      "GS_CURR_ABBR": "QAR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE PEOPLES BANK OF CHINA, SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE PEOPLES BANK OF CHINA, SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "THE PEOPLES BANK OF CHINA, SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), GAMVEST PTE LTD",
      "GS_CURR_ABBR": "VND",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), GAMVEST PTE LTD",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG (FX)",
      "GS_CURR_ABBR": "KWD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED, HONG KONG (FX)",
      "GS_CURR_ABBR": "KWD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST COMPANY, CHICAGO - OPPSTAR PTE LTD",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFIICIBM",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFIICIBM",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "NTC (CG)-BRIGHTLIGHT PSL 2016-1 LTD",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (CHICAGO), DELTASTAR (US) INVESTMENTS PTE LTD",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - QFIICIBM",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - QFIICIBM",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), DELTASTAR INVESTMENTS PTE LTD",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), DELTASTAR INVESTMENTS PTE LTD",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), DELTASTAR INVESTMENTS PTE LTD",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), DELTASTAR INVESTMENTS PTE LTD",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), DELTASTAR INVESTMENTS PTE LTD",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (CHICAGO)-EIDOLON INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (CHICAGO)-GLOIRE INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), DELTASTAR (US) INVESTMENTS PTE LTD",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON), DELTASTAR (US) INVESTMENTS PTE LTD",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFII",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFII",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFII",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "STANDARD CHARTERED BANK (CHINA) LIMITED, SHANGHAI BRANCH - RQFII",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (SINGAPORE)-EIDOLON INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (SINGAPORE)-EIDOLON INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (SINGAPORE)-EIDOLON INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (SINGAPORE)-GLOIRE INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (SINGAPORE)-GLOIRE INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (SINGAPORE)-GLOIRE INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC) , LONDON",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "THE NORTHERN TRUST CO (AVFC) , LONDON",
      "GS_CURR_ABBR": "BRL",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY, (LONDON) OPPSTAR PTE LTD",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY, (LONDON) OPPSTAR PTE LTD",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY, (LONDON) OPPSTAR PTE LTD",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY, (LONDON) OPPSTAR PTE LTD",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY, (LONDON) OPPSTAR PTE LTD",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF CHINA LIMITED, SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF CHINA LIMITED, SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "B"
    },
    {
      "GS_CPARTY_DES": "BANK OF CHINA LIMITED, SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG, MUMBAI (FCCB)",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "DEUTSCHE BANK AG, MUMBAI (FCCB)",
      "GS_CURR_ABBR": "INR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "CHINA INTERNATIONAL CAPITAL CORPORATION LIMITED, SHAHGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "CHINA INTERNATIONAL CAPITAL CORPORATION LIMITED, SHAHGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (CHICAGO) - SPARKLE STAR PTE LTD",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON) - SPARKLE STAR PTE LTD",
      "GS_CURR_ABBR": "AUD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON) - SPARKLE STAR PTE LTD",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON) - SPARKLE STAR PTE LTD",
      "GS_CURR_ABBR": "JPY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON) - SPARKLE STAR PTE LTD",
      "GS_CURR_ABBR": "HKD",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON) - SPARKLE STAR PTE LTD",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "BANK OF COMMUNICATIONS CO. LTD, SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "H"
    },
    {
      "GS_CPARTY_DES": "BANK OF COMMUNICATIONS CO. LTD, SHANGHAI",
      "GS_CURR_ABBR": "CNY",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON)-EIDOLON INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON)-EIDOLON INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON)-GLOIRE INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "GBP",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (LONDON)-GLOIRE INVESTMENT PTE LTD",
      "GS_CURR_ABBR": "EUR",
      "GS_ACCNT_GROUP": "C"
    },
    {
      "GS_CPARTY_DES": "NORTHERN TRUST COMPANY (CHICAGO), DELTASTAR INVESTMENTS PTE LTD",
      "GS_CURR_ABBR": "USD",
      "GS_ACCNT_GROUP": "C"
    }
   ]

   export const CURRENCIES = _uniq(NOSTRO.map(nostroObj => nostroObj.GS_CURR_ABBR))