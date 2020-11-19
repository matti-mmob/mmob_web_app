import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {KycFormService} from '../kyc-form-service/kyc-form.service';
import {KycVerificationService} from '../../shared/services/kyc-verification-service/kyc-verification.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {CommonService} from '../../shared/services/helper-services/common.service';
import {InformationPopupComponent} from '../../shared/information-popup/information-popup.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-address-proof',
  templateUrl: './address-proof.component.html',
  styleUrls: ['./address-proof.component.css']
})
export class AddressProofComponent implements OnInit {
  public addressProofBase64Str;

  constructor(private route: Router, private kycFormService: KycFormService,
              private kycVerificationService: KycVerificationService,
              private spinner: NgxSpinnerService,
              private commonService: CommonService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    if (this.kycFormService.addressProofFile) {
      this.spinner.show();
      // tslint:disable-next-line:no-unused-expression
      new Promise((resolve, reject) => {
        const addressProofFr = new FileReader();
        addressProofFr.addEventListener('load', (e) => {
          this.addressProofBase64Str = e.target.result;
          this.spinner.hide();
          resolve({});
        });
        addressProofFr.readAsDataURL(this.kycFormService.addressProofFile);
      });
    }
  }

  // this function validate form and redirect to next step
  onNext() {
    const data = {
      proof: this.addressProofBase64Str,
      email_address: this.commonService.getEmailAddress()
    };
    this.spinner.show();
    this.kycVerificationService.verifyAddressProof(data)
      .subscribe(response => {
        this.spinner.hide();
        console.log(response);
        if (response.statusCode === 200 && response.verification_status === 'accepted') {
          this.route.navigate(['kyc/finalVerification']);
        } else if (response.statusCode === 200 && response.verification_status === 'declined') {
          console.log('ERROR!', response);
          this.showInfoPopup(response.message);
        } else {
          console.log('ERROR!', response);
          this.showInfoPopup(response.message);
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
        this.route.navigate(['kyc/finalVerification']);
      }
    });
  }
}

