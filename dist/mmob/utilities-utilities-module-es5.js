(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utilities-utilities-module"], {
    /***/
    "Kkqg":
    /*!*******************************************************!*\
      !*** ./src/app/utilities/utilities-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: UtilitiesRoutingModule */

    /***/
    function Kkqg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilitiesRoutingModule", function () {
        return UtilitiesRoutingModule;
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


      var _layout_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../layout/main-content/main-content.component */
      "o/Qx");
      /* harmony import */


      var _access_utilities_access_utilities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./access-utilities/access-utilities.component */
      "eHGy");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile/profile.component */
      "i0NX");

      var routes = [{
        path: '',
        component: _layout_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_2__["MainContentComponent"],
        children: [{
          path: 'accessUtilities',
          component: _access_utilities_access_utilities_component__WEBPACK_IMPORTED_MODULE_3__["AccessUtilitiesComponent"]
        }, {
          path: 'profile',
          component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
        }]
      }];

      var UtilitiesRoutingModule = function UtilitiesRoutingModule() {
        _classCallCheck(this, UtilitiesRoutingModule);
      };

      UtilitiesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UtilitiesRoutingModule
      });
      UtilitiesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UtilitiesRoutingModule_Factory(t) {
          return new (t || UtilitiesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UtilitiesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilitiesRoutingModule, [{
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
    "YZyu":
    /*!***************************************************!*\
      !*** ./src/app/service/previous-route.service.ts ***!
      \***************************************************/

    /*! exports provided: PreviousRouteService */

    /***/
    function YZyu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviousRouteService", function () {
        return PreviousRouteService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PreviousRouteService = /*#__PURE__*/function () {
        function PreviousRouteService(router) {
          var _this = this;

          _classCallCheck(this, PreviousRouteService);

          this.router = router;
          this.currentUrl = this.router.url;
          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this.previousUrl = _this.currentUrl;
              _this.currentUrl = event.url;
            }

            ;
          });
        }

        _createClass(PreviousRouteService, [{
          key: "getPreviousUrl",
          value: function getPreviousUrl() {
            return this.previousUrl;
          }
        }]);

        return PreviousRouteService;
      }();

      PreviousRouteService.ɵfac = function PreviousRouteService_Factory(t) {
        return new (t || PreviousRouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      PreviousRouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PreviousRouteService,
        factory: PreviousRouteService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviousRouteService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "eHGy":
    /*!**************************************************************************!*\
      !*** ./src/app/utilities/access-utilities/access-utilities.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AccessUtilitiesComponent */

    /***/
    function eHGy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessUtilitiesComponent", function () {
        return AccessUtilitiesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/confirmation-popup/confirmation-popup.component */
      "WjRx");
      /* harmony import */


      var src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/constant/constant */
      "8pUG");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_service_previous_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/previous-route.service */
      "YZyu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/pipes/assets-path.pipe */
      "VrQ/");

      var AccessUtilitiesComponent = /*#__PURE__*/function () {
        function AccessUtilitiesComponent(modalService, previousRouteService, route) {
          _classCallCheck(this, AccessUtilitiesComponent);

          this.modalService = modalService;
          this.previousRouteService = previousRouteService;
          this.route = route;
          this.constant = src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"];
          this.previousUrl = undefined;
        }

        _createClass(AccessUtilitiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.previousUrl = this.previousRouteService.getPreviousUrl();

            if (this.previousUrl === '/utilities/profile') {
              this.commonAlertPopUp(src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].SHARE_DETIALS_WITH_OCTOPUS_ENERGY);
            }
          } // method to call pop up

        }, {
          key: "commonAlertPopUp",
          value: function commonAlertPopUp(confirmationText) {
            var _this2 = this;

            var modalRefForFirstConfirm = this.modalService.open(src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationPopupComponent"], src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationPopupComponent"].POP_UP_DEFAULT_PROPS);
            modalRefForFirstConfirm.componentInstance.confirmText = confirmationText;
            modalRefForFirstConfirm.result.then(function (data) {
              if (data.isYesPressed && confirmationText === src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].USER_DETAILS_TO_ACCESS_UTILITIES) {
                _this2.route.navigate(['/kyc']);
              }
            }, function () {});
          }
        }]);

        return AccessUtilitiesComponent;
      }();

      AccessUtilitiesComponent.ɵfac = function AccessUtilitiesComponent_Factory(t) {
        return new (t || AccessUtilitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_previous_route_service__WEBPACK_IMPORTED_MODULE_4__["PreviousRouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AccessUtilitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AccessUtilitiesComponent,
        selectors: [["app-access-utilities"]],
        decls: 45,
        vars: 21,
        consts: [[1, "Utilitie"], ["alt", "utilitie icon", 3, "src"], ["type", "search", 1, "Utilitie-search-box"], [1, "brand-box", "octopus-bcolor"], [1, "row", "justify-content-between", "px-1", 3, "click"], [1, "logo-box"], ["alt", "octopus-energy icon", 3, "src"], [1, "time-box"], ["alt", "clock image", 3, "src"], [1, "utilitie-dis"], [1, "brand-box", "utilitypoint-bcolor"], ["alt", "utilitypoint icon", 3, "src"], [1, "brand-box", "avro-bcolor"], ["alt", "avro icon", 3, "src"]],
        template: function AccessUtilitiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Utilities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccessUtilitiesComponent_Template_div_click_10_listener() {
              return ctx.commonAlertPopUp(ctx.constant.USER_DETAILS_TO_ACCESS_UTILITIES);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2 mins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " The only energy provider which? has recommended year, after year, after year. an energy service that's good for the planet, for your wallet and your soul. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccessUtilitiesComponent_Template_div_click_22_listener() {
              return ctx.commonAlertPopUp(ctx.constant.USER_DETAILS_TO_ACCESS_UTILITIES);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2 mins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " get more than just a great priced tariff. you'll enjoy great rewards and benefits from an award winning energy provider. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccessUtilitiesComponent_Template_div_click_34_listener() {
              return ctx.commonAlertPopUp(ctx.constant.USER_DETAILS_TO_ACCESS_UTILITIES);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2 mins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " switch and save on gas and electricity. switch to avro and save up to $300 and your utilities. get a quote from avro energy to find out how much you can save! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "images/document.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, "images/octopus-energy.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "images/clock.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 13, "images/utilitypoint-icon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 15, "images/clock.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 17, "images/avro-icon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 19, "images/clock.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]],
        pipes: [_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_7__["AssetsPathPipe"]],
        styles: [".row.justify-content-between.px-1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0 !important;\r\n}\r\n.Utilitie[_ngcontent-%COMP%], .insurance-sec[_ngcontent-%COMP%] {\r\n    max-width: 760px;\r\n    margin: 58px auto 15px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.Utilitie-search-box[_ngcontent-%COMP%] {\r\n    border: 1px solid grey;\r\n    border-radius: 20px;\r\n    box-shadow: none;\r\n    outline: none;\r\n    background: #efefef url('search-icon.png') no-repeat scroll right center;\r\n    background-size: 30px;\r\n    cursor: pointer;\r\n    width: 70%;\r\n    padding: 2px 30px 2px 10px;\r\n    margin-top: 20px;\r\n}\r\n.time-box[_ngcontent-%COMP%] {\r\n    padding: 5px 15px;\r\n    border-radius: 20px;\r\n    max-width: 150px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background: #ccc;\r\n}\r\n.brand-box[_ngcontent-%COMP%] {\r\n    padding: 10px 25px;\r\n    margin: 20px 0px;\r\n    border: 1px solid gray;\r\n    border-radius: 20px;\r\n}\r\n.time-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n}\r\n.time-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #fff;\r\n    font-size: 14px;\r\n}\r\n.logo-box[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    text-align: left;\r\n}\r\n.utilitie-dis[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 520px;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n    margin: 5px 0 0;\r\n}\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:nth-of-type(2) {\r\n    border: 1px solid #93d8d5;\r\n}\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:first-of-type {\r\n    border: 1px solid #8d2fb9;\r\n}\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:last-of-type {\r\n    border: 1px solid #8af181;\r\n}\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:nth-of-type(2)   .time-box[_ngcontent-%COMP%] {\r\n    background-color: #93d8d5;\r\n}\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:first-of-type   .time-box[_ngcontent-%COMP%] {\r\n    background-color: #8d2fb9;\r\n}\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:last-of-type   .time-box[_ngcontent-%COMP%] {\r\n    background-color: #8af181;\r\n}\r\n@media (max-width: 767px) {\r\n    .click-button[_ngcontent-%COMP%] {\r\n        width: 146px;\r\n        margin: 0 4px;\r\n    }\r\n\r\n    .join-memebers[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        margin: 25px 0 30px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .setup-box[_ngcontent-%COMP%], .setup-box[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%] {\r\n        margin: 20px 0 0;\r\n    }\r\n\r\n    .logo-img[_ngcontent-%COMP%] {\r\n        margin: 0 auto 20px;\r\n        width: 200px;\r\n    }\r\n\r\n    .align-center[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        padding: 15px;\r\n    }\r\n\r\n    #slider[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n    }\r\n\r\n    .account-table[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n\r\n    .account-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\r\n        width: 10%;\r\n    }\r\n\r\n    .account-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\r\n        width: 88%;\r\n    }\r\n\r\n    .Utilitie[_ngcontent-%COMP%]   .time-box[_ngcontent-%COMP%] {\r\n        width: 130px;\r\n        max-width: 100%;\r\n    }\r\n\r\n    .Utilitie[_ngcontent-%COMP%]   .utilitie-dis[_ngcontent-%COMP%] {\r\n        margin: 15px 0 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0aWVzL2FjY2Vzcy11dGlsaXRpZXMvYWNjZXNzLXV0aWxpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULHFCQUFxQjtBQUN6QjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdFQUF3RjtJQUN4RixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXRpbGl0aWVzL2FjY2Vzcy11dGlsaXRpZXMvYWNjZXNzLXV0aWxpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy5qdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbi5weC0xIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG4uVXRpbGl0aWUsXHJcbi5pbnN1cmFuY2Utc2VjIHtcclxuICAgIG1heC13aWR0aDogNzYwcHg7XHJcbiAgICBtYXJnaW46IDU4cHggYXV0byAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5VdGlsaXRpZS1zZWFyY2gtYm94IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmIHVybChzcmMvYXNzZXRzL2ltYWdlcy9zZWFyY2gtaWNvbi5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgcmlnaHQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHBhZGRpbmc6IDJweCAzMHB4IDJweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4udGltZS1ib3gge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcbi5icmFuZC1ib3gge1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi50aW1lLWJveCBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLnRpbWUtYm94IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmxvZ28tYm94IHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnV0aWxpdGllLWRpcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNTIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDVweCAwIDA7XHJcbn1cclxuLlV0aWxpdGllIC5icmFuZC1ib3g6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkzZDhkNTtcclxufVxyXG4uVXRpbGl0aWUgLmJyYW5kLWJveDpmaXJzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZDJmYjk7XHJcbn1cclxuLlV0aWxpdGllIC5icmFuZC1ib3g6bGFzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YWYxODE7XHJcbn1cclxuXHJcbi5VdGlsaXRpZSAuYnJhbmQtYm94Om50aC1vZi10eXBlKDIpIC50aW1lLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkOGQ1O1xyXG59XHJcbi5VdGlsaXRpZSAuYnJhbmQtYm94OmZpcnN0LW9mLXR5cGUgLnRpbWUtYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZDJmYjk7XHJcbn1cclxuLlV0aWxpdGllIC5icmFuZC1ib3g6bGFzdC1vZi10eXBlIC50aW1lLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGFmMTgxO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNsaWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0NnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmpvaW4tbWVtZWJlcnMgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMjVweCAwIDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXR1cC1ib3gsXHJcbiAgICAuc2V0dXAtYm94IC5uZXh0LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nby1pbWcge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzbGlkZXIgLml0ZW0gaW1nIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjY291bnQtdGFibGUge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYWNjb3VudC10YWJsZSB0YWJsZSB0ciB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYWNjb3VudC10YWJsZSB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHdpZHRoOiA4OCU7XHJcbiAgICB9XHJcblxyXG4gICAgLlV0aWxpdGllIC50aW1lLWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuVXRpbGl0aWUgLnV0aWxpdGllLWRpcyB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessUtilitiesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-access-utilities',
            templateUrl: './access-utilities.component.html',
            styleUrls: ['./access-utilities.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }, {
            type: src_app_service_previous_route_service__WEBPACK_IMPORTED_MODULE_4__["PreviousRouteService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "egEE":
    /*!***********************************************!*\
      !*** ./src/app/utilities/utilities.module.ts ***!
      \***********************************************/

    /*! exports provided: UtilitiesModule */

    /***/
    function egEE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilitiesModule", function () {
        return UtilitiesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _access_utilities_access_utilities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./access-utilities/access-utilities.component */
      "eHGy");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile/profile.component */
      "i0NX");
      /* harmony import */


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../layout/layout.module */
      "Tx//");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _utilities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utilities-routing.module */
      "Kkqg");

      var UtilitiesModule = function UtilitiesModule() {
        _classCallCheck(this, UtilitiesModule);
      };

      UtilitiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UtilitiesModule
      });
      UtilitiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UtilitiesModule_Factory(t) {
          return new (t || UtilitiesModule)();
        },
        imports: [[_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _utilities_routing_module__WEBPACK_IMPORTED_MODULE_5__["UtilitiesRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UtilitiesModule, {
          declarations: [_access_utilities_access_utilities_component__WEBPACK_IMPORTED_MODULE_1__["AccessUtilitiesComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]],
          imports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _utilities_routing_module__WEBPACK_IMPORTED_MODULE_5__["UtilitiesRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilitiesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_access_utilities_access_utilities_component__WEBPACK_IMPORTED_MODULE_1__["AccessUtilitiesComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]],
            imports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _utilities_routing_module__WEBPACK_IMPORTED_MODULE_5__["UtilitiesRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "i0NX":
    /*!********************************************************!*\
      !*** ./src/app/utilities/profile/profile.component.ts ***!
      \********************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function i0NX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/pipes/assets-path.pipe */
      "VrQ/");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(route) {
          _classCallCheck(this, ProfileComponent);

          this.route = route;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "next",
          value: function next() {
            this.route.navigate(['utilities/accessUtilities']);
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 84,
        vars: 3,
        consts: [[1, "utilities-type"], [1, "profile"], [1, "user-img"], ["alt", "user", 3, "src"], [1, "type-box"], [1, "custom-radios"], ["checked", "", "id", "color-1", "name", "color", "type", "radio", "value", "color-1"], ["for", "color-1"], ["id", "color-2", "name", "color", "type", "radio", "value", "color-2"], ["for", "color-2"], ["checked", "", "id", "color-3", "name", "color", "type", "radio", "value", "color-3"], ["for", "color-3"], ["id", "color-4", "name", "color", "type", "radio", "value", "color-4"], ["for", "color-4"], ["id", "color-5", "name", "color", "type", "radio", "value", "color-5"], ["for", "color-5"], ["checked", "", "id", "color-6", "name", "color", "type", "radio", "value", "color-6"], ["for", "color-6"], ["id", "color-7", "name", "color", "type", "radio", "value", "color-7"], ["for", "color-7"], ["id", "color-8", "name", "color", "type", "radio", "value", "color-8"], ["for", "color-8"], ["id", "color-9", "name", "color", "type", "radio", "value", "color-9"], ["for", "color-9"], ["data-target", "#allow", "data-toggle", "modal", "href", "#", "type", "button", "value", "Confirm", 1, "next-btn", 3, "click"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Carolina");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "carolina@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Energy Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Gas & Electricity ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Electricity Only ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Meter Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Standard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Economy 7 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Smart ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Energy Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " High ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Medium ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Low ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Actual ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Typically, high consumption homes:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "- Are larger (4+ bedrooms)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "- May be older (pre 1970s)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "- Need a lot of heating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Approx. usage for a high household:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "- 4300 kWh of electricity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "- 17000 kWh of gas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_input_click_83_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "images/user-img.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
        pipes: [_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]],
        styles: [".utilities-type[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    margin: 58px auto 15px;\r\n}\r\n.user-img[_ngcontent-%COMP%] {\r\n    width: 105px;\r\n    height: 105px;\r\n    margin: auto;\r\n    border: 2px solid #442f64;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: center;\r\n}\r\n.type-box[_ngcontent-%COMP%] {\r\n    margin: 15px 0 0;\r\n}\r\n.type-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    margin: 0 0 15px;\r\n}\r\n.utilities-type[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 325px;\r\n    text-align: left;\r\n    margin: 20px auto 0;\r\n}\r\n.utilities-type[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n    font-weight: 600;\r\n}\r\n.utilities-type[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    color: #000;\r\n}\r\n.utilities-type[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    margin: 30px auto;\r\n}\r\n\r\n.custom-radios[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 336px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.custom-radios[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin: 0 5px;\r\n}\r\n.custom-radios[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.custom-radios[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n    color: #333;\r\n    font-family: Arial, sans-serif;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n.custom-radios[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    margin: 0;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    text-align: center;\r\n    border-radius: 8px;\r\n    border: 1px solid #e6e6e6;\r\n    font-weight: 600;\r\n    color: #bbb;\r\n    padding: 14px 16px;\r\n}\r\n.custom-radios[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    transition: all 0.3s ease;\r\n}\r\n.custom-radios[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #cccce8;\r\n    color: #191996;\r\n    border-color: #191996;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0aWVzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQSxxREFBcUQ7QUFDckQ7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsU0FBUztBQUNiO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdXRpbGl0aWVzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnV0aWxpdGllcy10eXBlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogNThweCBhdXRvIDE1cHg7XHJcbn1cclxuLnVzZXItaW1nIHtcclxuICAgIHdpZHRoOiAxMDVweDtcclxuICAgIGhlaWdodDogMTA1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDQyZjY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udHlwZS1ib3gge1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcclxufVxyXG4udHlwZS1ib3ggaDYge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbn1cclxuLnV0aWxpdGllcy10eXBlIHVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMjVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwO1xyXG59XHJcbi51dGlsaXRpZXMtdHlwZSB1bCBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi51dGlsaXRpZXMtdHlwZSB1bCBsaSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4udXRpbGl0aWVzLXR5cGUgLm5leHQtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG59XHJcbi8qKioqKioqKioqKioqKkN1c3RvbSByYWRpbyBidXR0b24qKioqKioqKioqKioqKioqKioqL1xyXG4uY3VzdG9tLXJhZGlvcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzM2cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jdXN0b20tcmFkaW9zIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbi5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9J3JhZGlvJ10ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPSdyYWRpbyddICsgbGFiZWwge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmN1c3RvbS1yYWRpb3MgaW5wdXRbdHlwZT0ncmFkaW8nXSArIGxhYmVsIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbn1cclxuLmN1c3RvbS1yYWRpb3MgaW5wdXRbdHlwZT0ncmFkaW8nXSArIGxhYmVsIHNwYW4gaW1nIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogI2NjY2NlODtcclxuICAgIGNvbG9yOiAjMTkxOTk2O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTkxOTk2O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=utilities-utilities-module-es5.js.map