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
    PSS: 'STLogsPSS',
    TCH: 'STLogsTHC'
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
              name: 'aFImport',
              required: true
            },
            {
              label: 'Export',
              name: 'aFExport',
              required: true
            },
            {
              label: 'Traffic',
              name: 'aFTraffic',
              required: true
            }
          ]
        },
        {
          title: 'Sea freight',
          fields: [
            {
              label: 'Import',
              name: 'sFImport',
              required: true
            },
            {
              label: 'Export',
              name: 'sFExport',
              required: true
            },
            {
              label: 'Traffic',
              name: 'sFTraffic',
              required: true
            }
          ]
        },
        {
          title: 'Stars',
          fields: [
            {
              label: 'Refuelling',
              name: 'starrRefuelling',
              required: true
            },
            {
              label: 'AMC',
              name: 'aM',
              required: true
            },
            {
              label: 'DSR Refuelling',
              name: 'sDSRRefuelling',
              required: true
            },
            {
              label: 'DSR Defuelling',
              name: 'sDSRDefuelling',
              required: true
            },
            {
              label: 'DSR Bridging',
              name: 'sDSRBridging',
              required: true
            }
          ]
        },
        {
          title: 'Aml',
          fields: [
            {
              label: 'RSAF Tech Log',
              name: 'aMLRSAFTechLog',
              required: true
            },
            {
              label: 'RSN ShipHusbandry',
              name: 'aMLRSNShipHusbandry',
              required: true
            },
            {
              label: 'Other Ops',
              name: 'aMLOtherOps',
              required: true
            }
          ]
        },
        {
          label: 'Incident',
          name: 'aviationIncident'
        },
        {
          label: 'Key Highlight For Next Day',
          name: 'tomorrowKeyHighlight'
        }
      ]
    }
  ];
  var AVIATION_MANPOWER_FORM = [
    {
      heading: 'Manpower Status - Aviation',
      groups: [
        { label: 'Overall Strength', name: 'overallStrength', required: true, type: 'number' },
        { label: 'Overall Present', name: 'overallPresent', required: true, type: 'number' },
        { label: 'Overall Overseas', name: 'overallOverseas', required: true, type: 'number' },
        { label: 'Overall Leave', name: 'overallLeave', required: true, type: 'number' },
        { label: 'Overall Medical', name: 'overallMedical', required: true, type: 'number' },
        { label: 'Overall MPCON', name: 'overallMpcon', required: true, disabled: true },
        { label: 'STARS Strength', name: 'starsStrength', required: true, type: 'number' },
        { label: 'STARS Present', name: 'starsPresent', required: true, type: 'number' },
        { label: 'STARS Overseas', name: 'starsOverseas', required: true, type: 'number' },
        { label: 'STARS Leave', name: 'starsLeave', required: true, type: 'number' },
        { label: 'STARS Medical', name: 'starsMedical', required: true, type: 'number' },
        { label: 'STARS MPCON', name: 'starsMpcon', required: true, type: 'number' },
        { label: 'AML Strength', name: 'amlStrength', required: true, type: 'number' },
        { label: 'AML Present', name: 'amlPresent', required: true, type: 'number' },
        { label: 'AML Overseas', name: 'amlOverseas', required: true, type: 'number' },
        { label: 'AML Leave', name: 'amlLeave', required: true, type: 'number' },
        { label: 'AML Medical', name: 'amlMedical', required: true, type: 'number' },
        { label: 'AML MPCON', name: 'amlMpcon', required: true, type: 'number' },
        { label: 'Freight Strength', name: 'freightStrength', required: true, type: 'number' },
        { label: 'Freight Present', name: 'freightPresent', required: true, type: 'number' },
        { label: 'Freight Overseas', name: 'freightOverseas', required: true, type: 'number' },
        { label: 'Freight Leave', name: 'freightLeave', required: true, type: 'number' },
        { label: 'Freight Medical', name: 'freightMedical', required: true, type: 'number' },
        { label: 'Freight MPCON', name: 'freightMpcon', required: true, type: 'number' }
      ]
    }
  ];
  var AVIATION_REDCON_FORM = [
    {
      heading: 'REDCON',
      groups: [
        { label: 'Overall Fleet', name: 'overallFleet', required: true, type: 'number' },
        { label: 'Overall Serviceable', name: 'overallServiceable', required: true, type: 'number' },
        { label: 'Overall Unserviceable', name: 'overallUnserviceable', required: true, type: 'number' },
        { label: 'Overall Workshop', name: 'overallWorkshop', required: true, type: 'number' },
        { label: 'Overall REDCON', name: 'overallRedcon', required: true, disabled: true },
        { label: 'STARS Fleet', name: 'starsFleet', required: true, type: 'number' },
        { label: 'STARS Serviceable', name: 'starsServiceable', required: true, type: 'number' },
        { label: 'STARS Unserviceable', name: 'starsUnserviceable', required: true, type: 'number' },
        { label: 'STARS Workshop', name: 'starsWorkshop', required: true, type: 'number' },
        { label: 'STARS REDCON', name: 'starsRedcon', required: true, type: 'number' },
        { label: 'AML Fleet', name: 'amlFleet', required: true, type: 'number' },
        { label: 'AML Serviceable', name: 'amlServiceable', required: true, type: 'number' },
        { label: 'AML Unserviceable', name: 'amlUnserviceable', required: true, type: 'number' },
        { label: 'AML Workshop', name: 'amlWorkshop', required: true, type: 'number' },
        { label: 'AML REDCON', name: 'amlRedcon', required: true, type: 'number' },
        { label: 'Freight Fleet', name: 'freightFleet', required: true, type: 'number' },
        { label: 'Freight Serviceable', name: 'freightServiceable', required: true, type: 'number' },
        { label: 'Freight Unserviceable', name: 'freightUnserviceable', required: true, type: 'number' },
        { label: 'Freight Workshop', name: 'freightWorkshop', required: true, type: 'number' },
        { label: 'Freight REDCON', name: 'freightRedcon', required: true, type: 'number' },
        { label: 'Impact', name: 'impact', disabled: true }
      ]
    }
  ];
  var DEFENCE_MANPOWER_FORM = [
    {
      heading: 'Manpower Status',
      groups: [
        { label: 'Overall Strength', name: 'overallStrength', required: true, type: 'number' },
        { label: 'Overall Present', name: 'overallPresent', required: true, type: 'number' },
        { label: 'Overall Overseas', name: 'overallOverseas', required: true, type: 'number' },
        { label: 'Overall Leave', name: 'overallLeave', required: true, type: 'number' },
        { label: 'Overall Medical', name: 'overallMedical', required: true, type: 'number' },
        { label: 'Overall MPCON', name: 'overallMpcon', required: true, disabled: true }
      ]
    }
  ];
  var DEFENCE_REDCON_FORM = [
    {
      heading: 'REDCON',
      groups: [
        { label: 'Overall Fleet', name: 'overallFleet', required: true, type: 'number' },
        { label: 'Overall Serviceable', name: 'overallServiceable', required: true, type: 'number' },
        { label: 'Overall Unserviceable', name: 'overallUnserviceable', required: true, type: 'number' },
        { label: 'Overall Workshop', name: 'overallWorkshop', required: true, type: 'number' },
        { label: 'Overall REDCON', name: 'overallRedcon', required: true, disabled: true },
        { label: 'Impact', name: 'impact' }
      ]
    }
  ];
  var DEFENCE_OPERATION_FORM = [
    {
      heading: "Today's Operations:",
      groups: [
        {
          label: 'Army Delivery (Milkrun)',
          name: 'defArmyDelivery',
          required: true
        },
        {
          label: 'E-mart Delivery',
          name: 'defEMartDelivery',
          required: true
        },
        {
          label: 'Supported',
          name: 'defSupported',
          required: true
        },
        {
          label: 'Incident',
          name: 'defIncident'
        },
        {
          label: 'Key Highlight For Next Day',
          name: 'tomorrowKeyHighlight'
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
          name: 'sTHC',
          required: true
        },
        // {
        //   label: 'THC: Outbound to Expo for EYS – completed. Inbound of 10 pallets from ICM – completed.',
        //   name: 'tHC',
        //   required: true
        // },
        {
          label: 'Incident',
          name: 'hCIncident'
        },
        {
          label: 'Key Highlight For Next Day',
          name: 'tomorrowKeyHighlight'
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
          name: 'fUPO',
          required: true
        },
        {
          label: 'MHA Mailroom (D)',
          name: 'mHAMailroom',
          required: true
        },
        {
          label: 'MOE (N)',
          name: 'mOE',
          required: true
        },
        {
          label: 'MOM (N)',
          name: 'mOM',
          required: true
        },
        {
          label: 'Events (N) ',
          name: 'events',
          required: true
        },
        {
          label: 'MLAW (N) ',
          name: 'mLAW',
          required: true
        },
        {
          label: 'PLB Offsite Stores (N)',
          name: 'pLBOffsiteStores',
          required: true
        },
        {
          label: 'SCDF Offsite Stores (N) ',
          name: 'sCDFOffsiteStores',
          required: true
        },
        {
          label: 'Courier Services (N)',
          name: 'courierServices',
          required: true
        },
        {
          label: 'NLB (N)',
          name: 'nLB',
          required: true
        },
        {
          label: 'Procurement (N) ',
          name: 'procurement',
          required: true
        },
        {
          label: 'Key Highlight For Next Day',
          name: 'tomorrowKeyHighlight'
        }
      ]
    }
  ];

  var TCH_FORM = [
    {
      heading: "Today's Operations:",
      groups: [
        {
          label: 'THC',
          name: 'THC',
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
      isHideManPower: false,
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
      },
      tchOperation: {
        submitting: false,
        fields: TCH_FORM,
        model: {}
      },
      manpowerTime: '',
      opsHighlightTime: ''
    },
    created: function() {
      if (this.user.loggedin) {
        this.getLastTime();
        this.getPreviousData();
        this.checkTCH(this.user.userDepartment)
      }
    },
    watch: {
      'aviationManpower.model.overallPresent': function(newData) {
        this.aviationManpower.model.overallMpcon = this.calcPercentage(newData, this.aviationManpower.model.overallStrength);
        // this.toggleAviationImpact();
      },
      'aviationManpower.model.overallStrength': function(newData) {
        this.aviationManpower.model.overallMpcon = this.calcPercentage(this.aviationManpower.model.overallPresent, newData);
        // this.toggleAviationImpact();
      },
      'aviationRedcon.model.overallServiceable': function(newData) {
        this.aviationRedcon.model.overallRedcon = this.calcPercentage(newData, this.aviationRedcon.model.overallFleet);
        // this.toggleAviationImpact();
      },
      'aviationRedcon.model.overallFleet': function(newData) {
        this.aviationRedcon.model.overallRedcon = this.calcPercentage(this.aviationRedcon.model.overallServiceable, newData);
        // this.toggleAviationImpact();
      },
      'defenceManpower.model.overallPresent': function(newData) {
        this.defenceManpower.model.overallMpcon = this.calcPercentage(newData, this.defenceManpower.model.overallStrength);
      },
      'defenceManpower.model.overallStrength': function(newData) {
        this.defenceManpower.model.overallMpcon = this.calcPercentage(this.defenceManpower.model.overallPresent, newData);
      },
      'defenceRedcon.model.overallServiceable': function(newData) {
        this.defenceRedcon.model.overallRedcon = this.calcPercentage(newData, this.defenceRedcon.model.overallFleet);
      },
      'defenceRedcon.model.overallFleet': function(newData) {
        this.defenceRedcon.model.overallRedcon = this.calcPercentage(this.defenceRedcon.model.overallServiceable, newData);
      },
      'user.loggedin': function(loggedin) {
        if (loggedin === true) {
          this.getLastTime();
          this.getPreviousData();
        }
      }
    },
    computed: {
      operationTabActive: function() {
        return this.tabActive === TABS.OPERATION;
      },
      manpowerTabActive: function() {
        return this.tabActive === TABS.MANPOWER;
      },
      isAviation: function() {
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
      isTCH: function() {
        return this.user.userDepartment === DEPARTMENTS.TCH;
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
      },
      tchOperationFormSubmitText: function() {
        return this.tchOperation.submitting ? 'Submitting...' : 'Submit';
      },
      filledTimeStr: function() {
        if (this.tabActive === TABS.MANPOWER && this.manpowerTime) {
          return 'Last filled at ' + this.manpowerTime;
        }

        if (this.tabActive === TABS.OPERATION && this.opsHighlightTime) {
          return 'Last filled at ' + this.opsHighlightTime;
        }

        return '';
      }
    },
    methods: {
      login: function() {
        var self = this;

        this.user.logining = true;
        this.user.loggedin = false;
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

            self.checkTCH(userDepartment);
          })
          .catch(function(error) {
            self.user.logining = false;
            self.user.loggedin = false;
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
        this.aviationOperation.model.date = today; // second

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
          data: Object.assign(this.aviationManpower.model, {
            impact: this.aviationRedcon.model.impact
          }),
          success: function(resp) {
            self.aviationManpower.model = resetModel(self.aviationManpower.model);
            // self.aviationRedcon.model = resetModel(self.aviationRedcon.model);
            self.notifications.push({ type: 'success', message: 'Submit Manpower form success' });
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

        callApi({
          url: API + '/api/form/redcon',
          method: 'POST',
          data: this.aviationRedcon.model,
          success: function(resp) {
            // self.aviationManpower.model = resetModel(self.aviationManpower.model);
            self.aviationRedcon.model = resetModel(self.aviationRedcon.model);
            self.notifications.push({ type: 'success', message: 'Submit REDCON form success' });
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
          data: Object.assign(this.defenceManpower.model, {
            impact: self.defenceRedcon.model.impact
          }),
          success: function(resp) {
            self.defenceManpower.model = resetModel(self.defenceManpower.model);
            self.notifications.push({ type: 'success', message: 'Submit MPCON form success' });
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

        callApi({
          url: API + '/api/form/redcon',
          method: 'POST',
          data: this.defenceRedcon.model,
          success: function(resp) {
            self.defenceRedcon.model = resetModel(self.defenceRedcon.model);
            self.notifications.push({ type: 'success', message: 'Submit REDCON form success' });
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
        this.defenceOperation.model.date = getToday();

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
        this.healthcareOperation.model.date = getToday();

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
        this.pssOperation.model.date = getToday();

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
      doTCHOperationSubmit: function() {
        var self = this;
        self.tchOperation.submitting = true;
        this.tchOperation.model.date = getToday();

        callApi({
          url: API + '/api/form/opshighlight',
          method: 'POST',
          data: this.tchOperation.model,
          success: function(resp) {
            self.tchOperation.submitting = false;
            self.tchOperation.model = resetModel(self.tchOperation.model);
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
      },
      getLastTime: function() {
        const self = this;

        callApi({
          url: API + '/api/form/getTime',
          method: 'GET',
          success: function(resp) {
            self.manpowerTime = resp.data.manpowerTime;
            self.opsHighlightTime = resp.data.opsHighlightTime;
          },
          error: function(error) {
            self.manpowerTime = '';
            self.opsHighlightTime = '';
          }
        });
      },
      getPreviousData: function() {
        const self = this;

        callApi({
          url: API + '/api/form/getData',
          method: 'GET',
          success: function(resp) {
            // self.manpowerTime = resp.data.manpowerTime;
            // self.opsHighlightTime = resp.data.opsHighlightTime;
            if (self.isAviation) {
              self.aviationManpower.model = resp.data.manpowerData;
              self.aviationRedcon.model = resp.data.redStatusData;
            } else {
              self.defenceManpower.model = resp.data.manpowerData;
              self.defenceRedcon.model = resp.data.redStatusData;
            }

            console.log('resp', resp);
          },
          error: function(error) {
            // self.manpowerTime = '';
            // self.opsHighlightTime = '';
          }
        });
      },
      calcPercentage: function(a, b) {
        const aNum = parseInt(a);
        const bNum = parseInt(b);

        if (aNum > 0 && bNum > 0) {
          return Math.round((aNum / bNum) * 100) + '%';
        }

        return 0;
      },
      checkAviationDisabled: function(item) {
        if (item.name === 'impact') {
          const mpcon = this.aviationManpower.model.overallMpcon;
          const redcon = this.aviationRedcon.model.overallRedcon;

          if (mpcon <= 85 || redcon <= 85) {
            return false;
          } else {
            this.aviationRedcon.model.impact = '';
            return true;
          }
        }

        return item.disabled;
      },
      checkDefencesDisabled: function(item) {
        if (item.name === 'impact') {
          const mpcon = this.defenceManpower.model.overallMpcon;
          const redcon = this.defenceRedcon.model.overallRedcon;

          if (mpcon <= 85 || redcon <= 85) {
            return false;
          } else {
            this.defenceRedcon.model.impact = '';
            return true;
          }
        }

        return item.disabled;
      },
      checkTCH: function(userDepartment) {
        if (userDepartment === DEPARTMENTS.TCH) {
          this.tabActive = TABS.OPERATION;
          this.isHideManPower = true;
        }
      }
    }
  });
})();
