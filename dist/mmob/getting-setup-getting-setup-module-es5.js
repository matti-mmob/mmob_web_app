(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getting-setup-getting-setup-module"], {
    /***/
    "0oFp":
    /*!******************************************************!*\
      !*** ./src/app/getting-setup/name/name.component.ts ***!
      \******************************************************/

    /*! exports provided: NameComponent */

    /***/
    function oFp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NameComponent", function () {
        return NameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/constant/navigation-url.constant */
      "BE8i");
      /* harmony import */


      var src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/pipes/assets-path.pipe */
      "VrQ/");
      /* harmony import */


      var src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/fields-validate.service */
      "q+kw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/show-errors/show-errors.component */
      "yjpJ");

      function NameComponent_i_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "assetsPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "images/tick-icon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var NameComponent = /*#__PURE__*/function () {
        function NameComponent(assetsPipe, formBuilder, fieldsValidateService, route) {
          _classCallCheck(this, NameComponent);

          this.assetsPipe = assetsPipe;
          this.formBuilder = formBuilder;
          this.fieldsValidateService = fieldsValidateService;
          this.route = route; //Navigation Url Constanst

          this.navigationUrl = src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__["NavigationUrl"];
        }

        _createClass(NameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
          /**
           *  This function will used to Prepare Form Fields.
           */

        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.nameForm = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          } //this function validate form and redirect to next step

        }, {
          key: "onNext",
          value: function onNext() {
            if (this.nameForm.invalid) {
              return this.fieldsValidateService.validateAllFormFields(this.nameForm);
            } else {
              this.route.navigate(['/getting-setup/email']);
            }
          }
        }]);

        return NameComponent;
      }();

      NameComponent.ɵfac = function NameComponent_Factory(t) {
        return new (t || NameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_4__["FieldsValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      NameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NameComponent,
        selectors: [["app-name"]],
        decls: 16,
        vars: 6,
        consts: [[1, "align-center", "setup-section"], ["alt", "pass-img", 3, "src"], [1, "setup-box"], [3, "formGroup"], [1, "form-group"], [4, "ngIf"], ["formControlName", "name", "type", "text", 1, "form-control"], [3, "control"], ["href", "#", "type", "button", "value", "Next", 1, "next-btn", 3, "click"], ["alt", "tick-icon", 3, "src"]],
        template: function NameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What's your name?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "This can be your real name, preferred name, nick name or alias- it doesn't need to match your ID.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NameComponent_i_12_Template, 3, 3, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-show-errors", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NameComponent_Template_input_click_15_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "images/pass.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.nameForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nameForm.controls.name.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.nameForm.controls.name);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_7__["ShowErrorsComponent"]],
        pipes: [src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldHRpbmctc2V0dXAvbmFtZS9uYW1lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NameComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-name',
            templateUrl: './name.component.html',
            styleUrls: ['./name.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_4__["FieldsValidateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5fks":
    /*!**********************************************************!*\
      !*** ./src/app/getting-setup/mobile/mobile.component.ts ***!
      \**********************************************************/

    /*! exports provided: MobileComponent */

    /***/
    function fks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MobileComponent", function () {
        return MobileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/constant/navigation-url.constant */
      "BE8i");
      /* harmony import */


      var src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/pipes/assets-path.pipe */
      "VrQ/");
      /* harmony import */


      var src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/fields-validate.service */
      "q+kw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/show-errors/show-errors.component */
      "yjpJ");

      var MobileComponent = /*#__PURE__*/function () {
        function MobileComponent(assetsPipe, formBuilder, fieldsValidateService, route) {
          _classCallCheck(this, MobileComponent);

          this.assetsPipe = assetsPipe;
          this.formBuilder = formBuilder;
          this.fieldsValidateService = fieldsValidateService;
          this.route = route; //Navigation Url Constanst

          this.navigationUrl = src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__["NavigationUrl"];
        }

        _createClass(MobileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
          /**
           *  This function will used to Prepare Form Fields.
           */

        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.mobileForm = this.formBuilder.group({
              mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          } //this function validate form and redirect to next step

        }, {
          key: "onNext",
          value: function onNext() {
            if (this.mobileForm.invalid) {
              return this.fieldsValidateService.validateAllFormFields(this.mobileForm);
            } else {
              this.route.navigate(['/getting-setup/two-factor-authentication']);
            }
          }
        }]);

        return MobileComponent;
      }();

      MobileComponent.ɵfac = function MobileComponent_Factory(t) {
        return new (t || MobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_4__["FieldsValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      MobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MobileComponent,
        selectors: [["app-mobile"]],
        decls: 17,
        vars: 5,
        consts: [[1, "align-center", "setup-section"], ["alt", "kyc-img", 3, "src"], [1, "setup-box"], [3, "formGroup"], [1, "form-group"], ["formControlName", "mobile", "type", "text", 1, "form-control"], [3, "control"], ["type", "button", "value", "Confirm", 1, "next-btn", 3, "click"]],
        template: function MobileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter your Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please enter your phone number for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "two factor authentication.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-show-errors", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_Template_input_click_16_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "images/kyc.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mobileForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.mobileForm.controls.mobile);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_6__["ShowErrorsComponent"]],
        pipes: [src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldHRpbmctc2V0dXAvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mobile',
            templateUrl: './mobile.component.html',
            styleUrls: ['./mobile.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_4__["FieldsValidateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OCiz":
    /*!*******************************************************!*\
      !*** ./src/app/getting-setup/getting-setup.module.ts ***!
      \*******************************************************/

    /*! exports provided: GettingSetupModule */

    /***/
    function OCiz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GettingSetupModule", function () {
        return GettingSetupModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _getting_setup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getting-setup-routing.module */
      "Qn7h");
      /* harmony import */


      var _name_name_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./name/name.component */
      "0oFp");
      /* harmony import */


      var _email_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./email/email.component */
      "tBqg");
      /* harmony import */


      var _password_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./password/password.component */
      "P73n");
      /* harmony import */


      var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mobile/mobile.component */
      "5fks");
      /* harmony import */


      var _two_factor_authentication_two_factor_authentication_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./two-factor-authentication/two-factor-authentication.component */
      "ntEf");
      /* harmony import */


      var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./terms-and-conditions/terms-and-conditions.component */
      "g4m8");
      /* harmony import */


      var _banks_banks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./banks/banks.component */
      "q1BD");
      /* harmony import */


      var _request_bank_data_request_bank_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./request-bank-data/request-bank-data.component */
      "k8q1");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");

      var GettingSetupModule = function GettingSetupModule() {
        _classCallCheck(this, GettingSetupModule);
      };

      GettingSetupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GettingSetupModule
      });
      GettingSetupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GettingSetupModule_Factory(t) {
          return new (t || GettingSetupModule)();
        },
        imports: [[_getting_setup_routing_module__WEBPACK_IMPORTED_MODULE_1__["GettingSetupRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GettingSetupModule, {
          declarations: [_name_name_component__WEBPACK_IMPORTED_MODULE_2__["NameComponent"], _email_email_component__WEBPACK_IMPORTED_MODULE_3__["EmailComponent"], _password_password_component__WEBPACK_IMPORTED_MODULE_4__["PasswordComponent"], _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_5__["MobileComponent"], _two_factor_authentication_two_factor_authentication_component__WEBPACK_IMPORTED_MODULE_6__["TwoFactorAuthenticationComponent"], _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_7__["TermsAndConditionsComponent"], _banks_banks_component__WEBPACK_IMPORTED_MODULE_8__["BanksComponent"], _request_bank_data_request_bank_data_component__WEBPACK_IMPORTED_MODULE_9__["RequestBankDataComponent"]],
          imports: [_getting_setup_routing_module__WEBPACK_IMPORTED_MODULE_1__["GettingSetupRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GettingSetupModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_name_name_component__WEBPACK_IMPORTED_MODULE_2__["NameComponent"], _email_email_component__WEBPACK_IMPORTED_MODULE_3__["EmailComponent"], _password_password_component__WEBPACK_IMPORTED_MODULE_4__["PasswordComponent"], _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_5__["MobileComponent"], _two_factor_authentication_two_factor_authentication_component__WEBPACK_IMPORTED_MODULE_6__["TwoFactorAuthenticationComponent"], _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_7__["TermsAndConditionsComponent"], _banks_banks_component__WEBPACK_IMPORTED_MODULE_8__["BanksComponent"], _request_bank_data_request_bank_data_component__WEBPACK_IMPORTED_MODULE_9__["RequestBankDataComponent"]],
            imports: [_getting_setup_routing_module__WEBPACK_IMPORTED_MODULE_1__["GettingSetupRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "P73n":
    /*!**************************************************************!*\
      !*** ./src/app/getting-setup/password/password.component.ts ***!
      \**************************************************************/

    /*! exports provided: PasswordComponent */

    /***/
    function P73n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordComponent", function () {
        return PasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/constant/navigation-url.constant */
      "BE8i");
      /* harmony import */


      var src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/validators/custom-validators */
      "c1mT");
      /* harmony import */


      var src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/pipes/assets-path.pipe */
      "VrQ/");
      /* harmony import */


      var src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/fields-validate.service */
      "q+kw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/show-errors/show-errors.component */
      "yjpJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var PasswordComponent = /*#__PURE__*/function () {
        function PasswordComponent(assetsPipe, formBuilder, fieldsValidateService, route) {
          _classCallCheck(this, PasswordComponent);

          this.assetsPipe = assetsPipe;
          this.formBuilder = formBuilder;
          this.fieldsValidateService = fieldsValidateService;
          this.route = route; //Navigation Url Constanst

          this.navigationUrl = src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__["NavigationUrl"];
        }

        _createClass(PasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
          /**
           *  This function will used to Prepare Form Fields.
           */

        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.passwordForm = this.formBuilder.group({
              password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, // check whether the entered password has a number
              src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].patternValidator(/\d/, {
                hasNumber: true
              }), // check whether the entered password has upper case letter
              src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].patternValidator(/[A-Z]/, {
                hasCapitalCase: true
              }), // check whether the entered password has a lower case letter
              src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].patternValidator(/[a-z]/, {
                hasSmallCase: true
              }), // check whether the entered password has a special character
              src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
                hasSpecialCharacters: true
              }), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])]
            });
          } //this function validate form and redirect to next step

        }, {
          key: "onNext",
          value: function onNext() {
            if (this.passwordForm.invalid) {
              return this.fieldsValidateService.validateAllFormFields(this.passwordForm);
            } else {
              this.route.navigate(['/getting-setup/mobile']);
            }
          }
        }]);

        return PasswordComponent;
      }();

      PasswordComponent.ɵfac = function PasswordComponent_Factory(t) {
        return new (t || PasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_4__["AssetsPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_5__["FieldsValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      PasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PasswordComponent,
        selectors: [["app-password"]],
        decls: 35,
        vars: 24,
        consts: [[1, "align-center", "setup-section"], ["alt", "pass-img", 3, "src"], [1, "setup-box"], [3, "formGroup"], [1, "form-group"], ["alt", "eye-icon", 3, "src"], ["formControlName", "password", "type", "password", 1, "form-control"], [3, "control"], [3, "ngClass"], [3, "src"], ["type", "button", "value", "Continue", 1, "next-btn", 3, "click"]],
        template: function PasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Choose a secure password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-show-errors", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Your password should include at least:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 8 character ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 1 number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 1 capital letter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 1 special character (e.g. $@&%) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordComponent_Template_input_click_34_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, "images/access.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passwordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, "images/eye-icon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.passwordForm.controls.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.passwordForm.controls["password"].hasError("required") || ctx.passwordForm.controls["password"].hasError("minlength") ? "" : "text-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, "images/tick-bullet.jpg"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.passwordForm.controls["password"].hasError("required") || ctx.passwordForm.controls["password"].hasError("hasNumber") ? "" : "text-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 18, "images/tick-bullet.jpg"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.passwordForm.controls["password"].hasError("required") || ctx.passwordForm.controls["password"].hasError("hasCapitalCase") ? "" : "text-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 20, "images/tick-bullet.jpg"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.passwordForm.controls["password"].hasError("required") || ctx.passwordForm.controls["password"].hasError("hasSpecialCharacters") ? "" : "text-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 22, "images/tick-bullet.jpg"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_7__["ShowErrorsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
        pipes: [src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_4__["AssetsPathPipe"]],
        styles: [".setup-box[_ngcontent-%COMP%] {\r\n    margin: 0px 0 0;\r\n}\r\n.setup-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n}\r\n.setup-box[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 12px;\r\n}\r\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 25px !important;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 0rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zZXR1cC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2dldHRpbmctc2V0dXAvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR1cC1ib3gge1xyXG4gICAgbWFyZ2luOiAwcHggMCAwO1xyXG59XHJcbi5zZXR1cC1ib3ggZm9ybSB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4uc2V0dXAtYm94IC5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZm9ybS1ncm91cCBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAxMnB4O1xyXG59XHJcbi5mb3JtLWdyb3VwIGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-password',
            templateUrl: './password.component.html',
            styleUrls: ['./password.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_4__["AssetsPathPipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_5__["FieldsValidateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Qn7h":
    /*!***************************************************************!*\
      !*** ./src/app/getting-setup/getting-setup-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: GettingSetupRoutingModule */

    /***/
    function Qn7h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GettingSetupRoutingModule", function () {
        return GettingSetupRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _name_name_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./name/name.component */
      "0oFp");
      /* harmony import */


      var _email_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./email/email.component */
      "tBqg");
      /* harmony import */


      var src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/constant/navigation-url.constant */
      "BE8i");
      /* harmony import */


      var _password_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./password/password.component */
      "P73n");
      /* harmony import */


      var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mobile/mobile.component */
      "5fks");
      /* harmony import */


      var _two_factor_authentication_two_factor_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./two-factor-authentication/two-factor-authentication.component */
      "ntEf");
      /* harmony import */


      var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./terms-and-conditions/terms-and-conditions.component */
      "g4m8");
      /* harmony import */


      var _banks_banks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./banks/banks.component */
      "q1BD");
      /* harmony import */


      var _request_bank_data_request_bank_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./request-bank-data/request-bank-data.component */
      "k8q1");

      var routes = [{
        path: '',
        component: _name_name_component__WEBPACK_IMPORTED_MODULE_2__["NameComponent"]
      }, {
        path: src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_4__["NavigationUrl"].GETTING_SETUP_EMAIL,
        component: _email_email_component__WEBPACK_IMPORTED_MODULE_3__["EmailComponent"]
      }, {
        path: src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_4__["NavigationUrl"].GETTING_SETUP_PASSWORD,
        component: _password_password_component__WEBPACK_IMPORTED_MODULE_5__["PasswordComponent"]
      }, {
        path: src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_4__["NavigationUrl"].GETTING_SETUP_MOBILE,
        component: _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_6__["MobileComponent"]
      }, {
        path: src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_4__["NavigationUrl"].GETTING_SETUP_TWO_FACTOR_AUTHENTICATION,
        component: _two_factor_authentication_two_factor_authentication_component__WEBPACK_IMPORTED_MODULE_7__["TwoFactorAuthenticationComponent"]
      }, {
        path: src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_4__["NavigationUrl"].GETTING_SETUP_TREMS_AND_CONDITION,
        component: _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_8__["TermsAndConditionsComponent"]
      }, {
        path: src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_4__["NavigationUrl"].GETTING_SETUP_BANKS,
        component: _banks_banks_component__WEBPACK_IMPORTED_MODULE_9__["BanksComponent"]
      }, {
        path: src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_4__["NavigationUrl"].GETTING_SETUP_REQUEST_BANK_DATA,
        component: _request_bank_data_request_bank_data_component__WEBPACK_IMPORTED_MODULE_10__["RequestBankDataComponent"]
      }];

      var GettingSetupRoutingModule = function GettingSetupRoutingModule() {
        _classCallCheck(this, GettingSetupRoutingModule);
      };

      GettingSetupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GettingSetupRoutingModule
      });
      GettingSetupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GettingSetupRoutingModule_Factory(t) {
          return new (t || GettingSetupRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GettingSetupRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GettingSetupRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "g4m8":
    /*!**************************************************************************************!*\
      !*** ./src/app/getting-setup/terms-and-conditions/terms-and-conditions.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: TermsAndConditionsComponent */

    /***/
    function g4m8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function () {
        return TermsAndConditionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/constant/navigation-url.constant */
      "BE8i");
      /* harmony import */


      var src_app_shared_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/terms-conditions/terms-conditions.component */
      "fRyE");
      /* harmony import */


      var src_app_shared_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/privacy/privacy.component */
      "NPsI");
      /* harmony import */


      var src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/pipes/assets-path.pipe */
      "VrQ/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/fields-validate.service */
      "q+kw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/show-errors/show-errors.component */
      "yjpJ");

      var TermsAndConditionsComponent = /*#__PURE__*/function () {
        function TermsAndConditionsComponent(assetsPipe, formBuilder, fieldsValidateService, route, modalService) {
          _classCallCheck(this, TermsAndConditionsComponent);

          this.assetsPipe = assetsPipe;
          this.formBuilder = formBuilder;
          this.fieldsValidateService = fieldsValidateService;
          this.route = route;
          this.modalService = modalService; //Navigation Url Constants

          this.navigationUrl = src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_1__["NavigationUrl"];
        }

        _createClass(TermsAndConditionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
          /**
           *  This function will used to Prepare Form Fields.
           */

        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.termConditionForm = this.formBuilder.group({
              age: [''],
              termAndCondition: ['']
            });
          } //this function validate form and redirect to next step

        }, {
          key: "onNext",
          value: function onNext() {
            return this.modalService.open(src_app_shared_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyComponent"], {
              backdrop: 'static',
              keyboard: false,
              scrollable: true
            });
          }
        }, {
          key: "showPopUp",
          value: function showPopUp() {
            return this.modalService.open(src_app_shared_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_2__["TermsConditionsComponent"], {
              backdrop: 'static',
              keyboard: false,
              scrollable: true
            });
          }
        }, {
          key: "onNextprivacy",
          value: function onNextprivacy() {
            this.showPopUp();
          }
        }, {
          key: "continue",
          value: function _continue() {
            if (this.termConditionForm.invalid) {
              alert("Both check boxes are required");
              return this.fieldsValidateService.validateAllFormFields(this.termConditionForm);
            } else {
              this.route.navigate(['/getting-setup/banks']);
            }
          }
        }]);

        return TermsAndConditionsComponent;
      }();

      TermsAndConditionsComponent.ɵfac = function TermsAndConditionsComponent_Factory(t) {
        return new (t || TermsAndConditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_4__["AssetsPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_6__["FieldsValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]));
      };

      TermsAndConditionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TermsAndConditionsComponent,
        selectors: [["app-terms-and-conditions"]],
        decls: 50,
        vars: 15,
        consts: [[1, "align-center", "setup-section", "termcond"], ["alt", "test-img", 3, "src"], [3, "formGroup"], [1, "setup-box"], [1, "terms-points"], [3, "src"], [1, "read-doc"], [3, "click"], [1, "check-box"], ["formControlName", "age", "id", "html", "type", "checkbox"], ["for", "html"], [3, "control"], ["formControlName", "termAndCondition", "id", "css", "type", "checkbox"], ["for", "css"], ["type", "button", "value", "Continue", 1, "next-btn", 3, "click"]],
        template: function TermsAndConditionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Terms and Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "mmob collects your data to provide you with a more personal way to improve your finances- more bills to investments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "We only share your data with people you ask us to");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "You are protected by the FSCS(Financial Services Compensation Scheme)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "You can change your sharing preferences at any time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsAndConditionsComponent_Template_a_click_32_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Read full T&Cs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsAndConditionsComponent_Template_a_click_35_listener() {
              return ctx.onNextprivacy();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Read full Privacy policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "I am over 18 years old");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-show-errors", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Accept T&Cs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-show-errors", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsAndConditionsComponent_Template_input_click_49_listener() {
              return ctx["continue"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "images/test.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.termConditionForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "images/share-icon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 11, "images/protection-icon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 13, "images/change-preference-icon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.termConditionForm.controls.age);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.termConditionForm.controls.termAndCondition);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_9__["ShowErrorsComponent"]],
        pipes: [src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_4__["AssetsPathPipe"]],
        styles: [".check-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    height: initial;\r\n    width: initial;\r\n    margin-bottom: 0;\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.check-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.check-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    -webkit-appearance: none;\r\n    background-color: #fff;\r\n    border: 2px solid #fff;\r\n    padding: 10px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    right: 0;\r\n}\r\n\r\n.check-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 9px;\r\n    width: 5px;\r\n    height: 17px;\r\n    border: solid #3bb54a;\r\n    border-width: 0 2px 2px 0;\r\n    transform: rotate(40deg);\r\n    -webkit-transform: rotate(40deg);\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.check-box[_ngcontent-%COMP%] {\r\n    background: #b3b3dc;\r\n    text-align: left;\r\n    padding: 12px 20px 12px 30px;\r\n\tposition:relative;\r\n}\r\n\r\n.check-box[_ngcontent-%COMP%]    + .check-box[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #8f8fb0;\r\n}\r\n\r\n.error-list[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 27px;\r\n    bottom: -3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zZXR1cC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtDQUMvQixpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nZXR0aW5nLXNldHVwL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2stYm94IGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICB3aWR0aDogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2hlY2stYm94IGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2hlY2stYm94IGxhYmVsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmNoZWNrLWJveCBpbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgcmlnaHQ6IDlweDtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkICMzYmI1NGE7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jaGVjay1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2IzYjNkYztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCAzMHB4O1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2hlY2stYm94ICsgLmNoZWNrLWJveCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzhmOGZiMDtcclxufVxyXG4uZXJyb3ItbGlzdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyN3B4O1xyXG4gICAgYm90dG9tOiAtM3B4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsAndConditionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-terms-and-conditions',
            templateUrl: './terms-and-conditions.component.html',
            styleUrls: ['./terms-and-conditions.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_4__["AssetsPathPipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
          }, {
            type: src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_6__["FieldsValidateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k8q1":
    /*!********************************************************************************!*\
      !*** ./src/app/getting-setup/request-bank-data/request-bank-data.component.ts ***!
      \********************************************************************************/

    /*! exports provided: RequestBankDataComponent */

    /***/
    function k8q1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestBankDataComponent", function () {
        return RequestBankDataComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/constant/navigation-url.constant */
      "BE8i");
      /* harmony import */


      var src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/constant/constant */
      "8pUG");
      /* harmony import */


      var src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/pipes/assets-path.pipe */
      "VrQ/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/fields-validate.service */
      "q+kw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var RequestBankDataComponent = /*#__PURE__*/function () {
        function RequestBankDataComponent(assetsPipe, formBuilder, fieldsValidateService, route) {
          _classCallCheck(this, RequestBankDataComponent);

          this.assetsPipe = assetsPipe;
          this.formBuilder = formBuilder;
          this.fieldsValidateService = fieldsValidateService;
          this.route = route; //Navigation Url Constanst

          this.navigationUrl = src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_1__["NavigationUrl"];
          this.selectedBank = localStorage.getItem(src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].BANK_NAME);
        }

        _createClass(RequestBankDataComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
          /**
           *  This function will used to Prepare Form Fields.
           */

        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.requestBankDataForm = this.formBuilder.group({// age: ['', Validators.required],
              // termAndCondition: ['', Validators.required],
            });
          } //this function validate form and redirect to next step

        }, {
          key: "onDecline",
          value: function onDecline() {
            this.route.navigate(['/getting-setup/banks']);
            localStorage.removeItem(src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].BANK_NAME);
          }
        }, {
          key: "onConfirm",
          value: function onConfirm() {
            this.route.navigate(['login']);
          }
        }]);

        return RequestBankDataComponent;
      }();

      RequestBankDataComponent.ɵfac = function RequestBankDataComponent_Factory(t) {
        return new (t || RequestBankDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_5__["FieldsValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      RequestBankDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RequestBankDataComponent,
        selectors: [["app-request-bank-data"]],
        decls: 104,
        vars: 5,
        consts: [[1, "main"], [1, "wrapper"], [3, "formGroup"], [1, "data-request"], ["alt", "presentation image", 3, "src"], [1, "consent-boxes"], ["id", "accordionExample", 1, "accordion"], [1, "card"], [1, "card-header"], [1, "mb-0"], ["aria-controls", "collapseOne", "aria-expanded", "true", "data-target", "#collapseOne", "data-toggle", "collapse", "type", "button", 1, "btn", "btn-link", "btn-block", "text-left", "collapsed"], ["aria-labelledby", "headingOne", "data-parent", "#accordionExample", "id", "collapseOne", 1, "collapse"], [1, "card-body"], ["aria-controls", "collapseTwo", "aria-expanded", "true", "data-target", "#collapseTwo", "data-toggle", "collapse", "type", "button", 1, "btn", "btn-link", "btn-block", "text-left", "collapsed"], ["aria-labelledby", "headingTwo", "data-parent", "#accordionExample", "id", "collapseTwo", 1, "collapse"], ["aria-controls", "collapseThree", "aria-expanded", "true", "data-target", "#collapseThree", "data-toggle", "collapse", "type", "button", 1, "btn", "btn-link", "btn-block", "text-left", "collapsed"], ["aria-labelledby", "headingThree", "data-parent", "#accordionExample", "id", "collapseThree", 1, "collapse"], ["aria-controls", "collapseFour", "aria-expanded", "true", "data-target", "#collapseFour", "data-toggle", "collapse", "type", "button", 1, "btn", "btn-link", "btn-block", "text-left", "collapsed"], ["aria-labelledby", "headingFour", "data-parent", "#accordionExample", "id", "collapseFour", 1, "collapse"], [1, "row", "justify-content-around", "text-center"], [1, "col-md-4", "my-3"], [1, "col-12", "my-3"], [1, "col-10", "col-md-4"], ["data-target", "#allow", "data-toggle", "modal", "type", "button", 1, "btn", "confirm-btn", 3, "click"], ["type", "button", 1, "btn", "decline-btn", 3, "click"]],
        template: function RequestBankDataComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "mmob will request the following information from your bank:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Your Account Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u2212 Any another names by which you refer to this account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u2212 Your account balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u2212 Your account name, number and sort-code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Your Regular Payments ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u2212 Your standing orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u2212 Details of your standing orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u2212 Recurring and future dated payments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u2212 Details of recurring and future dated payments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u2212 Payee agreements you have set up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u2212 Details of payee agreements you have set up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Your Transaction Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u2212 Your transactions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u2212 Details of your transactions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Your Contact Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u2212 The full legal name(s) of account holder(s)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u2212 Address(es), telephone number(s) and email address(es)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Our Access");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "mmob will have access to this data for 90 days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "mmob will access this data on a recurring basis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "What We Will Do");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "mmob will access 12 months worth of historical data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "mmob will use this data to provide you a more personalisaed service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "information accessed by mmob from your account may be shared with third party providers on the market place.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "mmob will always ask for your prior consent before sharing data with a third party on the market place");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestBankDataComponent_Template_button_click_99_listener() {
              return ctx.onConfirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Confirm ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestBankDataComponent_Template_button_click_102_listener() {
              return ctx.onDecline();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Decline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.requestBankDataForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "images/presentation.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Request data from ", ctx.selectedBank, "");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]],
        pipes: [src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]],
        styles: [".consent-boxes[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 20px auto 0;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]   .spent-amount-breakdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #eceeef;\r\n}\r\n\r\n.spent-amount-breakdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    margin: auto;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 4px;\r\n    border-radius: 0 !important;\r\n    background: #f6f6f6 !important;\r\n    border: 1px solid #ededed !important;\r\n    box-shadow: none !important;\r\n    cursor: pointer;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    color: #000;\r\n    outline: none !important;\r\n    border: 0;\r\n    box-shadow: none !important;\r\n    cursor: pointer;\r\n    position: relative\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\r\n    margin: 0 13px 0 0;\r\n    width: 40px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    margin-bottom: 5px;\r\n    border: 0;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n    padding: 12px 6px;\r\n    border: 0;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    border-bottom: 1px solid #eceeef;\r\n}\r\n\r\n\r\n\r\n.data-request[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 20px 0;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:first-of-type {\r\n    border-right: 10px solid #0000e0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-of-type(2) {\r\n    border-right: 10px solid #00008b;\r\n    border-radius: 5px;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-of-type(3) {\r\n    border-right: 10px solid #9400d3;\r\n    border-radius: 5px;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-of-type {\r\n    border-right: 10px solid #ea4c89;\r\n    border-radius: 5px;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    padding: 10px 10px 10px 30px;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\r\n    padding: 20px 30px;\r\n    background: #f6f6f6;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-size: 14px;\r\n    margin: 10px 0px;\r\n    color: #949191;\r\n    font-weight: 300;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\r\n    background: #00008b;\r\n    color: white;\r\n    padding: 15px;\r\n    width: 100%;\r\n    margin: 10px auto;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%]:hover {\r\n    background: #b5b5ff;\r\n    color: #3e295f;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .decline-btn[_ngcontent-%COMP%] {\r\n    background: #e5e5e5;\r\n    color: #00008b;\r\n    padding: 15px;\r\n    width: 100%;\r\n    margin: 10px auto;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.data-request[_ngcontent-%COMP%]   .decline-btn[_ngcontent-%COMP%]:hover {\r\n    background: #fc0d1b;\r\n    color: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zZXR1cC9yZXF1ZXN0LWJhbmstZGF0YS9yZXF1ZXN0LWJhbmstZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDOztBQUNBLHVIQUF1SDs7QUFFdkg7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2dldHRpbmctc2V0dXAvcmVxdWVzdC1iYW5rLWRhdGEvcmVxdWVzdC1iYW5rLWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25zZW50LWJveGVzIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IC5zcGVudC1hbW91bnQtYnJlYWtkb3duIHRhYmxlIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlZWVmO1xyXG59XHJcblxyXG4uc3BlbnQtYW1vdW50LWJyZWFrZG93biB0YWJsZSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBmaWd1cmUge1xyXG4gICAgbWFyZ2luOiAwIDEzcHggMCAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB0YWJsZSB0ciB7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkgdGFibGUgdGgsXHJcbi5jYXJkLWJvZHkgdGFibGUgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDEycHggNnB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHRhYmxlIHRoZWFkIHRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWVlZjtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBkYXRhIHJlcXVlc3QgcGVybWlzc2lvbiBwYWdlIGNzcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5kYXRhLXJlcXVlc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmRhdGEtcmVxdWVzdCAuY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5kYXRhLXJlcXVlc3QgLmNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzAwMDBlMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmRhdGEtcmVxdWVzdCAuY2FyZDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzAwMDA4YjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmRhdGEtcmVxdWVzdCAuY2FyZDpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzk0MDBkMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmRhdGEtcmVxdWVzdCAuY2FyZDpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNlYTRjODk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5kYXRhLXJlcXVlc3QgLmNhcmQgLmNhcmQtaGVhZGVyIC5idG4ge1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcclxufVxyXG5cclxuLmRhdGEtcmVxdWVzdCAuY2FyZCAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbi5kYXRhLXJlcXVlc3QgLmNhcmQgLmNhcmQtYm9keSB1bCBsaSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGNvbG9yOiAjOTQ5MTkxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmRhdGEtcmVxdWVzdCAucm93IHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZGF0YS1yZXF1ZXN0IC5jb25maXJtLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDhiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmRhdGEtcmVxdWVzdCAuY29uZmlybS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2I1YjVmZjtcclxuICAgIGNvbG9yOiAjM2UyOTVmO1xyXG59XHJcblxyXG4uZGF0YS1yZXF1ZXN0IC5kZWNsaW5lLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gICAgY29sb3I6ICMwMDAwOGI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRhdGEtcmVxdWVzdCAuZGVjbGluZS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZjMGQxYjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestBankDataComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-request-bank-data',
            templateUrl: './request-bank-data.component.html',
            styleUrls: ['./request-bank-data.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_5__["FieldsValidateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ntEf":
    /*!************************************************************************************************!*\
      !*** ./src/app/getting-setup/two-factor-authentication/two-factor-authentication.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: TwoFactorAuthenticationComponent */

    /***/
    function ntEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwoFactorAuthenticationComponent", function () {
        return TwoFactorAuthenticationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/constant/navigation-url.constant */
      "BE8i");
      /* harmony import */


      var src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/pipes/assets-path.pipe */
      "VrQ/");
      /* harmony import */


      var src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/fields-validate.service */
      "q+kw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/show-errors/show-errors.component */
      "yjpJ");

      var TwoFactorAuthenticationComponent = /*#__PURE__*/function () {
        function TwoFactorAuthenticationComponent(assetsPipe, formBuilder, fieldsValidateService, route) {
          _classCallCheck(this, TwoFactorAuthenticationComponent);

          this.assetsPipe = assetsPipe;
          this.formBuilder = formBuilder;
          this.fieldsValidateService = fieldsValidateService;
          this.route = route; //Navigation Url Constanst

          this.navigationUrl = src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__["NavigationUrl"];
        }

        _createClass(TwoFactorAuthenticationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
          /**
           *  This function will used to Prepare Form Fields.
           */

        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.twoFactorForm = this.formBuilder.group({
              twoFactorPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          } //this function validate form and redirect to next step

        }, {
          key: "onNext",
          value: function onNext() {
            if (this.twoFactorForm.invalid) {
              return this.fieldsValidateService.validateAllFormFields(this.twoFactorForm);
            } else {
              this.route.navigate(['/getting-setup/terms-and-conditions']);
            }
          }
        }]);

        return TwoFactorAuthenticationComponent;
      }();

      TwoFactorAuthenticationComponent.ɵfac = function TwoFactorAuthenticationComponent_Factory(t) {
        return new (t || TwoFactorAuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_4__["FieldsValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      TwoFactorAuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TwoFactorAuthenticationComponent,
        selectors: [["app-two-factor-authentication"]],
        decls: 17,
        vars: 5,
        consts: [[1, "align-center", "setup-section"], ["alt", "authentication-img", 3, "src"], [1, "setup-box"], [3, "formGroup"], [1, "form-group"], ["formControlName", "twoFactorPassword", "type", "password", 1, "form-control"], [3, "control"], ["type", "button", "value", "Confirm ", 1, "next-btn", 3, "click"]],
        template: function TwoFactorAuthenticationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Two Factor Authentication");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please enter the verfication code that has been ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "sent to your device registered with your mmob account.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-show-errors", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TwoFactorAuthenticationComponent_Template_input_click_16_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "images/authentication.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.twoFactorForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.twoFactorForm.controls.twoFactorPassword);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_6__["ShowErrorsComponent"]],
        pipes: [src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldHRpbmctc2V0dXAvdHdvLWZhY3Rvci1hdXRoZW50aWNhdGlvbi90d28tZmFjdG9yLWF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwoFactorAuthenticationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-two-factor-authentication',
            templateUrl: './two-factor-authentication.component.html',
            styleUrls: ['./two-factor-authentication.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_4__["FieldsValidateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "q1BD":
    /*!********************************************************!*\
      !*** ./src/app/getting-setup/banks/banks.component.ts ***!
      \********************************************************/

    /*! exports provided: BanksComponent */

    /***/
    function q1BD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BanksComponent", function () {
        return BanksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/constant/navigation-url.constant */
      "BE8i");
      /* harmony import */


      var src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/constant/constant */
      "8pUG");
      /* harmony import */


      var src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/pipes/assets-path.pipe */
      "VrQ/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/fields-validate.service */
      "q+kw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_services_local_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/local-data.service */
      "qwTe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BanksComponent_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BanksComponent_tr_4_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var bank_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.setBankName(bank_r7.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bank_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", bank_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bank_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/getting-setup/request-bank-data");
        }
      }

      var BanksComponent = /*#__PURE__*/function () {
        function BanksComponent(assetsPipe, formBuilder, fieldsValidateService, route, localDataService) {
          _classCallCheck(this, BanksComponent);

          this.assetsPipe = assetsPipe;
          this.formBuilder = formBuilder;
          this.fieldsValidateService = fieldsValidateService;
          this.route = route;
          this.localDataService = localDataService; //Navigation Url Constanst

          this.navigationUrl = src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_1__["NavigationUrl"];
          this.banksArray = [];
        }

        _createClass(BanksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
            this.banksArray = this.localDataService.getALlBanks();
          }
          /**
           *  This function will used to Prepare Form Fields.
           */

        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.banksDetailForm = this.formBuilder.group({});
          } //this function validate form and redirect to next step

        }, {
          key: "onNext",
          value: function onNext() {
            this.route.navigate(['/getting-setup/request-bank-data']);
          }
        }, {
          key: "setBankName",
          value: function setBankName(name) {
            window.localStorage[src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].BANK_NAME] = name;
          }
        }]);

        return BanksComponent;
      }();

      BanksComponent.ɵfac = function BanksComponent_Factory(t) {
        return new (t || BanksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_5__["FieldsValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_local_data_service__WEBPACK_IMPORTED_MODULE_7__["LocalDataService"]));
      };

      BanksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BanksComponent,
        selectors: [["app-banks"]],
        decls: 8,
        vars: 2,
        consts: [[1, "align-center", "setup-section"], [1, "account-table"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "setup-box"], [3, "formGroup"], ["href", "#", "type", "button", "value", "Skip for now", 1, "next-btn", 3, "click"], ["alt", "hsbc-icon", 3, "src"], [3, "routerLink", "click"]],
        template: function BanksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BanksComponent_tr_4_Template, 10, 3, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BanksComponent_Template_input_click_7_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.banksArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.banksDetailForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        styles: [".account-table[_ngcontent-%COMP%] {\r\n    margin: 50px 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zZXR1cC9iYW5rcy9iYW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZ2V0dGluZy1zZXR1cC9iYW5rcy9iYW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtdGFibGUge1xyXG4gICAgbWFyZ2luOiA1MHB4IDAgMDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BanksComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-banks',
            templateUrl: './banks.component.html',
            styleUrls: ['./banks.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_5__["FieldsValidateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: src_app_core_services_local_data_service__WEBPACK_IMPORTED_MODULE_7__["LocalDataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tBqg":
    /*!********************************************************!*\
      !*** ./src/app/getting-setup/email/email.component.ts ***!
      \********************************************************/

    /*! exports provided: EmailComponent */

    /***/
    function tBqg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailComponent", function () {
        return EmailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/constant/navigation-url.constant */
      "BE8i");
      /* harmony import */


      var src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/validators/custom-validators */
      "c1mT");
      /* harmony import */


      var src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/confirmation-popup/confirmation-popup.component */
      "WjRx");
      /* harmony import */


      var src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/constant/constant */
      "8pUG");
      /* harmony import */


      var src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/pipes/assets-path.pipe */
      "VrQ/");
      /* harmony import */


      var src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/fields-validate.service */
      "q+kw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shared/show-errors/show-errors.component */
      "yjpJ");

      function EmailComponent_i_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "assetsPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "images/tick-icon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var EmailComponent = /*#__PURE__*/function () {
        function EmailComponent(assetsPipe, formBuilder, fieldsValidateService, route, modalService) {
          _classCallCheck(this, EmailComponent);

          this.assetsPipe = assetsPipe;
          this.formBuilder = formBuilder;
          this.fieldsValidateService = fieldsValidateService;
          this.route = route;
          this.modalService = modalService; //Navigation Url Constanst

          this.navigationUrl = src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__["NavigationUrl"];
        }

        _createClass(EmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
          /**
           *  This function will used to Prepare Form Fields.
           */

        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.emailForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].emailCustomValidation]]
            });
          } //this function validate form and redirect to next step

        }, {
          key: "onNext",
          value: function onNext() {
            if (this.emailForm.invalid) {
              return this.fieldsValidateService.validateAllFormFields(this.emailForm);
            } else {
              this.commonAlertPopUp();
            }
          }
        }, {
          key: "commonAlertPopUp",
          value: function commonAlertPopUp() {
            var _this = this;

            var modal = this.showPopup();
            modal.componentInstance.confirmText = src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_5__["Constant"].EMAIL_CONFIRM_TEXT;
            modal.componentInstance.firstButtonText = src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_5__["Constant"].EMAIL_FIRST_BUTTON_TEXT;
            modal.componentInstance.secondButtonText = src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_5__["Constant"].EMAIL_SECOND_BUTTON_TEXT;
            modal.result.then(function (data) {
              if (data.isYesPressed) {
                _this.route.navigate(['/getting-setup/password']);
              }
            });
          }
        }, {
          key: "showPopup",
          value: function showPopup() {
            return this.modalService.open(src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationPopupComponent"], src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationPopupComponent"].POP_UP_DEFAULT_PROPS);
          }
        }]);

        return EmailComponent;
      }();

      EmailComponent.ɵfac = function EmailComponent_Factory(t) {
        return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_6__["AssetsPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_7__["FieldsValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]));
      };

      EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmailComponent,
        selectors: [["app-email"]],
        decls: 16,
        vars: 6,
        consts: [[1, "align-center", "setup-section"], ["alt", "pass-img", 3, "src"], [1, "setup-box"], [3, "formGroup"], [1, "form-group"], [4, "ngIf"], ["formControlName", "email", "type", "text", 1, "form-control"], [3, "control"], ["type", "button", "value", "Continue", 1, "next-btn", 3, "click"], ["alt", "tick-icon", 3, "src"]],
        template: function EmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What's your e-mail address?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "To create your account not to send you spam (we promise!)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmailComponent_i_12_Template, 3, 3, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-show-errors", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailComponent_Template_input_click_15_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "images/email.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.emailForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailForm.controls.email.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.emailForm.controls.email);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_11__["ShowErrorsComponent"]],
        pipes: [src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_6__["AssetsPathPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldHRpbmctc2V0dXAvZW1haWwvZW1haWwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-email',
            templateUrl: './email.component.html',
            styleUrls: ['./email.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_6__["AssetsPathPipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_7__["FieldsValidateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=getting-setup-getting-setup-module-es5.js.map