import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {KycFormService} from '../kyc-form-service/kyc-form.service';
import {KycVerificationService} from '../../shared/services/kyc-verification-service/kyc-verification.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {CommonService} from '../../shared/services/helper-services/common.service';
import {InformationPopupComponent} from '../../shared/information-popup/information-popup.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-driving-license',
  templateUrl: './driving-license.component.html',
  styleUrls: ['./driving-license.component.css']
})
export class DrivingLicenseComponent implements OnInit {

  public idProofBase64Str;
  public additionalIdProofBase64Str;

  constructor(private route: Router, private kycFormService: KycFormService,
              private kycVerificationService: KycVerificationService,
              private spinner: NgxSpinnerService,
              private commonService: CommonService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    if (this.kycFormService.idProofFile) {
      this.spinner.show();
      // tslint:disable-next-line:no-unused-expression
      new Promise((resolve, reject) => {
        const idProofFr = new FileReader();
        idProofFr.addEventListener('load', (e) => {
          this.idProofBase64Str = e.target.result;
          this.spinner.hide();
          resolve({});
        });
        idProofFr.readAsDataURL(this.kycFormService.idProofFile);
      });
    }
    if (this.kycFormService.additionalProofFile) {
      this.spinner.show();
      // tslint:disable-next-line:no-unused-expression
      new Promise((resolve, reject) => {
        const additionalIdProofFr = new FileReader();
        additionalIdProofFr.addEventListener('load', (e) => {
          this.additionalIdProofBase64Str = e.target.result;
          this.spinner.hide();
          resolve({});
        });
        additionalIdProofFr.readAsDataURL(this.kycFormService.additionalProofFile);
      });
    }
  }

  // this function validate form and redirect to next step
  onNext() {
    const verificationData = {
      proof: this.idProofBase64Str,
      additional_proof: this.additionalIdProofBase64Str,
      email_address: this.commonService.getEmailAddress(),
    };
    this.spinner.show();
    this.kycVerificationService.verifyIdProof(verificationData)
      .subscribe(response => {
        this.spinner.hide();
        console.log(response);
        if (response.statusCode === 200 && response.verification_status === 'accepted') {
          this.route.navigate(['kyc/uploadAddressProof']);
        } else if (response.statusCode === 200 && response.verification_status === 'declined') {
          this.showInfoPopup(response.message);
          console.log('ERROR!', response);
        } else {
          this.showInfoPopup(response.message);
          console.log('ERROR!', response);
        }
      }, error => {
        console.log(error);
        this.spinner.hide();
        this.showInfoPopup(error.message);
      });
  }

  private showInfoPopup(msg) {
    const modal = this.modalService.open(InformationPopupComponent, InformationPopupComponent.POP_UP_DEFAULT_PROPS);
    modal.componentInstance.confirmText = msg;
    modal.componentInstance.headerText = 'ERROR!';
    modal.result.then((data) => {
      if (data.isYesPressed) {
        // TODO: Remove it on final submit
        this.route.navigate(['kyc/uploadAddressProof']);
      }
    });
  }
}
