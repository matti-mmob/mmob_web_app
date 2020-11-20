(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MattiDownes\Documents\mmob\Git Projects\mmob_web_app\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_BASE_URL: 'https://cva32pwuib.execute-api.eu-west-2.amazonaws.com/dev/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BE8i":
/*!************************************************************!*\
  !*** ./src/app/shared/constant/navigation-url.constant.ts ***!
  \************************************************************/
/*! exports provided: NavigationUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationUrl", function() { return NavigationUrl; });
class NavigationUrl {
}
//GETTING_SETUP Module Url Constant
// NavigationUrl.GETTING_SETUP_MAIN_ROUTE
NavigationUrl.GETTING_SETUP_ROUTE = '/getting-setup';
// NavigationUrl.NAME
NavigationUrl.GETTING_SETUP_NAME = NavigationUrl.GETTING_SETUP_ROUTE + '/name';
// NavigationUrl.EMAIL
NavigationUrl.GETTING_SETUP_EMAIL = 'email';
// NavigationUrl.PASSWORD
NavigationUrl.GETTING_SETUP_PASSWORD = 'password';
// NavigationUrl.MOBILE
NavigationUrl.GETTING_SETUP_MOBILE = 'mobile';
// NavigationUrl.TWO_FACTOR_AUTHENTICATION
NavigationUrl.GETTING_SETUP_TWO_FACTOR_AUTHENTICATION = 'two-factor-authentication';
// NavigationUrl.TREMS_AND_CONDITION
NavigationUrl.GETTING_SETUP_TREMS_AND_CONDITION = 'terms-and-conditions';
// NavigationUrl.BANKS
NavigationUrl.GETTING_SETUP_BANKS = 'banks';
// NavigationUrl.REQUEST_BANK_DATA
NavigationUrl.GETTING_SETUP_REQUEST_BANK_DATA = 'request-bank-data';
// NavigationUrl.CONNECTING_BABK_ACCOUNT_MAIN_ROUTE
NavigationUrl.CONNECTING_BABK_ACCOUNT_ROUTE = 'connecting-bank-account';
// NavigationUrl.TWO_FACTOR_AUTHENTICATION
NavigationUrl.CONNECTING_BABK_ACCOUNT_TWO_FACTOR_AUTHENTICATION = NavigationUrl.CONNECTING_BABK_ACCOUNT_ROUTE + '/two-factor-authentication';
// NavigationUrl.BANK_ADDED
NavigationUrl.CONNECTING_BABK_ACCOUNT_BANK_ADDED = NavigationUrl.CONNECTING_BABK_ACCOUNT_ROUTE + '/bank-added';
// NavigationUrl.INSURANCE_MAIN_ROUTE
NavigationUrl.INSURANCE_ROUTE = 'insurance';
// NavigationUrl.INSURANCE_HOME
NavigationUrl.INSURANCE_HOME = NavigationUrl.INSURANCE_ROUTE + '/insurance-home';
// NavigationUrl.BANK_ADDED
NavigationUrl.AML_ONBOARDING = NavigationUrl.INSURANCE_ROUTE + '/aml-onboarding';
// NavigationUrl.MARKETPLACE
NavigationUrl.MARKETPLACE = 'marketPlace';
// NavigationUrl.INVESTMENTS
NavigationUrl.INVESTMENTS = 'investments';
// NavigationUrl.TUTORIAL
NavigationUrl.TUTORIALS = 'tutorial';
// NavigationUrl.LOGIN_MAIN_ROUTE
NavigationUrl.LOGIN_ROUTE = 'login';
// NavigationUrl.LOGIN_ROUTE
NavigationUrl.LOGIN = NavigationUrl.LOGIN_ROUTE + '/login';
// NavigationUrl.FORGOT_PASSWORD
NavigationUrl.FORGOT_PASSWORD = NavigationUrl.LOGIN_ROUTE + '/forgot-password';
// NavigationUrl.RESET_PASSWORD
NavigationUrl.RESET_PASSWORD = NavigationUrl.LOGIN_ROUTE + '/reset-password';
// NavigationUrl.VERIFY_EMAIL
NavigationUrl.VERIFY_EMAIL = NavigationUrl.LOGIN_ROUTE + '/verify-email';
// NavigationUrl.YIELDER_LOGIN
NavigationUrl.YIELDER_LOGIN = 'login';
// NavigationUrl.YIELDER_SIGNUP
NavigationUrl.YIELDER_SIGNUP = 'sign-up';
// NavigationUrl.YIELDER_INVESTMENT
NavigationUrl.YIELDER_INVESTMENT = 'yielder-investment';
NavigationUrl.YIELDER_ASSET_DETAILS = 'yielder-asset-details';


/***/ }),

/***/ "LjFu":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].currentAuthenticatedUser().then(() => {
            return true;
        }).catch(() => {
            this.router.navigate(['/']);
            return false;
        });
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aws-exports */ "rzrB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'MMOB | Dashboard';
        aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Amplify"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "rzrB":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "eu-west-2",
    "aws_cognito_identity_pool_id": "eu-west-2:18aed5d0-e65d-4efe-b102-2bcae8a0a71d",
    "aws_cognito_region": "eu-west-2",
    "aws_user_pools_id": "eu-west-2_2Q3gl3EG1",
    "aws_user_pools_web_client_id": "1nrc8h2siugvjpeum0ggtj58ub",
    "oauth": {
        "domain": "mmob1c9544a5-1c9544a5-mmobdev.auth.eu-west-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://test.dev.service.mmob.com/dashboard/",
        "redirectSignOut": "https://test.dev.service.mmob.com/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS"
};


/* harmony default export */ __webpack_exports__["default"] = (awsmobile);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/constant/navigation-url.constant */ "BE8i");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "LjFu");






const routes = [
    {
        path: 'dashboard',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~getting-setup-getting-setup-module~insurance-insurance-module~inv~4ce9ca73"), __webpack_require__.e("default~dashboard-dashboard-module~insurance-insurance-module~investments-investments-module~kyc-kyc~bf756276"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then((routeModule) => routeModule.DashboardModule),
    },
    {
        path: 'getting-setup',
        loadChildren: () => Promise.all(/*! import() | getting-setup-getting-setup-module */[__webpack_require__.e("default~dashboard-dashboard-module~getting-setup-getting-setup-module~insurance-insurance-module~inv~4ce9ca73"), __webpack_require__.e("common"), __webpack_require__.e("getting-setup-getting-setup-module")]).then(__webpack_require__.bind(null, /*! ./getting-setup/getting-setup.module */ "OCiz")).then((routeModule) => routeModule.GettingSetupModule),
    },
    {
        path: 'kyc',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | kyc-kyc-module */[__webpack_require__.e("default~dashboard-dashboard-module~getting-setup-getting-setup-module~insurance-insurance-module~inv~4ce9ca73"), __webpack_require__.e("default~dashboard-dashboard-module~insurance-insurance-module~investments-investments-module~kyc-kyc~bf756276"), __webpack_require__.e("common"), __webpack_require__.e("kyc-kyc-module")]).then(__webpack_require__.bind(null, /*! ./kyc/kyc.module */ "5aMK")).then((routeModule) => routeModule.KycModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | landing-landing-module */[__webpack_require__.e("default~dashboard-dashboard-module~getting-setup-getting-setup-module~insurance-insurance-module~inv~4ce9ca73"), __webpack_require__.e("common"), __webpack_require__.e("landing-landing-module")]).then(__webpack_require__.bind(null, /*! ./landing/landing.module */ "WMCE")).then((routeModule) => routeModule.LandingModule),
    },
    {
        path: 'insurance',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | insurance-insurance-module */[__webpack_require__.e("default~dashboard-dashboard-module~getting-setup-getting-setup-module~insurance-insurance-module~inv~4ce9ca73"), __webpack_require__.e("default~dashboard-dashboard-module~insurance-insurance-module~investments-investments-module~kyc-kyc~bf756276"), __webpack_require__.e("common"), __webpack_require__.e("insurance-insurance-module")]).then(__webpack_require__.bind(null, /*! ./insurance/insurance.module */ "hsp1")).then((routeModule) => routeModule.InsuranceModule),
    },
    {
        path: _shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__["NavigationUrl"].MARKETPLACE,
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | market-place-market-place-module */[__webpack_require__.e("default~dashboard-dashboard-module~getting-setup-getting-setup-module~insurance-insurance-module~inv~4ce9ca73"), __webpack_require__.e("default~dashboard-dashboard-module~insurance-insurance-module~investments-investments-module~kyc-kyc~bf756276"), __webpack_require__.e("common"), __webpack_require__.e("market-place-market-place-module")]).then(__webpack_require__.bind(null, /*! ./market-place/market-place.module */ "XJJU")).then((routeModule) => routeModule.MarketPlaceModule),
    },
    {
        path: _shared_constant_navigation_url_constant__WEBPACK_IMPORTED_MODULE_2__["NavigationUrl"].INVESTMENTS,
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | investments-investments-module */[__webpack_require__.e("default~dashboard-dashboard-module~getting-setup-getting-setup-module~insurance-insurance-module~inv~4ce9ca73"), __webpack_require__.e("default~dashboard-dashboard-module~insurance-insurance-module~investments-investments-module~kyc-kyc~bf756276"), __webpack_require__.e("common"), __webpack_require__.e("investments-investments-module")]).then(__webpack_require__.bind(null, /*! ./investments/investments.module */ "wEQX")).then((routeModule) => routeModule.InvestmentsModule),
    },
    {
        path: 'utilities',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | utilities-utilities-module */[__webpack_require__.e("default~dashboard-dashboard-module~getting-setup-getting-setup-module~insurance-insurance-module~inv~4ce9ca73"), __webpack_require__.e("default~dashboard-dashboard-module~insurance-insurance-module~investments-investments-module~kyc-kyc~bf756276"), __webpack_require__.e("common"), __webpack_require__.e("utilities-utilities-module")]).then(__webpack_require__.bind(null, /*! ./utilities/utilities.module */ "egEE")).then((routeModule) => routeModule.UtilitiesModule),
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~dashboard-dashboard-module~getting-setup-getting-setup-module~insurance-insurance-module~inv~4ce9ca73"), __webpack_require__.e("default~dashboard-dashboard-module~insurance-insurance-module~investments-investments-module~kyc-kyc~bf756276"), __webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then((routeModule) => routeModule.LoginModule),
    },
    {
        path: 'merchants',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | merchants-merchants-module */[__webpack_require__.e("default~dashboard-dashboard-module~getting-setup-getting-setup-module~insurance-insurance-module~inv~4ce9ca73"), __webpack_require__.e("default~dashboard-dashboard-module~insurance-insurance-module~investments-investments-module~kyc-kyc~bf756276"), __webpack_require__.e("common"), __webpack_require__.e("merchants-merchants-module")]).then(__webpack_require__.bind(null, /*! ./merchants/merchants.module */ "DGzT")).then((routeModule) => routeModule.MerchantsModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map