(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["merchants-merchants-module"],{

/***/ "DGzT":
/*!***********************************************!*\
  !*** ./src/app/merchants/merchants.module.ts ***!
  \***********************************************/
/*! exports provided: MerchantsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantsModule", function() { return MerchantsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _merchants_home_merchants_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merchants-home/merchants-home.component */ "ptV5");
/* harmony import */ var _merchants_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merchants-routing.module */ "vdbr");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.module */ "Tx//");






class MerchantsModule {
}
MerchantsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MerchantsModule });
MerchantsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MerchantsModule_Factory(t) { return new (t || MerchantsModule)(); }, imports: [[
            _merchants_routing_module__WEBPACK_IMPORTED_MODULE_2__["MerchantsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MerchantsModule, { declarations: [_merchants_home_merchants_home_component__WEBPACK_IMPORTED_MODULE_1__["MerchantsHomeComponent"]], imports: [_merchants_routing_module__WEBPACK_IMPORTED_MODULE_2__["MerchantsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MerchantsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_merchants_home_merchants_home_component__WEBPACK_IMPORTED_MODULE_1__["MerchantsHomeComponent"]],
                imports: [
                    _merchants_routing_module__WEBPACK_IMPORTED_MODULE_2__["MerchantsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ptV5":
/*!**********************************************************************!*\
  !*** ./src/app/merchants/merchants-home/merchants-home.component.ts ***!
  \**********************************************************************/
/*! exports provided: MerchantsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantsHomeComponent", function() { return MerchantsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constant/constant */ "8pUG");
/* harmony import */ var src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/confirmation-popup/confirmation-popup.component */ "WjRx");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/assets-path.pipe */ "VrQ/");








class MerchantsHomeComponent {
    constructor(modalService, route) {
        this.modalService = modalService;
        this.route = route;
    }
    ngOnInit() {
    }
    commonAlertPopUp() {
        const modal = this.showPopup();
        modal.componentInstance.confirmText = src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_1__["Constant"].MERCHANTS_CONFIRM_TEXT;
        modal.componentInstance.headerText = src_app_shared_constant_constant__WEBPACK_IMPORTED_MODULE_1__["Constant"].INSURANCE_HEADER_TEXT;
        modal.result.then((data) => {
            if (data.isYesPressed) {
                this.route.navigate(['/kyc']);
            }
        });
    }
    showPopup() {
        return this.modalService.open(src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationPopupComponent"], src_app_shared_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationPopupComponent"].POP_UP_DEFAULT_PROPS);
    }
}
MerchantsHomeComponent.ɵfac = function MerchantsHomeComponent_Factory(t) { return new (t || MerchantsHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MerchantsHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MerchantsHomeComponent, selectors: [["app-merchants-home"]], decls: 45, vars: 21, consts: [[1, "insurance-sec"], ["alt", "utilitie icon", 3, "src"], ["type", "search", 1, "Utilitie-search-box"], [1, "brand-box", 3, "click"], [1, "row", "justify-content-between", "px-1"], [1, "logo-box"], ["alt", "cuvva", 3, "src"], [1, "time-box"], ["alt", "clock image", 3, "src"], [1, "utilitie-dis"], ["alt", "brolly", 3, "src"], ["alt", "lemonade", 3, "src"]], template: function MerchantsHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "assetsPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Merchants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MerchantsHomeComponent_Template_div_click_9_listener() { return ctx.commonAlertPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "assetsPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "assetsPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "10 mins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Argos, Get what you want today with Fast Track delivery, 7 days a week. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MerchantsHomeComponent_Template_div_click_21_listener() { return ctx.commonAlertPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "assetsPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "assetsPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "8 mins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " JD Sports, undisputed king of trainers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MerchantsHomeComponent_Template_div_click_33_listener() { return ctx.commonAlertPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "assetsPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "assetsPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "3 mins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Amazon, shop on our official site and save money. Free UK delivery on eligible orders! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "images/merchants-icon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, "images/cuvva-img.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "images/clock.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 13, "images/brolly-img.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 15, "images/clock.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 17, "images/lemonade-img.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 19, "images/clock.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], pipes: [_shared_pipes_assets_path_pipe__WEBPACK_IMPORTED_MODULE_6__["AssetsPathPipe"]], styles: [".Utilitie[_ngcontent-%COMP%], .insurance-sec[_ngcontent-%COMP%] {\r\n    max-width: 760px;\r\n    margin: 58px auto 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.Utilitie-search-box[_ngcontent-%COMP%] {\r\n    border: 1px solid grey;\r\n    border-radius: 20px;\r\n    box-shadow: none;\r\n    outline: none;\r\n    background: #efefef url('search-icon.png') no-repeat scroll right center;\r\n    background-size: 30px;\r\n    cursor: pointer;\r\n    width: 70%;\r\n    padding: 2px 30px 2px 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.time-box[_ngcontent-%COMP%] {\r\n    padding: 5px 15px;\r\n    border-radius: 20px;\r\n    max-width: 120px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background: #ccc\r\n\r\n}\r\n\r\n.brand-box[_ngcontent-%COMP%] {\r\n    padding: 10px 25px;\r\n    margin: 20px 0px;\r\n    border: 1px solid gray;\r\n    border-radius: 20px;\r\n}\r\n\r\n.brand-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0 !important;\r\n}\r\n\r\n.time-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n}\r\n\r\n.time-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #fff;\r\n    font-size: 14px;\r\n}\r\n\r\n.logo-box[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    text-align: left;\r\n}\r\n\r\n.utilitie-dis[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 520px;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n    margin: 5px 0 0;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:nth-of-type(2) {\r\n    border: 1px solid #93d8d5;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:first-of-type {\r\n    border: 1px solid #8d2fb9;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:last-of-type {\r\n    border: 1px solid #8af181;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:nth-of-type(2)   .time-box[_ngcontent-%COMP%] {\r\n    background-color: #93d8d5;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:first-of-type   .time-box[_ngcontent-%COMP%] {\r\n    background-color: #8d2fb9;\r\n}\r\n\r\n.Utilitie[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:last-of-type   .time-box[_ngcontent-%COMP%] {\r\n    background-color: #8af181;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:first-of-type {\r\n    border: 1px solid #7571f4;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:first-of-type   .time-box[_ngcontent-%COMP%] {\r\n    background: #7571f4;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:nth-of-type(2) {\r\n    border: 1px solid #fd9c9c;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:nth-of-type(2)   .time-box[_ngcontent-%COMP%] {\r\n    background: #fd9c9c;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:last-of-type {\r\n    border: 1px solid #f490d4;\r\n}\r\n\r\n.insurance-sec[_ngcontent-%COMP%]   .brand-box[_ngcontent-%COMP%]:last-of-type   .time-box[_ngcontent-%COMP%] {\r\n    background: #f490d4;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n    .click-button[_ngcontent-%COMP%] {\r\n        width: 146px;\r\n        margin: 0 4px;\r\n\r\n    }\r\n\r\n    .join-memebers[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        margin: 25px 0 30px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .setup-box[_ngcontent-%COMP%], .setup-box[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%] {\r\n        margin: 20px 0 0;\r\n    }\r\n\r\n    .logo-img[_ngcontent-%COMP%] {\r\n        margin: 0 auto 20px;\r\n        width: 200px;\r\n    }\r\n\r\n    .align-center[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        padding: 15px;\r\n    }\r\n\r\n    #slider[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n    }\r\n\r\n    .account-table[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n\r\n    .account-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\r\n        width: 10%;\r\n    }\r\n\r\n    .account-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\r\n        width: 88%;\r\n    }\r\n\r\n    .Utilitie[_ngcontent-%COMP%]   .time-box[_ngcontent-%COMP%] {\r\n        width: 120px;\r\n        max-width: 100%;\r\n    }\r\n\r\n    .Utilitie[_ngcontent-%COMP%]   .utilitie-dis[_ngcontent-%COMP%] {\r\n        margin: 15px 0 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyY2hhbnRzL21lcmNoYW50cy1ob21lL21lcmNoYW50cy1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0VBQXdGO0lBQ3hGLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkI7O0FBRUo7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQSxvR0FBb0c7O0FBQ3BHO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTs7SUFFakI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tZXJjaGFudHMvbWVyY2hhbnRzLWhvbWUvbWVyY2hhbnRzLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5VdGlsaXRpZSwgLmluc3VyYW5jZS1zZWMge1xyXG4gICAgbWF4LXdpZHRoOiA3NjBweDtcclxuICAgIG1hcmdpbjogNThweCBhdXRvIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLlV0aWxpdGllLXNlYXJjaC1ib3gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWYgdXJsKHNyYy9hc3NldHMvaW1hZ2VzL3NlYXJjaC1pY29uLnBuZykgbm8tcmVwZWF0IHNjcm9sbCByaWdodCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZzogMnB4IDMwcHggMnB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi50aW1lLWJveCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNjY2NcclxuXHJcbn1cclxuLmJyYW5kLWJveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmJyYW5kLWJveCAucm93IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG4udGltZS1ib3ggaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcbi50aW1lLWJveCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5sb2dvLWJveCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi51dGlsaXRpZS1kaXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luOiA1cHggMCAwO1xyXG59XHJcbi5VdGlsaXRpZSAuYnJhbmQtYm94Om50aC1vZi10eXBlKDIpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5M2Q4ZDU7XHJcbn1cclxuLlV0aWxpdGllIC5icmFuZC1ib3g6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGQyZmI5O1xyXG59XHJcbi5VdGlsaXRpZSAuYnJhbmQtYm94Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGFmMTgxO1xyXG59XHJcblxyXG4uVXRpbGl0aWUgLmJyYW5kLWJveDpudGgtb2YtdHlwZSgyKSAudGltZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDhkNTtcclxufVxyXG4uVXRpbGl0aWUgLmJyYW5kLWJveDpmaXJzdC1vZi10eXBlIC50aW1lLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQyZmI5O1xyXG59XHJcbi5VdGlsaXRpZSAuYnJhbmQtYm94Omxhc3Qtb2YtdHlwZSAudGltZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhZjE4MTtcclxufVxyXG5cclxuLmluc3VyYW5jZS1zZWMgLmJyYW5kLWJveDpmaXJzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NTcxZjQ7XHJcbn1cclxuXHJcbi5pbnN1cmFuY2Utc2VjIC5icmFuZC1ib3g6Zmlyc3Qtb2YtdHlwZSAudGltZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogIzc1NzFmNDtcclxufVxyXG5cclxuLmluc3VyYW5jZS1zZWMgLmJyYW5kLWJveDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmQ5YzljO1xyXG59XHJcblxyXG4uaW5zdXJhbmNlLXNlYyAuYnJhbmQtYm94Om50aC1vZi10eXBlKDIpIC50aW1lLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmQ5YzljO1xyXG59XHJcblxyXG4uaW5zdXJhbmNlLXNlYyAuYnJhbmQtYm94Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjQ5MGQ0O1xyXG59XHJcblxyXG4uaW5zdXJhbmNlLXNlYyAuYnJhbmQtYm94Omxhc3Qtb2YtdHlwZSAudGltZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0OTBkNDtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqTWVkaWEgcXVlcnkgZm90IHV0aWxpdGllcyBzdGFydHMgaGVyZSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jbGljay1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxNDZweDtcclxuICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuam9pbi1tZW1lYmVycyBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNldHVwLWJveCwgLnNldHVwLWJveCAubmV4dC1idG4ge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28taW1nIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWxpZ24tY2VudGVyIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAjc2xpZGVyIC5pdGVtIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY2NvdW50LXRhYmxlIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjY291bnQtdGFibGUgdGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjY291bnQtdGFibGUgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICB3aWR0aDogODglO1xyXG4gICAgfVxyXG5cclxuICAgIC5VdGlsaXRpZSAudGltZS1ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLlV0aWxpdGllIC51dGlsaXRpZS1kaXMge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwIDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MerchantsHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-merchants-home',
                templateUrl: './merchants-home.component.html',
                styleUrls: ['./merchants-home.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "vdbr":
/*!*******************************************************!*\
  !*** ./src/app/merchants/merchants-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MerchantsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantsRoutingModule", function() { return MerchantsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _merchants_home_merchants_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merchants-home/merchants-home.component */ "ptV5");
/* harmony import */ var _layout_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/main-content/main-content.component */ "o/Qx");






const routes = [
    {
        path: '',
        component: _layout_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_3__["MainContentComponent"],
        children: [{ path: '', component: _merchants_home_merchants_home_component__WEBPACK_IMPORTED_MODULE_2__["MerchantsHomeComponent"] }],
    }
];
class MerchantsRoutingModule {
}
MerchantsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MerchantsRoutingModule });
MerchantsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MerchantsRoutingModule_Factory(t) { return new (t || MerchantsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MerchantsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MerchantsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=merchants-merchants-module-es2015.js.map