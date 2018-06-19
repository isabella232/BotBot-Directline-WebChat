(function() {
  'use strict';
  var TOKEN_KEY = '(*&(Y#@HIUH(W*R';
  var DEPARTMENT_KEY = ')(*)*)(#)$*(()';
  var NAME_KEY = ')(*)*)(#)$*(()*^*@(#&';

  var API = '';
  // document.location.href.indexOf('localhost') > 0
  //   ? 'https://stlogs-staging.azurewebsites.net' for dev only
  //   : '';
  var TABS = {
    OPERATION: 'OPERATION',
    MANPOWER: 'MANPOWER'
  };

  var DEPARTMENTS = {
    AVIVATION: 'STLogsAviation',
    DEFENCE: 'STLogsDefence',
    HEALTHCARE: 'STLogsHealthcare',
    PSS: 'STLogsPSS'
  };

  var AVIVATION_OPERATION_FORM = [
    {
      heading: "Today's Operations:",
      groups: [
        {
          title: 'Air freight',
          fields: [
            {
              label: 'Import:',
              name: 'today_air_freight_import'
            },
            {
              label: 'Export',
              name: 'today_air_freight_export'
            },
            {
              label: 'Traffic',
              name: 'today_air_freight_traffic'
            }
          ]
        },
        {
          title: 'Sea freight',
          fields: [
            {
              label: 'Import:',
              name: 'today_atoday_sea_freight_import'
            },
            {
              label: 'Export',
              name: 'today_sea_freight_export'
            },
            {
              label: 'Traffic',
              name: 'today_sea_freight_traffic'
            }
          ]
        },
        {
          title: 'Stars',
          fields: [
            {
              label: 'Refuelling:',
              name: 'today_stars_refuelling'
            },
            {
              label: 'AMC:',
              name: 'today_stars_amc'
            },
            {
              label: 'DSR Refuelling: Defuelling: Bridging:',
              name: 'today_stars_dsr_refuelling_defuelling_bridging'
            }
          ]
        },
        {
          title: 'Aml',
          fields: [
            {
              label: 'RSAF Tech Log:',
              name: 'today_aml_rsaf_tech_log'
            },
            {
              label: 'RSN ShipHusbandry:',
              name: 'today_aml_rsn_shiphusbandry'
            },
            {
              label: 'Other Ops:',
              name: 'today_aml_other_ops'
            }
          ]
        },
        {
          label: 'Incident:',
          name: 'today_incident'
        }
      ]
    },
    {
      heading: 'Key Highlight For Next Day:',
      groups: [
        {
          title: 'Air freight',
          fields: [
            {
              label: 'Import:',
              name: 'today_air_freight_import'
            },
            {
              label: 'Export',
              name: 'today_air_freight_export'
            },
            {
              label: 'Traffic',
              name: 'today_air_freight_traffic'
            }
          ]
        },
        {
          title: 'Sea freight',
          fields: [
            {
              label: 'Import:',
              name: 'today_atoday_sea_freight_import'
            },
            {
              label: 'Export',
              name: 'today_sea_freight_export'
            },
            {
              label: 'Traffic',
              name: 'today_sea_freight_traffic'
            }
          ]
        },
        {
          title: 'Stars',
          fields: [
            {
              label: 'Refuelling:',
              name: 'today_stars_refuelling'
            },
            {
              label: 'AMC:',
              name: 'today_stars_amc'
            },
            {
              label: 'DSR Refuelling: Defuelling: Bridging:',
              name: 'today_stars_dsr_refuelling_defuelling_bridging'
            }
          ]
        },
        {
          title: 'Aml',
          fields: [
            {
              label: 'RSAF Tech Log:',
              name: 'today_aml_rsaf_tech_log'
            },
            {
              label: 'RSN ShipHusbandry:',
              name: 'today_aml_rsn_shiphusbandry'
            },
            {
              label: 'Other Ops:',
              name: 'today_aml_other_ops'
            }
          ]
        },
        {
          label: 'Incident:',
          name: 'today_incident'
        }
      ]
    }
  ];
  var AVIVATION_MANPOWER_FORM = [
    {
      heading: 'Manpower Status - Aviation',
      groups: [
        { label: 'MPCON', name: 'Mpcon' },
        { label: 'Impact', name: 'Impact' },
        { label: 'Overall Strength', name: 'OverallStrength' },
        { label: 'Overall Present', name: 'OverallPresent' },
        { label: 'Overall Overseas', name: 'OverallOverseas' },
        { label: 'Overall Leave', name: 'OverallLeave' },
        { label: 'Overall Medical', name: 'OverallMedical' },
        { label: 'Overall MPCON', name: 'OverallMpcon' },
        { label: 'Stars Strength', name: 'StarsStrength' },
        { label: 'Stars Present', name: 'StarsPresent' },
        { label: 'Stars Overseas', name: 'StarsOverseas' },
        { label: 'Stars Leave', name: 'StarsLeave' },
        { label: 'Stars Medical', name: 'StarsMedical' },
        { label: 'Stars MPCON', name: 'StarsMpcon' },
        { label: 'Aml Strength', name: 'AmlStrength' },
        { label: 'Aml Present', name: 'AmlPresent' },
        { label: 'Aml Overseas', name: 'AmlOverseas' },
        { label: 'Aml Leave', name: 'AmlLeave' },
        { label: 'Aml Medical', name: 'AmlMedical' },
        { label: 'Aml MPCON', name: 'AmlMpcon' },
        { label: 'Freight Strength', name: 'FreightStrength' },
        { label: 'Freight Present', name: 'FreightPresent' },
        { label: 'Freight Overseas', name: 'FreightOverseas' },
        { label: 'Freight Leave', name: 'FreightLeave' },
        { label: 'Freight Medical', name: 'FreightMedical' },
        { label: 'Freight MPCON', name: 'FreightMpcon' }
      ]
    }
  ];
  var AVIVATION_REDCON_FORM = [
    {
      heading: 'REDCON',
      groups: [
        { label: 'REDCON', name: 'Redcon' },
        { label: 'Impact', name: 'Impact' },
        { label: 'Overall Fleet', name: 'OverallFleet' },
        { label: 'Overall Serviceable', name: 'OverallServiceable' },
        { label: 'Overall Unserviceable', name: 'OverallUnserviceable' },
        { label: 'Overall Workshop', name: 'OverallWorkshop' },
        { label: 'Overall REDCON', name: 'OverallRedcon' },
        { label: 'Stars Fleet', name: 'StarsFleet' },
        { label: 'Stars Serviceable', name: 'StarsServiceable' },
        { label: 'Stars Unserviceable', name: 'StarsUnserviceable' },
        { label: 'Stars Workshop', name: 'StarsWorkshop' },
        { label: 'Stars REDCON', name: 'StarsRedcon' },
        { label: 'Aml Fleet', name: 'AmlFleet' },
        { label: 'Aml Serviceable', name: 'AmlServiceable' },
        { label: 'Aml Unserviceable', name: 'AmlUnserviceable' },
        { label: 'Aml Workshop', name: 'AmlWorkshop' },
        { label: 'Aml REDCON', name: 'AmlRedcon' },
        { label: 'Freight Fleet', name: 'FreightFleet' },
        { label: 'Freight Serviceable', name: 'FreightServiceable' },
        { label: 'Freight Unserviceable', name: 'FreightUnserviceable' },
        { label: 'Freight Workshop', name: 'FreightWorkshop' },
        { label: 'Freight REDCON', name: 'FreightRedcon' }
      ]
    }
  ];
  var DEFENCE_MANPOWER_FORM = [
    {
      heading: 'Manpower Status',
      groups: [
        { label: 'MPCON', name: 'Mpcon' },
        { label: 'Impact', name: 'Impact' },
        { label: 'Overall Strength', name: 'OverallStrength' },
        { label: 'Overall Present', name: 'OverallPresent' },
        { label: 'Overall Overseas', name: 'OverallOverseas' },
        { label: 'Overall Leave', name: 'OverallLeave' },
        { label: 'Overall Medical', name: 'OverallMedical' },
        { label: 'Overall MPCON', name: 'OverallMpcon' }
      ]
    }
  ];
  var DEFENCE_REDCON_FORM = [
    {
      heading: 'REDCON',
      groups: [
        { label: 'REDCON', name: 'Redcon' },
        { label: 'Impact', name: 'Impact' },
        { label: 'Overall Fleet', name: 'OverallFleet' },
        { label: 'Overall Serviceable', name: 'OverallServiceable' },
        { label: 'Overall Unserviceable', name: 'OverallUnserviceable' },
        { label: 'Overall Workshop', name: 'OverallWorkshop' },
        { label: 'Overall REDCON', name: 'OverallRedcon' }
      ]
    }
  ];
  var DEFENCE_OPERATION_FORM = [
    {
      heading: "Today's Operations:",
      groups: [
        {
          label: 'Army Delivery (Milkrun): 105 Pallets deliver across Units.',
          name: 'ArmyDelivery'
        },
        {
          label: 'E-mart Delivery: Delivery Date Order for 25 April 18 – All orders completed.',
          name: 'EMartDelivery'
        },
        {
          label: 'Supported:',
          name: 'Supported'
        },
        {
          label: 'Incident:',
          name: 'Incident'
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
          name: 'Sthc'
        },
        {
          label:
            'THC: Outbound to Expo for EYS – completed. Inbound of 10 pallets from ICM – completed.',
          name: 'Thc'
        },
        {
          label: 'Incident:',
          name: 'Incident'
        }
      ]
    }
  ];
  var PSS_OPERATION_FORM = [
    {
      heading: "Today's Operations:",
      groups: [
        {
          label: '>FUPO (D)',
          name: '>FUPO (D)'
        },
        {
          label: 'MHA Mailroom (D) ',
          name: 'MHA Mailroom (D) '
        },
        {
          label: 'MOE (N)',
          name: 'MOE (N)t'
        },
        {
          label: 'MOM (N)',
          name: 'MOM (N)'
        },
        {
          label: 'Events (N) ',
          name: 'Events (N) '
        },
        {
          label: 'MLAW (N) ',
          name: 'MLAW (N) '
        },
        {
          label: 'PLB Offsite Stores (N)',
          name: 'PLB Offsite Stores (N)'
        },
        {
          label: 'SCDF Offsite Stores (N) ',
          name: 'SCDF Offsite Stores (N) '
        },
        {
          label: 'Courier Services (N)',
          name: 'Courier Services (N)'
        },
        {
          label: 'NLB (N)',
          name: 'NLB (N)'
        },
        {
          label: 'Procurement (N) ',
          name: 'Procurement (N) '
        }
      ]
    },
    {
      heading: 'Key Highlight For Next Day:',
      groups: [
        {
          label: '>FUPO (D)',
          name: '>FUPO (D)'
        },
        {
          label: 'MHA Mailroom (D) ',
          name: 'MHA Mailroom (D) '
        },
        {
          label: 'MOE (N)',
          name: 'MOE (N)t'
        },
        {
          label: 'MOM (N)',
          name: 'MOM (N)'
        },
        {
          label: 'Events (N) ',
          name: 'Events (N) '
        },
        {
          label: 'MLAW (N) ',
          name: 'MLAW (N) '
        },
        {
          label: 'PLB Offsite Stores (N)',
          name: 'PLB Offsite Stores (N)'
        },
        {
          label: 'SCDF Offsite Stores (N) ',
          name: 'SCDF Offsite Stores (N) '
        },
        {
          label: 'Courier Services (N)',
          name: 'Courier Services (N)'
        },
        {
          label: 'NLB (N)',
          name: 'NLB (N)'
        },
        {
          label: 'Procurement (N) ',
          name: 'Procurement (N) '
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

    return axios(options).catch(function(error) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      }

      return error;
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
      avivationManpower: {
        submitting: false,
        fields: AVIVATION_MANPOWER_FORM,
        model: {
          Mpcon: '',
          Impact: '',
          OverallStrength: '',
          OverallPresent: '',
          OverallOverseas: '',
          OverallLeave: '',
          OverallMedical: '',
          OverallMpcon: '',
          StarsStrength: '',
          StarsPresent: '',
          StarsOverseas: '',
          StarsLeave: '',
          StarsMedical: '',
          StarsMpcon: '',
          AmlStrength: '',
          AmlPresent: '',
          AmlOverseas: '',
          AmlLeave: '',
          AmlMedical: '',
          AmlMpcon: '',
          FreightStrength: '',
          FreightPresent: '',
          FreightOverseas: '',
          FreightLeave: '',
          FreightMedical: '',
          FreightMpcon: ''
        }
      },
      avivationRedcon: {
        submitting: false,
        fields: AVIVATION_REDCON_FORM,
        model: {
          Impact: '',
          Redcon: '',
          OverallFleet: '',
          OverallServiceable: '',
          OverallUnserviceable: '',
          OverallWorkshop: '',
          OverallRedcon: '',
          StarsFleet: '',
          StarsServiceable: '',
          StarsUnserviceable: '',
          StarsWorkshop: '',
          StarsRedcon: '',
          AmlFleet: '',
          AmlServiceable: '',
          AmlUnserviceable: '',
          AmlWorkshop: '',
          AmlRedcon: '',
          FreightFleet: '',
          FreightServiceable: '',
          FreightUnserviceable: '',
          FreightWorkshop: '',
          FreightRedcon: ''
        }
      },
      avivationOperation: {
        submitting: false,
        fields: AVIVATION_OPERATION_FORM,
        model: {}
      },
      defenceManpower: {
        submitting: false,
        fields: DEFENCE_MANPOWER_FORM,
        model: {
          Mpcon: '',
          Impact: '',
          OverallStrength: '',
          OverallPresent: '',
          OverallOverseas: '',
          OverallLeave: '',
          OverallMedical: '',
          OverallMpcon: ''
        }
      },
      defenceRedcon: {
        submitting: false,
        fields: DEFENCE_REDCON_FORM,
        model: {
          Redcon: '',
          Impact: '',
          OverallFleet: '',
          OverallServiceable: '',
          OverallUnserviceable: '',
          OverallWorkshop: '',
          OverallRedcon: ''
        }
      },
      defenceOperation: {
        submitting: false,
        fields: DEFENCE_OPERATION_FORM,
        model: {
          ArmyDelivery: '',
          EMartDelivery: '',
          Supported: '',
          Incident: ''
        }
      },
      healthcareOperation: {
        submitting: false,
        fields: HEALTHCARE_OPERATION_FORM,
        model: {
          Sthc: '',
          Thc: '',
          Incident: ''
        }
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
        return this.user.userDepartment === DEPARTMENTS.AVIVATION;
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
      avivationManpowerFormSubmitText: function() {
        return this.avivationManpower.submitting ? 'Submitting...' : 'Submit';
      },
      avivationRedconFormSubmitText: function() {
        return this.avivationRedcon.submitting ? 'Submitting...' : 'Submit';
      },
      avivationOperationFormSubmitText: function() {
        return this.avivationOperation.submitting ? 'Submitting...' : 'Submit';
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
          data:
            'username=' +
            this.user.username +
            '&password=' +
            this.user.password +
            '&client_id=botbotclient&client_secret=botbotsecret&grant_type=password'
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
              message: 'Something went wrong. Please try again'
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
        self.avivationOperation.submitting = true;

        callApi({
          url: API + '/api/form/redcon',
          method: 'POST',
          data: this.avivationOperation.model
        })
          .then(function(resp) {
            self.avivationOperation.submitting = false;
            self.avivationOperation.model = resetModel(self.avivationOperation.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          })
          .catch(function(error) {
            self.avivationOperation.submitting = false;
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          });
      },
      doAvivationRedconSubmit: function() {
        var self = this;
        self.avivationRedcon.submitting = true;

        callApi({
          url: API + '/api/form/redcon',
          method: 'POST',
          data: this.avivationRedcon.model
        })
          .then(function(resp) {
            self.avivationRedcon.submitting = false;
            self.avivationRedcon.model = resetModel(self.avivationRedcon.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          })
          .catch(function(error) {
            self.avivationRedcon.submitting = false;
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          });
      },
      doAvivationManpowerSubmit: function() {
        var self = this;
        self.avivationManpower.submitting = true;

        callApi({
          url: API + '/api/form/mpcon',
          method: 'POST',
          data: this.avivationManpower.model
        })
          .then(function(resp) {
            self.avivationManpower.submitting = false;
            self.avivationManpower.model = resetModel(self.avivationManpower.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          })
          .catch(function(error) {
            self.avivationManpower.submitting = false;
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          });
      },
      doDefenceRedconSubmit: function() {
        var self = this;
        self.defenceRedcon.submitting = true;

        callApi({
          url: API + '/api/form/redcon',
          method: 'POST',
          data: this.defenceRedcon.model
        })
          .then(function(resp) {
            self.defenceRedcon.submitting = false;
            self.defenceRedcon.model = resetModel(self.defenceRedcon.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          })
          .catch(function(error) {
            self.defenceRedcon.submitting = false;
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          });
      },
      doDefenceManpowerSubmit: function() {
        var self = this;
        self.defenceManpower.submitting = true;

        callApi({
          url: API + '/api/form/mpcon',
          method: 'POST',
          data: this.defenceManpower.model
        })
          .then(function(resp) {
            self.defenceManpower.submitting = false;
            self.defenceManpower.model = resetModel(self.defenceManpower.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          })
          .catch(function(error) {
            self.defenceManpower.submitting = false;
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          });
      },
      doDefenceOperationSubmit: function() {
        var self = this;
        self.defenceOperation.submitting = true;

        callApi({
          url: API + '/api/form/mpcon',
          method: 'POST',
          data: this.defenceOperation.model
        })
          .then(function(resp) {
            self.defenceOperation.submitting = false;
            self.defenceOperation.model = resetModel(self.defenceOperation.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          })
          .catch(function(error) {
            self.defenceOperation.submitting = false;
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
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
          data: this.healthcareManpower.model
        })
          .then(function(resp) {
            self.healthcareManpower.submitting = false;
            self.healthcareManpower.model = resetModel(self.healthcareManpower.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          })
          .catch(function(error) {
            self.healthcareManpower.submitting = false;
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          });
      },
      doHealthcareOperationSubmit: function() {
        var self = this;
        self.healthcareOperation.submitting = true;

        callApi({
          url: API + '/api/form/mpcon',
          method: 'POST',
          data: this.healthcareOperation.model
        })
          .then(function(resp) {
            self.healthcareOperation.submitting = false;
            self.healthcareOperation.model = resetModel(self.healthcareOperation.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          })
          .catch(function(error) {
            self.healthcareOperation.submitting = false;
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          });
      },
      doPssOperationSubmit: function() {
        var self = this;
        self.pssOperation.submitting = true;

        callApi({
          url: API + '/api/form/mpcon',
          method: 'POST',
          data: this.pssOperation.model
        })
          .then(function(resp) {
            self.pssOperation.submitting = false;
            self.pssOperation.model = resetModel(self.pssOperation.model);
            self.notifications.push({ type: 'success', message: 'Submit form success' });
          })
          .catch(function(error) {
            self.pssOperation.submitting = false;
            self.notifications.push({
              type: 'error',
              message: 'Something went wrong. Please try again'
            });
          });
      },
      removeNotification: function(index) {
        this.notifications.splice(index, 1);
      }
    }
  });
})();
