(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "8bEk":
    /*!******************************************************!*\
      !*** ./src/app/shared/localData/tutorialImages.json ***!
      \******************************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, default */

    /***/
    function bEk(module) {
      module.exports = JSON.parse("[{\"name\":\"All your money in one place\",\"image\":\"assets/images/centre_openbanking.png\",\"data\":\"mmob gives you a snapshot of all your bank accounts, savings, investments and more\"},{\"name\":\"Track and manage your spending\",\"image\":\"assets/images/speed.png\",\"data\":\"easy to understand view of your incomings and outgoings so you can start to budget better\"},{\"name\":\"Keep your data safe and secure\",\"image\":\"assets/images/blocked.png\",\"data\":\"We use evolving best-in-class secutity protocols to keep your information safe\"},{\"name\":\"Access to your marketplace\",\"image\":\"assets/images/fruit.png\",\"data\":\"Access to the latest products at competitive prices in our growing market place\"},{\"name\":\"Notification settings\",\"image\":\"assets/images/hotel.png\",\"data\":\"Get instant notification on all your spending and product renewal reminders\"},{\"name\":\"Tailored Products\",\"image\":\"assets/images/handmade.png\",\"data\":\"Products selected to suit your needs and budgets\"}]");
      /***/
    },

    /***/
    "Tx//":
    /*!*****************************************!*\
      !*** ./src/app/layout/layout.module.ts ***!
      \*****************************************/

    /*! exports provided: LayoutModule */

    /***/
    function Tx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "/Lhg");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer/footer.component */
      "kVkw");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "MR0u");
      /* harmony import */


      var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main-content/main-content.component */
      "o/Qx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var LayoutModule = function LayoutModule() {
        _classCallCheck(this, LayoutModule);
      };

      LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LayoutModule
      });
      LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LayoutModule_Factory(t) {
          return new (t || LayoutModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__["MainContentComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__["MainContentComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__["MainContentComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__["MainContentComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Weih":
    /*!******************************************************!*\
      !*** ./src/app/shared/constant/storage-constants.ts ***!
      \******************************************************/

    /*! exports provided: StorageConstants */

    /***/
    function Weih(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageConstants", function () {
        return StorageConstants;
      });

      var StorageConstants = function StorageConstants() {
        _classCallCheck(this, StorageConstants);
      };

      StorageConstants.X_ACCESS_TOKEN = 'CognitoIdentityServiceProvider.1nrc8h2siugvjpeum0ggtj58ub.a6b76817-74a5-467b-8467-30c483b8e78c.accessToken';
      StorageConstants.X_EMAIL = 'X_EMAIL';
      /***/
    },

    /***/
    "c1mT":
    /*!********************************************************!*\
      !*** ./src/app/shared/validators/custom-validators.ts ***!
      \********************************************************/

    /*! exports provided: CustomValidators */

    /***/
    function c1mT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
        return CustomValidators;
      });

      var CustomValidators = /*#__PURE__*/function () {
        function CustomValidators() {
          _classCallCheck(this, CustomValidators);
        }

        _createClass(CustomValidators, null, [{
          key: "emailCustomValidation",
          value: function emailCustomValidation(c) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (c.value !== null && c.value !== '') {
              var numbers = /^[0-9]+$/;

              if (re.test(String(c.value).toLowerCase())) {
                return null;
              } else {
                return {
                  validateEmail: true
                };
              }
            } else {
              return null;
            }
          }
        }, {
          key: "passwordCustomValidation",
          value: function passwordCustomValidation(c) {
            var re = /(?=^.{8,100}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/;

            if (c.value !== null && c.value !== '') {
              var numbers = /^[0-9]+$/;

              if (re.test(String(c.value))) {
                return null;
              } else {
                return {
                  validatePassword: true
                };
              }
            } else {
              return null;
            }
          }
        }, {
          key: "patternValidator",
          value: function patternValidator(regex, error) {
            return function (control) {
              if (!control.value) {
                // if control is empty return no error
                return null;
              } // test the value of the control against the regexp supplied


              var valid = regex.test(control.value); // if true, return no error (no error), else return error passed in the second parameter

              return valid ? null : error;
            };
          }
        }]);

        return CustomValidators;
      }();
      /***/

    },

    /***/
    "cIZH":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/services/helper-services/common.service.ts ***!
      \*******************************************************************/

    /*! exports provided: CommonService */

    /***/
    function cIZH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _constant_storage_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../constant/storage-constants */
      "Weih");

      var CommonService = /*#__PURE__*/function () {
        function CommonService() {
          _classCallCheck(this, CommonService);

          // private storage = sessionStorage;
          this.storage = localStorage;
        }
        /**
         * This method is use for get Access Token from local storage data.
         */


        _createClass(CommonService, [{
          key: "getAccessToken",
          value: function getAccessToken() {
            return this.storage.getItem(_constant_storage_constants__WEBPACK_IMPORTED_MODULE_1__["StorageConstants"].X_ACCESS_TOKEN);
          }
          /**
           * This method is use for set Access Token to local storage data.
           * @param {data:any}
           */

        }, {
          key: "setAccessToken",
          value: function setAccessToken(data) {
            return this.storage.setItem(_constant_storage_constants__WEBPACK_IMPORTED_MODULE_1__["StorageConstants"].X_ACCESS_TOKEN, data);
          }
          /*Clear Local storage for logout*/

        }, {
          key: "clearLocalStorage",
          value: function clearLocalStorage() {
            this.storage.removeItem(_constant_storage_constants__WEBPACK_IMPORTED_MODULE_1__["StorageConstants"].X_ACCESS_TOKEN);
          }
        }, {
          key: "setEmailAddress",
          value: function setEmailAddress(email) {
            this.storage.setItem(_constant_storage_constants__WEBPACK_IMPORTED_MODULE_1__["StorageConstants"].X_EMAIL, email);
          }
        }, {
          key: "getEmailAddress",
          value: function getEmailAddress() {
            return this.storage.getItem(_constant_storage_constants__WEBPACK_IMPORTED_MODULE_1__["StorageConstants"].X_EMAIL);
          }
        }]);

        return CommonService;
      }();

      CommonService.ɵfac = function CommonService_Factory(t) {
        return new (t || CommonService)();
      };

      CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CommonService,
        factory: CommonService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pzXv":
    /*!************************************************!*\
      !*** ./src/app/shared/localData/bankData.json ***!
      \************************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */

    /***/
    function pzXv(module) {
      module.exports = JSON.parse("[{\"name\":\"Natwest\",\"image\":\"assets/images/natwest-icon.png\"},{\"name\":\"HSBC\",\"image\":\"assets/images/hsbc-icon.png\"},{\"name\":\"Halifax\",\"image\":\"assets/images/halifax-icon.png\"},{\"name\":\"Santender\",\"image\":\"assets/images/santander-icon.png\"},{\"name\":\"Lloyds\",\"image\":\"assets/images/lloyd-icon.png\"},{\"name\":\"Royal Bank of Scotland\",\"image\":\"assets/images/royal-bank-icon.png\"},{\"name\":\"Barclays\",\"image\":\"assets/images/barclays-icon.png\"},{\"name\":\"Starling Bank\",\"image\":\"assets/images/starling-icon.png\"},{\"name\":\"Revolut\",\"image\":\"assets/images/revolut-icon.png\"},{\"name\":\"Monzo\",\"image\":\"assets/images/monzo-icon.png\"},{\"name\":\"CIMB Bank\",\"image\":\"assets/images/cimb-icon.png\"},{\"name\":\"TSB\",\"image\":\"assets/images/tsb-icon.png\"}]");
      /***/
    },

    /***/
    "q+kw":
    /*!****************************************************!*\
      !*** ./src/app/service/fields-validate.service.ts ***!
      \****************************************************/

    /*! exports provided: FieldsValidateService */

    /***/
    function qKw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldsValidateService", function () {
        return FieldsValidateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var FieldsValidateService = /*#__PURE__*/function () {
        /**
         * Constructor
         */
        function FieldsValidateService() {
          _classCallCheck(this, FieldsValidateService);
        }
        /**
        * It Validate all the fields validations one by one and will display the validation message.
        */


        _createClass(FieldsValidateService, [{
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                if (control.invalid) {
                  control.markAsDirty({
                    onlySelf: true
                  });
                }
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]) {
                Object.keys(control.controls).forEach(function (subFields) {
                  var subcontrol = control.controls[subFields];

                  if (subcontrol instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                    _this.validateAllFormFields(subcontrol);
                  }
                });
              }
            });
          }
        }]);

        return FieldsValidateService;
      }();

      FieldsValidateService.ɵfac = function FieldsValidateService_Factory(t) {
        return new (t || FieldsValidateService)();
      };

      FieldsValidateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FieldsValidateService,
        factory: FieldsValidateService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldsValidateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "qwTe":
    /*!*****************************************************!*\
      !*** ./src/app/core/services/local-data.service.ts ***!
      \*****************************************************/

    /*! exports provided: LocalDataService */

    /***/
    function qwTe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalDataService", function () {
        return LocalDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_localData_tutorialImages_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/localData/tutorialImages.json */
      "8bEk");

      var _shared_localData_tutorialImages_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../shared/localData/tutorialImages.json */
      "8bEk", 1);
      /* harmony import */


      var _shared_localData_bankData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/localData/bankData.json */
      "pzXv");

      var _shared_localData_bankData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../shared/localData/bankData.json */
      "pzXv", 1);

      var LocalDataService = /*#__PURE__*/function () {
        function LocalDataService() {
          _classCallCheck(this, LocalDataService);

          this.images = [];
          this.allBanks = [];
        } // this function is use to get all images of tutorial page


        _createClass(LocalDataService, [{
          key: "getTutorialImages",
          value: function getTutorialImages() {
            this.images = _shared_localData_tutorialImages_json__WEBPACK_IMPORTED_MODULE_1__;
            return this.images;
          } // this function is use to get all banks

        }, {
          key: "getALlBanks",
          value: function getALlBanks() {
            this.allBanks = _shared_localData_bankData_json__WEBPACK_IMPORTED_MODULE_2__;
            return this.allBanks;
          }
        }]);

        return LocalDataService;
      }();

      LocalDataService.ɵfac = function LocalDataService_Factory(t) {
        return new (t || LocalDataService)();
      };

      LocalDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalDataService,
        factory: LocalDataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalDataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map