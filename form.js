(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BotChat"] = factory();
	else
		root["BotChat"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 484);
/******/ })
/************************************************************************/
/******/ ({

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

var API_URL =
   true ? 'https://kc-emea-staging.azurewebsites.net' : '';
var COUNTRIES = [
  'United Kingdom',
  'Austria',
  'Bahrain',
  'Belgium',
  'Bulgaria',
  'Croatia',
  'Czech Republic',
  'Denmark',
  'Egypt',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Iceland',
  'Ireland',
  'Israel',
  'Italy',
  'Jordan',
  'Kuwait',
  'Lebanon',
  'Netherlands',
  'Norway',
  'Oman',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Saudi Arabia',
  'Serbia',
  'Slovenia',
  'South Africa',
  'Spain',
  'Sweden',
  'Switzerland',
  'Turkey',
  'United Arab Emirates'
];

function qs(str) {
  var search = str;
  search = search.replace(/^\?/, '');

  var arr = search.split('&');
  var result = {};
  arr.forEach(function(a) {
    var items = a.split('=');

    result[items[0]] = items[1];
  });

  return result;
}

var app = new Vue({
  el: '#app',
  template: '#form',
  data: {
    labels: {
      comments: 'Comment',
      disclaimer:
        'I agree to my personal data being processed in accordance with the {{Privacy Policy}} and agree to the {{Terms of Use}}',
      email: 'Email',
      file_Upload: 'File Upload',
      name: 'Name',
      requiredMessage: 'should not be empty',
      placeholder:
        'Leave your comment here. In order to resolve your query quickly, please provide as much detail as possible.',
      submissionConsentMessage: 'Please accept the consent condition.',
      typeMismatchMessage: 'is not in the correct format.',
      submit: 'Submit',
      policyLink: 'https://www.kcprofessional.co.uk/privacy-policy',
      termLink: 'https://www.kcprofessional.co.uk/terms-of-use',
      country: 'Country',
      productCode: 'Product Code(s)',
      agreementMessage: 'I accept - Mandatory Field'
    },
    errorMessage: '',
    returnUrl: window.location.origin + '/success.html',
    submitting: false,
    countries: COUNTRIES
  },
  computed: {
    disclaimer: function() {
      var str = this.labels.disclaimer;
      var reg = /\{\{((\w+\s?)*)\}\}/;
      str = str.replace(reg, '<a href="' + this.labels.policyLink + '" target="_blank">$1</a>');
      str = str.replace(reg, '<a href="' + this.labels.termLink + '" target="_blank">$1</a>');

      return str;
    }
  },
  methods: {
    handleInvalid: function(e) {
      var el = e.target;
      var value = e.target.value;
      if (el.validity.valueMissing && this.labels.requiredMessage) {
        if (el.dataset.label === 'agreement') {
          el.setCustomValidity(this.labels.agreementMessage);
        } else {
          el.setCustomValidity((el.dataset.label || el.name) + ' ' + this.labels.requiredMessage);
        }
      } else if (el.validity.typeMismatch && this.labels.typeMismatchMessage) {
        el.setCustomValidity((el.dataset.label || el.name) + ' ' + this.labels.typeMismatchMessage);
      } else {
        el.setCustomValidity('');
      }
    },
    handleSubmit: function(e) {
      var formEl = e.currentTarget;
      var formData = new FormData(formEl);
      var params = qs(window.location.search);
      this.submitting = true;

      axios
        .post(params.action, formData)
        .then(
          function(resp) {
            formEl.submit();
          }.bind(this)
        )
        .catch(
          function(error) {
            this.errorMessage = error.response.data.message;
          }.bind(this)
        )
        .then(function() {
          this.submitting = false;
        });
    }
  }
});

axios.get(API_URL + '/api/setting/languageSetting').then(function(resp) {
  var params = qs(window.location.search);
  var lang = params.lang;

  var currentLanguageData = resp.data.find(function(d) {
    return d.languageCode === lang;
  });

  if (currentLanguageData) {
    var keys = Object.keys(currentLanguageData.formLabels);
    keys.forEach(function(k) {
      app.labels[k] = currentLanguageData.formLabels[k];
    });
  }
});


/***/ })

/******/ });
});
//# sourceMappingURL=form.js.map