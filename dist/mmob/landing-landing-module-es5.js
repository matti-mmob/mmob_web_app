(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"], {
    /***/
    "V9LK":
    /*!***************************************************!*\
      !*** ./src/app/landing/landing-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: LandingRoutingModule */

    /***/
    function V9LK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function () {
        return LandingRoutingModule;
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


      var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./splash-screen/splash-screen.component */
      "z/i4");
      /* harmony import */


      var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tutorial/tutorial.component */
      "iguq");
      /* harmony import */


      var _shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/constant/navigation-url.constant */
      "BE8i");

      var routes = [{
        path: '',
        component: _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]
      }, {
        path: _shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_4__["NavigationUrl"].TUTORIALS,
        component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_3__["TutorialComponent"]
      }];

      var LandingRoutingModule = function LandingRoutingModule() {
        _classCallCheck(this, LandingRoutingModule);
      };

      LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LandingRoutingModule
      });
      LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LandingRoutingModule_Factory(t) {
          return new (t || LandingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingRoutingModule, [{
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
    "WMCE":
    /*!*******************************************!*\
      !*** ./src/app/landing/landing.module.ts ***!
      \*******************************************/

    /*! exports provided: LandingModule */

    /***/
    function WMCE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingModule", function () {
        return LandingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./splash-screen/splash-screen.component */
      "z/i4");
      /* harmony import */


      var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tutorial/tutorial.component */
      "iguq");
      /* harmony import */


      var _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing-routing.module */
      "V9LK");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/core.module */
      "pKmL");

      var LandingModule = function LandingModule() {
        _classCallCheck(this, LandingModule);
      };

      LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LandingModule
      });
      LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LandingModule_Factory(t) {
          return new (t || LandingModule)();
        },
        imports: [[_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, {
          declarations: [_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_1__["SplashScreenComponent"], _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_2__["TutorialComponent"]],
          imports: [_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_1__["SplashScreenComponent"], _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_2__["TutorialComponent"]],
            imports: [_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "iguq":
    /*!********************************************************!*\
      !*** ./src/app/landing/tutorial/tutorial.component.ts ***!
      \********************************************************/

    /*! exports provided: TutorialComponent */

    /***/
    function iguq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TutorialComponent", function () {
        return TutorialComponent;
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


      var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! aws-amplify */
      "AL3R");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_core_services_local_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/local-data.service */
      "qwTe");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TutorialComponent_4_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var img_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r20.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r20.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r20.data);
        }
      }

      function TutorialComponent_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TutorialComponent_4_ng_template_0_Template, 7, 3, "ng-template", 7);
        }
      }

      var TutorialComponent = /*#__PURE__*/function () {
        function TutorialComponent(boostrapSliderConfiguration, localDataService, modalService, route) {
          _classCallCheck(this, TutorialComponent);

          this.boostrapSliderConfiguration = boostrapSliderConfiguration;
          this.localDataService = localDataService;
          this.modalService = modalService;
          this.route = route; //contains tutorial images

          this.images = [];
        }

        _createClass(TutorialComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.boostrapSliderConfiguration.wrap = true;
            this.boostrapSliderConfiguration.keyboard = true;
            this.boostrapSliderConfiguration.pauseOnHover = false;
            this.boostrapSliderConfiguration.showNavigationArrows = false;
            this.boostrapSliderConfiguration.interval = 2000;
            this.images = this.localDataService.getTutorialImages();
          } // function to open popup

        }, {
          key: "continue",
          value: function _continue() {
            var modalRefForFirstConfirm = this.modalService.open(src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationPopupComponent"], src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationPopupComponent"].POP_UP_DEFAULT_PROPS);
            modalRefForFirstConfirm.componentInstance.confirmText = src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].TUTORIAL_CONFIRMATION_TEXT;
            modalRefForFirstConfirm.componentInstance.secondButtonText = 'Okay';
            modalRefForFirstConfirm.result.then(function (data) {
              aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn();
            }, function () {});
          }
        }, {
          key: "onSkip",
          value: function onSkip() {
            aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn();
          }
        }]);

        return TutorialComponent;
      }();

      TutorialComponent.ɵfac = function TutorialComponent_Factory(t) {
        return new (t || TutorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_local_data_service__WEBPACK_IMPORTED_MODULE_5__["LocalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      TutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TutorialComponent,
        selectors: [["app-tutorial"]],
        decls: 10,
        vars: 1,
        consts: [[1, "align-center"], ["data-ride", "carousel", "id", "carouselExampleIndicators", 1, "carousel", "slide"], [1, "carousel-inner"], [4, "ngFor", "ngForOf"], [1, "button-set-alt"], ["href", "javascript:void(0)", 1, "click-button", 3, "click"], ["href", "javascript:void(0)", 1, "skip-btn", 3, "click"], ["ngbSlide", ""], [1, "carousel-item", "active"], ["alt", "slide-img", 3, "src"]],
        template: function TutorialComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngb-carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TutorialComponent_4_Template, 1, 0, undefined, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialComponent_Template_a_click_6_listener() {
              return ctx["continue"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialComponent_Template_a_click_8_listener() {
              return ctx.onSkip();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Skip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]],
        styles: [".carousel[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 0 0 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    max-width: -webkit-max-content;\r\n    max-width: -moz-max-content;\r\n    max-width: max-content;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    margin: 0 0 15px;\r\n}\r\n\r\nol.carousel-indicators[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    bottom: 0px;\r\n}\r\n\r\n.carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    background: #869791;\r\n    width: 12px;\r\n    height: 12px;\r\n    margin: 5px 16px;\r\n    border-radius: 20px;\r\n    max-width: none;\r\n    display: block;\r\n    flex: inherit;\r\n}\r\n\r\n.carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    background: #00008b;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 25px 0 15px;\r\n    color: #000;\r\n}\r\n\r\n.button-set-alt[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin-top: 0px;\r\n}\r\n\r\na.skip-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin: 10px auto;\r\n    color: #000;\r\n}\r\n\r\n.click-button[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    background: #00008b;\r\n    color: #fff;\r\n    height: 50px;\r\n    width: 240px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    margin: 0 8px;\r\n    box-shadow: 0 2px 4px #9a9797;\r\n}\r\n\r\n.bg-alt[_ngcontent-%COMP%], .click-button[_ngcontent-%COMP%]:hover {\r\n    background: #b5b5ff;\r\n    color: #3e295f;\r\n}\r\n\r\n.bg-alt[_ngcontent-%COMP%]:hover {\r\n    background: #00008b;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy90dXRvcmlhbC90dXRvcmlhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDhCQUFzQjtJQUF0QiwyQkFBc0I7SUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDAgMjBweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIgaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0gaDUge1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweDtcclxufVxyXG5cclxub2wuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3R0b206IDBweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgYmFja2dyb3VuZDogIzg2OTc5MTtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luOiA1cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsZXg6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDhiO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSBwIHtcclxuICAgIG1hcmdpbjogMjVweCAwIDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmJ1dHRvbi1zZXQtYWx0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbmEuc2tpcC1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmNsaWNrLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDA4YjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4ICM5YTk3OTc7XHJcbn1cclxuXHJcbi5iZy1hbHQsXHJcbi5jbGljay1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2I1YjVmZjtcclxuICAgIGNvbG9yOiAjM2UyOTVmO1xyXG59XHJcblxyXG4uYmctYWx0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwOGI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorialComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tutorial',
            templateUrl: './tutorial.component.html',
            styleUrls: ['./tutorial.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]
          }, {
            type: src_app_core_services_local_data_service__WEBPACK_IMPORTED_MODULE_5__["LocalDataService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");

      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "z/i4":
    /*!******************************************************************!*\
      !*** ./src/app/landing/splash-screen/splash-screen.component.ts ***!
      \******************************************************************/

    /*! exports provided: SplashScreenComponent */

    /***/
    function zI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function () {
        return SplashScreenComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! aws-amplify */
      "AL3R");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/pipes/assets-path.pipe */
      "VrQ/");

      var SplashScreenComponent = /*#__PURE__*/function () {
        function SplashScreenComponent(route) {
          _classCallCheck(this, SplashScreenComponent);

          this.route = route;
        }

        _createClass(SplashScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "joinMmob",
          value: function joinMmob() {
            this.route.navigate(['tutorial']);
          }
        }, {
          key: "alreadyMember",
          value: function alreadyMember() {
            aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].federatedSignIn().then(function (value) {
              return console.log(value);
            });
          }
        }]);

        return SplashScreenComponent;
      }();

      SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) {
        return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      SplashScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SplashScreenComponent,
        selectors: [["app-splash-screen"]],
        decls: 11,
        vars: 3,
        consts: [[1, "join-memebers"], [1, "site-logo"], ["alt", "logo", 3, "src"], [1, "button-set"], ["href", "javascript:void(0)", 1, "click-button", 3, "click"], ["href", "javascript:void(0)", 1, "click-button", "bg-alt", 3, "click"]],
        template: function SplashScreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "assetsPath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The one-stop shop for your Finances.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SplashScreenComponent_Template_a_click_7_listener() {
              return ctx.joinMmob();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Join the mmob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SplashScreenComponent_Template_a_click_9_listener() {
              return ctx.alreadyMember();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Already a member");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "images/logo.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        pipes: [_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_3__["AssetsPathPipe"]],
        styles: [".join-memebers[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 15px;\r\n}\r\n.join-memebers[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 25px 0 35px;\r\n    color: #3e295f;\r\n}\r\n.click-button[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    background: #00008b;\r\n    color: #fff;\r\n    height: 50px;\r\n    width: 240px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    margin: 0 8px;\r\n    box-shadow: 0 2px 4px #9a9797;\r\n    font-weight: 700;\r\n}\r\n.bg-alt[_ngcontent-%COMP%], .click-button[_ngcontent-%COMP%]:hover {\r\n    background: #b5b5ff;\r\n    color: #3e295f;\r\n}\r\n.bg-alt[_ngcontent-%COMP%]:hover {\r\n    background: #00008b;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL3NwbGFzaC1zY3JlZW4vc3BsYXNoLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpvaW4tbWVtZWJlcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmpvaW4tbWVtZWJlcnMgaDMge1xyXG4gICAgbWFyZ2luOiAyNXB4IDAgMzVweDtcclxuICAgIGNvbG9yOiAjM2UyOTVmO1xyXG59XHJcbi5jbGljay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwOGI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAwIDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjOWE5Nzk3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uYmctYWx0LCAuY2xpY2stYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiNWI1ZmY7XHJcbiAgICBjb2xvcjogIzNlMjk1ZjtcclxufVxyXG4uYmctYWx0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwOGI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-splash-screen',
            templateUrl: './splash-screen.component.html',
            styleUrls: ['./splash-screen.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=landing-landing-module-es5.js.map