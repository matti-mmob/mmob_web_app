// import {Injectable} from '@angular/core';
// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
// import {Observable, throwError} from 'rxjs';
// import {catchError} from 'rxjs/operators';
// import {NgxSpinnerService} from 'ngx-spinner';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
// import {AuthenticationService} from '../services/authentication.service';
// import {FlashMessageService} from '../services/flash-message.service';
// import {UtilityService} from '../utils/utility.service';
// import {Constants} from '../utils/Constants';
// import {ConfirmPopupComponent} from '../confirm-popup/confirm-popup.component';
// import {Response} from '../enums/response.enum';
// import {ConfirmationPopupComponent} from '../utils/confirmation-popup/confirmation-popup.component';
//
// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   storeUserDetials;
//
//   constructor(private authenticationService: AuthenticationService, public flashMessageService: FlashMessageService, public utilityService: UtilityService, private spinner: NgxSpinnerService, private modalService: NgbModal, private localStorageService: LocalStorageService, private trialsService: TrialsService) {
//     this.storeUserDetials = JSON.parse(this.localStorageService.getCurrentUserData());
//   }
//
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//       catchError(err => {
//         const errorMessage = err.error.message || err.statusText;
//         this.spinner.hide();
//         if (!navigator.onLine) {
//           this.utilityService.setMessage(this.flashMessageService, Constants.INTERNET_ISSUE_MESSAGE, 'danger');
//         } else if (err.status === Response.ERROR_1) {
//           if (this.storeUserDetials) {
//             this.authenticationService.logout();
//           }
//           this.utilityService.setMessage(this.flashMessageService, err.error.message, 'danger');
//           this.authenticationService.logout();
//         } else if (err.status === Response.ERROR_2) {
//           this.utilityService.setMessage(this.flashMessageService, err.error.message, 'danger');
//         } else if (err.status === Response.ERROR_4) {
//           this.utilityService.setMessage(this.flashMessageService, err.error.message, 'danger');
//         } else if (err.status === Response.ERROR_5) {
//           this.utilityService.setMessage(this.flashMessageService, err.error.message, 'danger');
//         } else if (err.status === Response.ERROR_6) {
//           this.utilityService.setMessage(this.flashMessageService, err.error.message, 'danger');
//         } else if (err.status === Response.ERROR_7) {
//           this.utilityService.setMessage(this.flashMessageService, err.error.message, 'danger');
//         } else if (err.status === Response.ERROR_8) {
//           this.utilityService.setMessage(this.flashMessageService, err.error.message, 'danger');
//         } else if (err.status === Response.ERROR_3) {
//           const modalRefForFirstConfirm = this.modalService.open(ConfirmationPopupComponent, {backdrop: 'static'});
//           modalRefForFirstConfirm.componentInstance.confirmText = err.error.message;
//           modalRefForFirstConfirm.result.then((data) => {
//               if (data.isYesPressed) {
//                 this.spinner.show();
//                 this.trialsService.getTrialById(this.utilityService.getSelectedId(), Constants.WEB).subscribe(response => {
//                   this.spinner.hide();
//                 });
//               }
//             }
//           );
//         }
//         return throwError(errorMessage);
//       })
//     );
//   }
//
//   showPopUp() {
//     return this.modalService.open(ConfirmPopupComponent, {backdrop: 'static', keyboard: false});
//   }
// }
