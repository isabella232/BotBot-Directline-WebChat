(function(window) {
  'use strict';
  var USER_TYPES = {
    AVIVATION: 'STLogsAviation',
    DEFENCE: 'DEFENCE',
    HEALTHCARE: 'HEALTHCARE',
    PSS: 'PSS'
  };

  function closest(el, className) {
    if (el.classList.contains(className)) {
      return el;
    }

    return closest(el.parentNode, className);
  }

  /**
   * Init tab component
   */
  (function initTabs() {
    var tabButtons = document.querySelectorAll('[data-toggle="tab"]');
    var tabButtonHandler = function(event) {
      var el = event.currentTarget;
      var idSelector;
      if (el.tagName === 'BUTTON') {
        idSelector = el.getAttribute('data-target');
      } else if (el.tagName === 'A') {
        idSelector = el.getAttribute('href');
      }

      // Clear all tab-content
      var parentEl = closest(el, 'js-tabs');
      var tabContents = parentEl.querySelectorAll('.js-tab-content.active');
      Array.prototype.forEach.call(tabContents, function(tabEl) {
        tabEl.classList.remove('active');
      });

      // clear all active button
      var buttons = parentEl.querySelectorAll('[data-toggle="tab"].active');
      Array.prototype.forEach.call(buttons, function(tabEl) {
        tabEl.classList.remove('active');
      });

      el.classList.add('active');

      var tabContent = parentEl.querySelector(idSelector);
      if (tabContent) {
        tabContent.classList.add('active');
      }
    };

    Array.prototype.forEach.call(tabButtons, function(button) {
      button.addEventListener('click', tabButtonHandler);
    });
  })();

  /**
   * serialize form data
   * @param {HTMLElement} form
   */
  var serializeForm = function serializeForm(form) {
    if (!form || form.tagName !== 'FORM') {
      return null;
    }

    var inputs = form.querySelectorAll('input[name],select[name],textarea[name]');
    var data = {};
    Array.prototype.forEach.call(inputs, function(input) {
      data[input.name] = input.value;
    });

    return data;
  };

  /**
   * Handle form submit action
   */
  var forms = document.querySelectorAll('.js-forms form');
  Array.prototype.forEach.call(forms, function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var url = form.getAttribute('action');
      var method = form.getAttribute('method');

      var data = serializeForm(form);

      console.log('form', data);
      axios
        .post(url, data)
        .then(function(resp) {
          console.log('success', resp);
        })
        .catch(function(error) {
          console.log('error', error);
        });
    });
  });

  /**
   * handle login
   */
  (function() {
    var loginformWrapper = document.querySelector('.js-login-form-wrapper');
    var postLogin = document.querySelector('.js-post-login');

    var loginform = document.querySelector('.js-login-form');
    var submitButton = loginform.querySelector('[type="submit"]');
    loginform.addEventListener('submit', function(e) {
      e.preventDefault();
      var url = loginform.getAttribute('action');
      var data = serializeForm(loginform);

      submitButton.setAttribute('disabled', 'disabled');
      submitButton.innerText = 'Logining...';

      axios({
        url: url,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data: Qs.stringify(data)
      })
        .then(function(resp) {
          submitButton.removeAttribute('disabled');
          submitButton.innerText = 'Login';

          var roles = resp.data.roles;
          var userType = roles && roles[0];
          console.log('success', resp);

          // switch forms
          var type = USER_TYPES.AVIVATION;
          switch (userType) {
            case USER_TYPES.AVIVATION:
              // show AVIVATION FORMS
              document.querySelector('.js-operation-avivation').classList.remove('hidden');
              document.querySelector('.js-manpower-avivation').classList.remove('hidden');

              break;
            case USER_TYPES.DEFENCE:
              document.querySelector('.js-operation-defence').classList.remove('hidden');
              document.querySelector('.js-manpower-defence').classList.remove('hidden');

              break;
            case USER_TYPES.HEALTHCARE:
              document.querySelector('.js-operation-healthcare').classList.remove('hidden');
              document.querySelector('.js-manpower-defence').classList.remove('hidden');

              break;
            case USER_TYPES.PSS:
              document.querySelector('.js-operation-pss').classList.remove('hidden');
              document.querySelector('.js-manpower-defence').classList.remove('hidden');

              break;
            default:
          }

          // hide login form
          loginformWrapper.remove();
          // show post login
          postLogin.classList.remove('hidden');
        })
        .catch(function(error) {
          submitButton.removeAttribute('disabled');
          submitButton.innerText = 'Login';
          console.log('error', error);
        });
    });
  })();
})(window);
