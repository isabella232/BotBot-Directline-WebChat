// import axios from 'axios';

var API_URL = NODE_ENV === 'development' ? 'https://kc-emea-staging.azurewebsites.net' : '';

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
	data: {
		labels: {
			comments: 'Comment',
			disclaimer: 'I hereby consent to the collection and use of my personal data above',
			email: 'Email',
			file_Upload: 'File Upload',
			name: 'Name',
			requiredMessage: 'should not be empty',
			submissionConsentMessage: 'Please accept the consent condition.',
			typeMismatchMessage: 'is not in the correct format.',
			submit: 'Submit'
		},
		errorMessage: '',
		returnUrl: window.location.origin + '/success.html'
	},
	methods: {
		handleInvalid: function(e) {
			var el = e.target;
			var value = e.target.value;
			if (el.validity.valueMissing && this.labels.requiredMessage) {
				el.setCustomValidity(el.dataset.label || el.name + ' ' + this.labels.requiredMessage);
			} else if (el.validity.typeMismatch && this.labels.typeMismatchMessage) {
				el.setCustomValidity(el.dataset.label || el.name + ' ' + this.labels.typeMismatchMessage);
			} else {
				el.setCustomValidity('');
			}
		},
		handleSubmit: function() {
			var formData = new FormData(this.$el);
			var params = qs(window.location.search);

			axios
				.post(params.action, formData)
				.then(function(resp) {
					this.$el.submit();
				})
				.catch(function(error) {
					this.errorMessage = error.response.data.message;
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
		app.labels = currentLanguageData.formLabels;
	}
});
