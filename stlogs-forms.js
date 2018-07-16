(function() {
  'use strict';
  var TOKEN_KEY = '(*&(Y#@HIUH(W*R';
  var DEPARTMENT_KEY = ')(*)*)(#)$*(()';
  var NAME_KEY = ')(*)*)(#)$*(()*^*@(#&';

  var API = 'https://stlogs-staging.azurewebsites.net';

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
  if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
      value: function assign(target, varArgs) {
        // .length of function is 2
        'use strict';
        if (target == null) {
          // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }
  // document.location.href.indexOf('localhost') > 0
  //   ? 'https://stlogs-staging.azurewebsites.net' for dev only
  //   : '';
  var TABS = {
    OPERATION: 'OPERATION',
    MANPOWER: 'MANPOWER'
  };

  var DEPARTMENTS = {
    AVIATION: 'STLogsAviation',
    DEFENCE: 'STLogsDefence',
    HEALTHCARE: 'STLogsHealthcare',
    PSS: 'STLogsPSS'
  };

  var AVIATION_OPERATION_FORM = [
    {
      heading: "Today's Operations:",
      name: 'today',
      groups: [
        {
          title: 'Air freight',
          fields: [
            {
              label: 'Import',
              name: 'AFImport',
              required: true
            },
            {
              label: 'Export',
              name: 'AFExport',
              required: true
            },
            {
              label: 'Traffic',
              name: 'AFTraffic',
              required: true
            }
          ]
        },
        {
          title: 'Sea freight',
          fields: [
            {
              label: 'Import',
              name: 'SFImport',
              required: true
            },
            {
              label: 'Export',
              name: 'SFExport',
              required: true
            },
            {
              label: 'Traffic',
              name: 'SFTraffic',
              required: true
            }
          ]
        },
        {
          title: 'Stars',
          fields: [
            {
              label: 'Refuelling',
              name: 'StarrRefuelling',
              required: true
            },
            {
              label: 'AMC',
              name: 'AM',
              required: true
            },
            {
              label: 'DSR Refuelling',
              name: 'SDSRRefuelling',
              required: true
            },
            {
              label: 'DSR Defuelling',
              name: 'SDSRDefuelling',
              required: true
            },
            {
              label: 'DSR Bridging',
              name: 'SDSRBridging',
              required: true
            }
          ]
        },
        {
          title: 'Aml',
          fields: [
            {
              label: 'RSAF Tech Log',
              name: 'AMLRSAFTechLog',
              required: true
            },
            {
              label: 'RSN ShipHusbandry',
              name: 'AMLRSNShipHusbandry',
              required: true
            },
            {
              label: 'Other Ops',
              name: 'AMLOtherOps',
              required: true
            }
          ]
        },
        {
          label: 'Incident',
          name: 'AviationIncident',
          required: true
        },
        {
          label: 'Key Highlight For Next Day',
          name: 'NextdayHighlighting',
          required: true
        }
      ]
    }
  ];
  var AVIATION_MANPOWER_FORM = [
    {
      heading: 'Manpower Status - Aviation',
      groups: [
        { label: 'Overall Strength', name: 'OverallStrength', required: true, type: 'number' },
        { label: 'Overall Present', name: 'OverallPresent', required: true, type: 'number' },
        { label: 'Overall Overseas', name: 'OverallOverseas', required: true, type: 'number' },
        { label: 'Overall Leave', name: 'OverallLeave', required: true, type: 'number' },
        { label: 'Overall Medical', name: 'OverallMedical', required: true, type: 'number' },
        { label: 'Overall MPCON', name: 'OverallMpcon', required: true, type: 'number' },
        { label: 'STARS Strength', name: 'StarsStrength', required: true, type: 'number' },
        { label: 'STARS Present', name: 'StarsPresent', required: true, type: 'number' },
        { label: 'STARS Overseas', name: 'StarsOverseas', required: true, type: 'number' },
        { label: 'STARS Leave', name: 'StarsLeave', required: true, type: 'number' },
        { label: 'STARS Medical', name: 'StarsMedical', required: true, type: 'number' },
        { label: 'STARS MPCON', name: 'StarsMpcon', required: true, type: 'number' },
        { label: 'AML Strength', name: 'AmlStrength', required: true, type: 'number' },
        { label: 'AML Present', name: 'AmlPresent', required: true, type: 'number' },
        { label: 'AML Overseas', name: 'AmlOverseas', required: true, type: 'number' },
        { label: 'AML Leave', name: 'AmlLeave', required: true, type: 'number' },
        { label: 'AML Medical', name: 'AmlMedical', required: true, type: 'number' },
        { label: 'AML MPCON', name: 'AmlMpcon', required: true, type: 'number' },
        { label: 'Freight Strength', name: 'FreightStrength', required: true, type: 'number' },
        { label: 'Freight Present', name: 'FreightPresent', required: true, type: 'number' },
        { label: 'Freight Overseas', name: 'FreightOverseas', required: true, type: 'number' },
        { label: 'Freight Leave', name: 'FreightLeave', required: true, type: 'number' },
        { label: 'Freight Medical', name: 'FreightMedical', required: true, type: 'number' },
        { label: 'Freight MPCON', name: 'FreightMpcon', required: true, type: 'number' }
      ]
    }
  ];
  var AVIATION_REDCON_FORM = [
    {
      heading: 'REDCON',
      groups: [
        { label: 'Overall Fleet', name: 'OverallFleet', required: true, type: 'number' },
        { label: 'Overall Serviceable', name: 'OverallServiceable', required: true, type: 'number' },
        { label: 'Overall Unserviceable', name: 'OverallUnserviceable', required: true, type: 'number' },
        { label: 'Overall Workshop', name: 'OverallWorkshop', required: true, type: 'number' },
        { label: 'Overall REDCON', name: 'OverallRedcon', required: true, type: 'number' },
        { label: 'STARS Fleet', name: 'StarsFleet', required: true, type: 'number' },
        { label: 'STARS Serviceable', name: 'StarsServiceable', required: true, type: 'number' },
        { label: 'STARS Unserviceable', name: 'StarsUnserviceable', required: true, type: 'number' },
        { label: 'STARS Workshop', name: 'StarsWorkshop', required: true, type: 'number' },
        { label: 'STARS REDCON', name: 'StarsRedcon', required: true, type: 'number' },
        { label: 'AML Fleet', name: 'AmlFleet', required: true, type: 'number' },
        { label: 'AML Serviceable', name: 'AmlServiceable', required: true, type: 'number' },
        { label: 'AML Unserviceable', name: 'AmlUnserviceable', required: true, type: 'number' },
        { label: 'AML Workshop', name: 'AmlWorkshop', required: true, type: 'number' },
        { label: 'AML REDCON', name: 'AmlRedcon', required: true, type: 'number' },
        { label: 'Freight Fleet', name: 'FreightFleet', required: true, type: 'number' },
        { label: 'Freight Serviceable', name: 'FreightServiceable', required: true, type: 'number' },
        { label: 'Freight Unserviceable', name: 'FreightUnserviceable', required: true, type: 'number' },
        { label: 'Freight Workshop', name: 'FreightWorkshop', required: true, type: 'number' },
        { label: 'Freight REDCON', name: 'FreightRedcon', required: true, type: 'number' },
        { label: 'Impact', name: 'Impact' }
      ]
    }
  ];
  var DEFENCE_MANPOWER_FORM = [
    {
      heading: 'Manpower Status',
      groups: [
        { label: 'Overall Strength', name: 'OverallStrength', required: true, type: 'number' },
        { label: 'Overall Present', name: 'OverallPresent', required: true, type: 'number' },
        { label: 'Overall Overseas', name: 'OverallOverseas', required: true, type: 'number' },
        { label: 'Overall Leave', name: 'OverallLeave', required: true, type: 'number' },
        { label: 'Overall Medical', name: 'OverallMedical', required: true, type: 'number' },
        { label: 'Overall MPCON', name: 'OverallMpcon', required: true, type: 'number' }
      ]
    }
  ];
  var DEFENCE_REDCON_FORM = [
    {
      heading: 'REDCON',
      groups: [
        { label: 'Overall Fleet', name: 'OverallFleet', required: true, type: 'number' },
        { label: 'Overall Serviceable', name: 'OverallServiceable', required: true, type: 'number' },
        { label: 'Overall Unserviceable', name: 'OverallUnserviceable', required: true, type: 'number' },
        { label: 'Overall Workshop', name: 'OverallWorkshop', required: true, type: 'number' },
        { label: 'Overall REDCON', name: 'OverallRedcon', required: true, type: 'number' },
        { label: 'Impact', name: 'Impact' }
      ]
    }
  ];
  var DEFENCE_OPERATION_FORM = [
    {
      heading: "Today's Operations:",
      groups: [
        {
          label: 'Army Delivery (Milkrun)',
          name: 'DefArmyDelivery',
          required: true
        },
        {
          label: 'E-mart Delivery',
          name: 'DefEMartDelivery',
          required: true
        },
        {
          label: 'Supported',
          name: 'DefSupported',
          required: true
        },
        {
          label: 'Incident',
          name: 'DefIncident',
          required: true
        },
        {
          label: 'Key Highlight For Next Day',
          name: 'NextdayHighlighting',
          required: true
        }
      ]
    }
  ];
  var HEALTHCARE_OPERATION_FORM = [
    {
      heading: "Today's Operations:",
      groups: [
        {
          label: 'STHC: All delivery completed.',
          name: 'STHC',
          required: true
        },
        {
          label: 'THC: Outbound to Expo for EYS – completed. Inbound of 10 pallets from ICM – completed.',
          name: 'THC',
          required: true
        },
        {
          label: 'Incident',
          name: 'HCIncident',
          required: true
        },
        {
          label: 'Key Highlight For Next Day',
          name: 'NextdayHighlighting',
          required: true
        }
      ]
    }
  ];
  var PSS_OPERATION_FORM = [
    {
      heading: "Today's Operations:",
      groups: [
        {
          label: 'FUPO (D)',
          name: 'FUPO',
          required: true
        },
        {
          label: 'MHA Mailroom (D)',
          name: 'MHAMailroom',
          required: true
        },
        {
          label: 'MOE (N)',
          name: 'MOE',
          required: true
        },
        {
          label: 'MOM (N)',
          name: 'MOM',
          required: true
        },
        {
          label: 'Events (N) ',
          name: 'Events',
          required: true
        },
        {
          label: 'MLAW (N) ',
          name: 'MLAW',
          required: true
        },
        {
          label: 'PLB Offsite Stores (N)',
          name: 'PLBOffsiteStores',
          required: true
        },
        {
          label: 'SCDF Offsite Stores (N) ',
          name: 'SCDFOffsiteStores',
          required: true
        },
        {
          label: 'Courier Services (N)',
          name: 'CourierServices',
          required: true
        },
        {
          label: 'NLB (N)',
          name: 'NLB',
          required: true
        },
        {
          label: 'Procurement (N) ',
          name: 'Procurement',
          required: true
        },
        {
          label: 'Key Highlight For Next Day',
          name: 'NextdayHighlighting',
          required: true
        }
      ]
    }
  ];

  var callApi = function callApi(options) {
    if (localStorage.getItem(TOKEN_KEY)) {
      var authStr = 'Bearer ' + localStorage.getItem(TOKEN_KEY);

      options.headers = options.headers || {};
      options.headers.Authorization = authStr;
    }

    return axios(options)
      .then(function(resp) {
        if (typeof options.success === 'function') {
          options.success(resp);
        }
      })
      .catch(function(error) {
        if (error.response.status === 401) {
          localStorage.clear();
          window.location.reload();
        } else {
          if (typeof options.error === 'function') {
            options.error(error);
          }
        }
      });
  };

  var resetModel = function resetModel(model) {
    var keys = Object.keys(model);
    keys.forEach(function(key) {
      model[key] = '';
    });

    return model;
  };

  var isLoggedIn = function() {
    var token = localStorage.getItem(TOKEN_KEY);
    var department = localStorage.getItem(DEPARTMENT_KEY);
    var availabelDepartments = JSON.stringify(DEPARTMENTS);

    return !!token && availabelDepartments.indexOf(department) > -1;
  };

  var getToday = function() {
    var today = new Date();

    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    return today.getTime() / 1000;
  };

  var app = new Vue({
    el: '#app',
    data: {
      notifications: [],
      user: {
        loggedin: !!isLoggedIn(),
        logining: false,
        // defence@stlogs.com / Defence210$
        // healthcare@stlogs.com / Healthcare412$
        // pss@stlogs.com / Pss126$
        // aviation@stlogs.com / Aviation536$
        username: '',
        password: '',
        name: isLoggedIn() ? localStorage.getItem(NAME_KEY) : '',
        userDepartment: isLoggedIn() ? localStorage.getItem(DEPARTMENT_KEY) : ''
      },
      tabActive: TABS.MANPOWER,
      aviationManpower: {
        submitting: false,
        fields: AVIATION_MANPOWER_FORM,
        model: {}
      },
      aviationRedcon: {
        submitting: false,
        fields: AVIATION_REDCON_FORM,
        model: {}
      },
      aviationOperation: {
        submitting: false,
        fields: AVIATION_OPERATION_FORM,
        model: {}
      },
      defenceManpower: {
        submitting: false,
        fields: DEFENCE_MANPOWER_FORM,
        model: {}
      },
      defenceRedcon: {
        submitting: false,
        fields: DEFENCE_REDCON_FORM,
        model: {}
      },
      defenceOperation: {
        submitting: false,
        fields: DEFENCE_OPERATION_FORM,
        model: {}
      },
      healthcareOperation: {
        submitting: false,
        fields: HEALTHCARE_OPERATION_FORM,
        model: {}
      },
      pssOperation: {
        submitting: false,
        fields: PSS_OPERATION_FORM,
        model: {}
      }
    },
    computed: {
      operationTabActive: function() {
        return this.tabActive === TABS.OPERATION;
      },
      manpowerTabActive: function() {
        return this.tabActive === TABS.MANPOWER;
      },
      isAvivation: function() {
        return this.user.userDepartment === DEPARTMENTS.AVIATION;
      },
      isDefence: function() {
        return this.user.userDepartment === DEPARTMENTS.DEFENCE;
      },
      isHealthcare: function() {
        return this.user.userDepartment === DEPARTMENTS.HEALTHCARE;
      },
      isPSS: function() {
        return this.user.userDepartment === DEPARTMENTS.PSS;
      },
      loginBtnText: function() {
        return this.user.logining ? 'Logining...' : 'Login';
      },
      aviationManpowerFormSubmitText: function() {
        return this.aviationManpower.submitting ? 'Submitting...' : 'Submit';
      },
      aviationRedconFormSubmitText: function() {
        return this.aviationRedcon.submitting ? 'Submitting...' : 'Submit';
      },
      aviationOperationFormSubmitText: function() {
        return this.aviationOperation.submitting ? 'Submitting...' : 'Submit';
      },
      defenceManpowerFormSubmitText: function() {
        return this.defenceManpower.submitting ? 'Submitting...' : 'Submit';
      },
      defenceRedconFormSubmitText: function() {
        return this.defenceRedcon.submitting ? 'Submitting...' : 'Submit';
      },
      defenceOperationFormSubmitText: function() {
        return this.defenceOperation.submitting ? 'Submitting...' : 'Submit';
      },
      healthcareOperationFormSubmitText: function() {
        return this.healthcareOperation.submitting ? 'Submitting...' : 'Submit';
      },
      pssOperationFormSubmitText: function() {
        return this.pssOperation.submitting ? 'Submitting...' : 'Submit';
      }
    },
    methods: {
      login: function() {
        var self = this;

        this.user.logining = true;

        axios({
          url: 'https://botbotidentity.azurewebsites.net/connect/token',
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          data: 'username=' + this.user.username + '&password=' + this.user.password + '&client_id=botbotclient&client_secret=botbotsecret&grant_type=password'
        })
          .then(function(resp) {
            var roles = resp.data.roles;
            var userDepartment = roles && roles[0];

            self.user.userDepartment = userDepartment;
            self.user.name = resp.data.name;
            self.user.logining = false;
            self.user.loggedin = true;

            localStorage.setItem(TOKEN_KEY, resp.data.access_token);
            localStorage.setItem(DEPARTMENT_KEY, userDepartment);
            localStorage.setItem(NAME_KEY, resp.data.name);

            self.notifications.push({
              type: 'success',
              message: 'Login success'
            });
          })
          .catch(function(error) {
            self.user.logining = false;
            self.user.userDepartment = '';

            self.notifications.push({
              type: 'error',
              message: error.response.data.error_description
            });
          });
      },
      logout: function() {
        localStorage.clear();
        window.location.reload();
      },
      showOperation: function() {
        this.tabActive = TABS.OPERATION;
      },
      showManpower: function() {
        this.tabActive = TABS.MANPOWER;
      },
      doAvivationOperationSubmit: function() {
        var self = this;
        var today = getToday();

        self.aviationOperation.submitting = true;
        this.aviationOperation.model.Date = today; // second

        callApi({
          url: API + '/api/form/opshighlight',
          method: 'POST',
          data: this.aviationOperation.model,
          success: function(resp) {
            if (resp) self.aviationOperation.model = resetModel(self.aviationOperation.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          },
          error: function(error) {
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          }
        }).then(function() {
          self.aviationOperation.submitting = false;
        });
      },
      doAvivationManpowerSubmit: function() {
        var self = this;
        self.aviationManpower.submitting = true;

        callApi({
          url: API + '/api/form/mpcon',
          method: 'POST',
          data: Object.assign(this.aviationRedcon.model, this.aviationManpower.model),
          success: function(resp) {
            self.aviationManpower.model = resetModel(self.aviationManpower.model);
            self.aviationRedcon.model = resetModel(self.aviationRedcon.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          },
          error: function(error) {
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          }
        }).then(function(resp) {
          self.aviationManpower.submitting = false;
        });
      },
      doDefenceManpowerSubmit: function() {
        var self = this;
        self.defenceManpower.submitting = true;

        callApi({
          url: API + '/api/form/mpcon',
          method: 'POST',
          data: Object.assign(this.defenceRedcon.model, this.defenceManpower.model),
          success: function(resp) {
            self.defenceManpower.model = resetModel(self.defenceManpower.model);
            self.defenceRedcon.model = resetModel(self.defenceRedcon.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          },
          error: function(error) {
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          }
        }).then(function(resp) {
          self.defenceManpower.submitting = false;
        });
      },
      doDefenceOperationSubmit: function() {
        var self = this;
        self.defenceOperation.submitting = true;
        this.defenceOperation.model.Date = getToday();

        callApi({
          url: API + '/api/form/opshighlight',
          method: 'POST',
          data: this.defenceOperation.model,
          success: function(resp) {
            self.defenceOperation.model = resetModel(self.defenceOperation.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          },
          error: function(error) {
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          }
        }).then(function() {
          self.defenceOperation.submitting = false;
        });
      },
      doHealthcareRedconSubmit: function() {
        var self = this;
        self.healthcareRedcon.submitting = true;

        callApi({
          url: API + '/api/form/redcon',
          method: 'POST',
          data: this.healthcareRedcon.model
        })
          .then(function(resp) {
            self.healthcareRedcon.submitting = false;
            self.healthcareRedcon.model = resetModel(self.healthcareRedcon.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          })
          .catch(function(error) {
            self.healthcareRedcon.submitting = false;
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          });
      },
      doHealthcareManpowerSubmit: function() {
        var self = this;
        self.healthcareManpower.submitting = true;

        callApi({
          url: API + '/api/form/mpcon',
          method: 'POST',
          data: this.healthcareManpower.model,
          success: function(resp) {
            self.healthcareManpower.model = resetModel(self.healthcareManpower.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          },
          error: function(error) {
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          }
        }).then(function(resp) {
          self.healthcareManpower.submitting = false;
        });
      },
      doHealthcareOperationSubmit: function() {
        var self = this;
        self.healthcareOperation.submitting = true;
        this.healthcareOperation.model.Date = getToday();

        callApi({
          url: API + '/api/form/opshighlight',
          method: 'POST',
          data: this.healthcareOperation.model,
          success: function(resp) {
            self.healthcareOperation.model = resetModel(self.healthcareOperation.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          },
          error: function(error) {
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          }
        }).then(function(resp) {
          self.healthcareOperation.submitting = false;
        });
      },
      doPssOperationSubmit: function() {
        var self = this;
        self.pssOperation.submitting = true;
        this.pssOperation.model.Date = getToday();

        callApi({
          url: API + '/api/form/opshighlight',
          method: 'POST',
          data: this.pssOperation.model,
          success: function(resp) {
            self.pssOperation.submitting = false;
            self.pssOperation.model = resetModel(self.pssOperation.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          },
          error: function(error) {
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          }
        }).then(function(resp) {
          self.pssOperation.submitting = false;
        });
      },
      removeNotification: function(index) {
        this.notifications.splice(index, 1);
      }
    }
  });
})();
