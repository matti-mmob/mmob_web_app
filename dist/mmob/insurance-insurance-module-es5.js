(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insurance-insurance-module"], {
    /***/
    "9zO0":
    /*!**********************************************************************!*\
      !*** ./src/app/insurance/aml-onboarding/aml-onboarding.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AmlOnboardingComponent */

    /***/
    function zO0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AmlOnboardingComponent", function () {
        return AmlOnboardingComponent;
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


      var src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/confirmation-popup/confirmation-popup.component */
      "WjRx");
      /* harmony import */


      var src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/constant/constant */
      "8pUG");
      /* harmony import */


      var src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/pipes/assets-path.pipe */
      "VrQ/");
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

      var AmlOnboardingComponent = /*#__PURE__*/function () {
        function AmlOnboardingComponent(assetsPipe, formBuilder, fieldsValidateService, route, modalService) {
          _classCallCheck(this, AmlOnboardingComponent);

          this.assetsPipe = assetsPipe;
          this.formBuilder = formBuilder;
          this.fieldsValidateService = fieldsValidateService;
          this.route = route;
          this.modalService = modalService; //Navigation Url Constanst

          this.navigationUrl = src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__["NavigationUrl"];
        }

        _createClass(AmlOnboardingComponent, [{
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
            this.onboardingFrom = this.formBuilder.group({
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              sirName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              date: [''],
              month: [''],
              year: [''],
              postCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          } //this function validate form and redirect to next step

        }, {
          key: "onNext",
          value: function onNext() {
            if (this.onboardingFrom.invalid) {
              return this.fieldsValidateService.validateAllFormFields(this.onboardingFrom);
            } else {
              this.commonAlertPopUp();
            }
          }
        }, {
          key: "commonAlertPopUp",
          value: function commonAlertPopUp() {
            var modal = this.showPopup();
            modal.componentInstance.confirmText = src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"].ONBOARD_CONFIRM_TEXT;
            modal.result.then(function (data) {
              if (data.isYesPressed) {// this.route.navigate([NavigationUrl.GETTING_SETUP_PASSWORD]);
              }
            });
          }
        }, {
          key: "showPopup",
          value: function showPopup() {
            return this.modalService.open(src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationPopupComponent"], src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationPopupComponent"].POP_UP_DEFAULT_PROPS);
          }
        }]);

        return AmlOnboardingComponent;
      }();

      AmlOnboardingComponent.ɵfac = function AmlOnboardingComponent_Factory(t) {
        return new (t || AmlOnboardingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_5__["AssetsPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_6__["FieldsValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]));
      };

      AmlOnboardingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AmlOnboardingComponent,
        selectors: [["app-aml-onboarding"]],
        decls: 213,
        vars: 5,
        consts: [[1, "main"], [1, "wrapper"], ["href", "#", 1, "back-butn"], [1, "aml-form"], [3, "formGroup"], [1, "form-group", "row"], [1, "col-12", "col-form-label"], [1, "col-12"], ["formControlName", "firstName", "placeholder", "Farah", "type", "text"], [3, "control"], ["formControlName", "sirName", "placeholder", "Khan", "type", "text"], ["formControlName", "date", "id", "inlineFormCustomSelect", 1, "custom-select", "mr-sm-2"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["value", "28"], ["value", "29"], ["value", "30"], ["value", "31"], ["formControlName", "month", "id", "inlineFormCustomSelect", 1, "custom-select", "mr-sm-2"], ["value", "January"], ["value", "Fabruary"], ["value", "March"], ["value", "April"], ["value", "May"], ["value", "June"], ["value", "July"], ["value", "August"], ["value", "September"], ["value", "October"], ["value", "November"], ["value", "December"], ["formControlName", "year", "id", "inlineFormCustomSelect", 1, "custom-select", "mr-sm-2"], ["value", ""], [1, "form-group", "row", "justify-content-center"], [1, "col-8", "col-sm-5"], ["formControlName", "postCode", "placeholder", "E14 5AB", "type", "text"], [1, "col-sm-7"], ["formControlName", "address", "size", "2", 1, "custom-select", "add"], ["type", "submit", 3, "click"]],
        template: function AmlOnboardingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-show-errors", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Surname:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-show-errors", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Date of Birth:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "11");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "13");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "16");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "17");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "19");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "23");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "26");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "27");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "28");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "29");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "select", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "January");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Fabruary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "March");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "April");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "May");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "June");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "July");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "August");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "September");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "October");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "November");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "December");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "select", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "1990");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "1991");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "1992");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "1993");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "1994");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "1995");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "1996");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "1997");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "1998");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "1999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "2000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "2001");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "2002");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "2003");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "2004");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "2005");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "2006");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "2007");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "2008");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "2009");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "2010");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "2011");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "2012");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "2013");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "2022");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Postcode:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "app-show-errors", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Select address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "select", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "01 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "02 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "03 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "04 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "05 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "06 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "07 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "08 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "09 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "10 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "11 canada square, canary wharf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "app-show-errors", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AmlOnboardingComponent_Template_button_click_211_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.onboardingFrom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.onboardingFrom.controls.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.onboardingFrom.controls.sirName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](165);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.onboardingFrom.controls.postCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.onboardingFrom.controls.address);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_9__["ShowErrorsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".aml-form[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    width: 100%;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.aml-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #c697dc;\r\n    padding: 10px;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.aml-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    border: 1px solid #c697dc;\r\n}\r\n\r\n.aml-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background: #00008b;\r\n    color: white;\r\n    padding: 15px;\r\n    width: 70%;\r\n    margin: 10px auto;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.aml-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #b5b5ff;\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n}\r\n\r\n.aml-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    background: none;\r\n}\r\n\r\n.back-butn[_ngcontent-%COMP%] {\r\n    padding: 4px 15px;\r\n    color: black;\r\n    font-size: 32px;\r\n}\r\n\r\n.back-butn[_ngcontent-%COMP%]:hover {\r\n    background: #00008b;\r\n    color: white;\r\n}\r\n\r\nselect.custom-select[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    box-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdXJhbmNlL2FtbC1vbmJvYXJkaW5nL2FtbC1vbmJvYXJkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2luc3VyYW5jZS9hbWwtb25ib2FyZGluZy9hbWwtb25ib2FyZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFtbC1mb3JtIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFtbC1mb3JtIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M2OTdkYztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYW1sLWZvcm0gc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNjk3ZGM7XHJcbn1cclxuXHJcbi5hbWwtZm9ybSBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDA4YjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5hbWwtZm9ybSBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2I1YjVmZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYW1sLWZvcm0gZm9ybSAuYWRkIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uYmFjay1idXRuIHtcclxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4uYmFjay1idXRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwOGI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuc2VsZWN0LmN1c3RvbS1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AmlOnboardingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-aml-onboarding',
            templateUrl: './aml-onboarding.component.html',
            styleUrls: ['./aml-onboarding.component.css']
          }]
        }], function () {
          return [{
            type: src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_5__["AssetsPathPipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
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
    "cQ3d":
    /*!**********************************************************************!*\
      !*** ./src/app/insurance/insurance-home/insurance-home.component.ts ***!
      \**********************************************************************/

    /*! exports provided: InsuranceHomeComponent */

    /***/
    function cQ3d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsuranceHomeComponent", function () {
        return InsuranceHomeComponent;
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


      var src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/confirmation-popup/confirmation-popup.component */
      "WjRx");
      /* harmony import */


      var src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/constant/constant */
      "8pUG");
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

      var InsuranceHomeComponent = /*#__PURE__*/function () {
        function InsuranceHomeComponent(assetsPipe, formBuilder, fieldsValidateService, route, modalService) {
          _classCallCheck(this, InsuranceHomeComponent);

          this.assetsPipe = assetsPipe;
          this.formBuilder = formBuilder;
          this.fieldsValidateService = fieldsValidateService;
          this.route = route;
          this.modalService = modalService; //Navigation Url Constanst

          this.navigationUrl = src_app_shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_1__["NavigationUrl"];
        }

        _createClass(InsuranceHomeComponent, [{
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
            this.insurance = this.formBuilder.group({});
          } //this function validate form and redirect to next step

        }, {
          key: "onNext",
          value: function onNext() {
            this.commonAlertPopUp();
          }
        }, {
          key: "commonAlertPopUp",
          value: function commonAlertPopUp() {
            var _this = this;

            var modal = this.showPopup();
            modal.componentInstance.confirmText = src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_3__["Constant"].INSURANCE_CONFIRM_TEXT;
            modal.componentInstance.headerText = src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_3__["Constant"].DEFAULT_HEADER_TEXT;
            modal.result.then(function (data) {
              if (data.isYesPressed) {
                _this.route.navigate(['/kyc']);
              }
            });
          }
        }, {
          key: "showPopup",
          value: function showPopup() {
            return this.modalService.open(src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationPopupComponent"], src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationPopupComponent"].POP_UP_DEFAULT_PROPS);
          }
        }]);

        return InsuranceHomeComponent;
      }();

      InsuranceHomeComponent.ɵfac = function InsuranceHomeComponent_Factory(t) {
        return new (t || InsuranceHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_4__["AssetsPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fields_validate_service__WEBPACK_IMPORTED_MODULE_6__["FieldsValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]));
      };

      InsuranceHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InsuranceHomeComponent,
        selectors: [["app-insurance-home"]],
        decls: 45,
        vars: 22,
        consts: [[1, "insurance-sec"], ["alt", "utilitie icon", 3, "src"], [3, "formGroup"], ["type", "search", 1, "Utilitie-search-box"], [1, "brand-box", 3, "click"], [1, "row", "justify-content-between"], [1, "logo-box"], ["alt", "cuvva", 3, "src"], [1, "time-box"], ["alt", "clock image", 3, "src"], [1, "utilitie-dis"], ["alt", "brolly", 3, "src"], ["alt", "lemonade", 3, "src"]],
        template: function InsuranceHomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Insurance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceHomeComponent_Template_div_click_9_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "4 mins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " We are cutting out the jargon, the paperwork and the call centre queues. Get temporary car insurance and travel insurance today. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceHomeComponent_Template_div_click_21_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "4 mins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " We are building Brolly to create insurance that just works, enabling people to protect the things they care about in a simple and joyful way. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceHomeComponent_Template_div_click_33_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "9 mins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Lemonade Reverses The Traditional Insurance Model. We Treat The Premiums You Pay As If It's Your Money, Not Ours. With Lemonade, Everything Becomes Simple And Transparent. We Take A Flat Fee, Pay Claims Super Fast, And Give Back What's Left To Causes You Care About. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "images/health-insurance.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.insurance);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, "images/cuvva-img.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 12, "images/clock.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 14, "images/brolly-img.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 16, "images/clock.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 18, "images/lemonade-img.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 20, "images/clock.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]],
        pipes: [src_app_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_4__["AssetsPathPipe"]],
        styles: [".Utilitie[_ngcontent-%COMP%], .insurance-sec[_ngcontent-%COMP%] {\r\n    max-width: 760px;\r\n    margin: 55px auto 15px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.Utilitie-search-box[_ngcontent-%COMP%] {\r\n    border: 1px solid grey;\r\n    border-radius: 20px;\r\n    box-shadow: none;\r\n    outline: none;\r\n    background: #efefef url('search-icon.png') no-repeat scroll right center;\r\n    background-size: 30px;\r\n    cursor: pointer;\r\n    width: 70%;\r\n    padding: 2px 30px 2px 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.time-box[_ngcontent-%COMP%] {\r\n    padding: 5px 15px;\r\n    border-radius: 20px;\r\n    max-width: 120px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background: #ccc\r\n\r\n}\r\n\r\n.brand-box[_ngcontent-%COMP%] {\r\n    padding: 10px 25px;\r\n    margin: 20px 0px;\r\n    border: 1px solid gray;\r\n    border-radius: 20px;\r\n}\r\n\r\n.brand-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.time-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n}\r\n\r\n.time-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #fff;\r\n    font-size: 14px;\r\n}\r\n\r\n.logo-box[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    text-align: left;\r\n}\r\n\r\n.utilitie-dis[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 520px;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n    margin: 5px 0 0;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:nth-of-type(2) {\r\n    border: 1px solid #93d8d5;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:first-of-type {\r\n    border: 1px solid #8d2fb9;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:last-of-type {\r\n    border: 1px solid #8af181;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:nth-of-type(2)   .time-box[_ngcontent-%COMP%] {\r\n    background-color: #93d8d5;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:first-of-type   .time-box[_ngcontent-%COMP%] {\r\n    background-color: #8d2fb9;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:last-of-type   .time-box[_ngcontent-%COMP%] {\r\n    background-color: #8af181;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:first-of-type {\r\n    border: 1px solid #7571f4;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:first-of-type   .time-box[_ngcontent-%COMP%] {\r\n    background: #7571f4;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:nth-of-type(2) {\r\n    border: 1px solid #fd9c9c;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:nth-of-type(2)   .time-box[_ngcontent-%COMP%] {\r\n    background: #fd9c9c;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:last-of-type {\r\n    border: 1px solid #f490d4;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:last-of-type   .time-box[_ngcontent-%COMP%] {\r\n    background: #f490d4;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .click-button[_ngcontent-%COMP%] {\r\n        width: 146px;\r\n        margin: 0 4px;\r\n\r\n    }\r\n\r\n    .join-memebers[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        margin: 25px 0 30px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .setup-box[_ngcontent-%COMP%], .setup-box[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%] {\r\n        margin: 20px 0 0;\r\n    }\r\n\r\n    .logo-img[_ngcontent-%COMP%] {\r\n        margin: 0 auto 20px;\r\n        width: 200px;\r\n    }\r\n\r\n    .align-center[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        padding: 15px;\r\n    }\r\n\r\n    #slider[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n    }\r\n\r\n    .account-table[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n\r\n    .account-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\r\n        width: 10%;\r\n    }\r\n\r\n    .account-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\r\n        width: 88%;\r\n    }\r\n\r\n    .Utilitie[_ngcontent-%COMP%]   .time-box[_ngcontent-%COMP%] {\r\n        width: 120px;\r\n        max-width: 100%;\r\n    }\r\n\r\n    .Utilitie[_ngcontent-%COMP%]   .utilitie-dis[_ngcontent-%COMP%] {\r\n        margin: 15px 0 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdXJhbmNlL2luc3VyYW5jZS1ob21lL2luc3VyYW5jZS1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0VBQXdGO0lBQ3hGLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkI7O0FBRUo7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTs7SUFFakI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9pbnN1cmFuY2UvaW5zdXJhbmNlLWhvbWUvaW5zdXJhbmNlLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5VdGlsaXRpZSwgLmluc3VyYW5jZS1zZWMge1xyXG4gICAgbWF4LXdpZHRoOiA3NjBweDtcclxuICAgIG1hcmdpbjogNTVweCBhdXRvIDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLlV0aWxpdGllLXNlYXJjaC1ib3gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWYgdXJsKHNyYy9hc3NldHMvaW1hZ2VzL3NlYXJjaC1pY29uLnBuZykgbm8tcmVwZWF0IHNjcm9sbCByaWdodCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZzogMnB4IDMwcHggMnB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGltZS1ib3gge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjXHJcblxyXG59XHJcblxyXG4uYnJhbmQtYm94IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmJyYW5kLWJveCAucm93IHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRpbWUtYm94IGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLnRpbWUtYm94IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5sb2dvLWJveCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udXRpbGl0aWUtZGlzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbjogNXB4IDAgMDtcclxufVxyXG5cclxuLlV0aWxpdGllIC5icmFuZC1ib3g6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkzZDhkNTtcclxufVxyXG5cclxuLlV0aWxpdGllIC5icmFuZC1ib3g6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGQyZmI5O1xyXG59XHJcblxyXG4uVXRpbGl0aWUgLmJyYW5kLWJveDpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhhZjE4MTtcclxufVxyXG5cclxuLlV0aWxpdGllIC5icmFuZC1ib3g6bnRoLW9mLXR5cGUoMikgLnRpbWUtYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2Q4ZDU7XHJcbn1cclxuXHJcbi5VdGlsaXRpZSAuYnJhbmQtYm94OmZpcnN0LW9mLXR5cGUgLnRpbWUtYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZDJmYjk7XHJcbn1cclxuXHJcbi5VdGlsaXRpZSAuYnJhbmQtYm94Omxhc3Qtb2YtdHlwZSAudGltZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhZjE4MTtcclxufVxyXG5cclxuLmluc3VyYW5jZS1zZWMgLmJyYW5kLWJveDpmaXJzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NTcxZjQ7XHJcbn1cclxuXHJcbi5pbnN1cmFuY2Utc2VjIC5icmFuZC1ib3g6Zmlyc3Qtb2YtdHlwZSAudGltZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogIzc1NzFmNDtcclxufVxyXG5cclxuLmluc3VyYW5jZS1zZWMgLmJyYW5kLWJveDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmQ5YzljO1xyXG59XHJcblxyXG4uaW5zdXJhbmNlLXNlYyAuYnJhbmQtYm94Om50aC1vZi10eXBlKDIpIC50aW1lLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmQ5YzljO1xyXG59XHJcblxyXG4uaW5zdXJhbmNlLXNlYyAuYnJhbmQtYm94Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjQ5MGQ0O1xyXG59XHJcblxyXG4uaW5zdXJhbmNlLXNlYyAuYnJhbmQtYm94Omxhc3Qtb2YtdHlwZSAudGltZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0OTBkNDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2xpY2stYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTQ2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmpvaW4tbWVtZWJlcnMgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMjVweCAwIDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXR1cC1ib3gsIC5zZXR1cC1ib3ggLm5leHQtYnRuIHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvLWltZyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NsaWRlciAuaXRlbSBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWNjb3VudC10YWJsZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY2NvdW50LXRhYmxlIHRhYmxlIHRyIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY2NvdW50LXRhYmxlIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgd2lkdGg6IDg4JTtcclxuICAgIH1cclxuXHJcbiAgICAuVXRpbGl0aWUgLnRpbWUtYm94IHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5VdGlsaXRpZSAudXRpbGl0aWUtZGlzIHtcclxuICAgICAgICBtYXJnaW46IDE1cHggMCAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsuranceHomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-insurance-home',
            templateUrl: './insurance-home.component.html',
            styleUrls: ['./insurance-home.component.css']
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
    "hsp1":
    /*!***********************************************!*\
      !*** ./src/app/insurance/insurance.module.ts ***!
      \***********************************************/

    /*! exports provided: InsuranceModule */

    /***/
    function hsp1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsuranceModule", function () {
        return InsuranceModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _insurance_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./insurance-routing.module */
      "wg8X");
      /* harmony import */


      var _insurance_home_insurance_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./insurance-home/insurance-home.component */
      "cQ3d");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../layout/layout.module */
      "Tx//");
      /* harmony import */


      var _aml_onboarding_aml_onboarding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./aml-onboarding/aml-onboarding.component */
      "9zO0");

      var InsuranceModule = function InsuranceModule() {
        _classCallCheck(this, InsuranceModule);
      };

      InsuranceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InsuranceModule
      });
      InsuranceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InsuranceModule_Factory(t) {
          return new (t || InsuranceModule)();
        },
        imports: [[_insurance_routing_module__WEBPACK_IMPORTED_MODULE_1__["InsuranceRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InsuranceModule, {
          declarations: [_insurance_home_insurance_home_component__WEBPACK_IMPORTED_MODULE_2__["InsuranceHomeComponent"], _aml_onboarding_aml_onboarding_component__WEBPACK_IMPORTED_MODULE_5__["AmlOnboardingComponent"]],
          imports: [_insurance_routing_module__WEBPACK_IMPORTED_MODULE_1__["InsuranceRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsuranceModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_insurance_home_insurance_home_component__WEBPACK_IMPORTED_MODULE_2__["InsuranceHomeComponent"], _aml_onboarding_aml_onboarding_component__WEBPACK_IMPORTED_MODULE_5__["AmlOnboardingComponent"]],
            imports: [_insurance_routing_module__WEBPACK_IMPORTED_MODULE_1__["InsuranceRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wg8X":
    /*!*******************************************************!*\
      !*** ./src/app/insurance/insurance-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: InsuranceRoutingModule */

    /***/
    function wg8X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsuranceRoutingModule", function () {
        return InsuranceRoutingModule;
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


      var _insurance_home_insurance_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./insurance-home/insurance-home.component */
      "cQ3d");
      /* harmony import */


      var _layout_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../layout/main-content/main-content.component */
      "o/Qx");
      /* harmony import */


      var _aml_onboarding_aml_onboarding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./aml-onboarding/aml-onboarding.component */
      "9zO0");

      var routes = [{
        path: '',
        component: _layout_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_3__["MainContentComponent"],
        children: [{
          path: '',
          component: _insurance_home_insurance_home_component__WEBPACK_IMPORTED_MODULE_2__["InsuranceHomeComponent"]
        }, {
          path: 'aml-onboarding',
          component: _aml_onboarding_aml_onboarding_component__WEBPACK_IMPORTED_MODULE_4__["AmlOnboardingComponent"]
        }]
      }];

      var InsuranceRoutingModule = function InsuranceRoutingModule() {
        _classCallCheck(this, InsuranceRoutingModule);
      };

      InsuranceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InsuranceRoutingModule
      });
      InsuranceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InsuranceRoutingModule_Factory(t) {
          return new (t || InsuranceRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InsuranceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsuranceRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=insurance-insurance-module-es5.js.map