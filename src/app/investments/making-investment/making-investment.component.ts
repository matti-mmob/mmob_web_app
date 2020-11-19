import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationPopupComponent} from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import {Router} from '@angular/router';
import {KycVerificationService} from '../../shared/services/kyc-verification-service/kyc-verification.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {CommonService} from '../../shared/services/helper-services/common.service';
import {InformationPopupComponent} from '../../shared/information-popup/information-popup.component';

@Component({
  selector: 'app-making-investment',
  templateUrl: './making-investment.component.html',
  styleUrls: ['./making-investment.component.css']
})
export class MakingInvestmentComponent implements OnInit {

  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService,
              private route: Router, private kycVerificationService: KycVerificationService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
  }

  // method to call pop up
  commonAlertPopUp(confirmationText) {
    this.spinner.show();
    return new Promise((resolve, reject) => {

      this.kycVerificationService.checkKycStatus({email_address: this.commonService.getEmailAddress()})
        .subscribe(response => {
          if (response.statusCode === 200) {
            this.spinner.hide();
            if (response.kycStatus) {
              const modal = this.showPopup();
              modal.componentInstance.confirmText = confirmationText;
              modal.result.then((data) => {
                if (data.isYesPressed) {
                  this.route.navigate(['/investments/login']);
                }
              });
            } else {
              const modal = this.showPopup();
              modal.componentInstance.confirmText = 'Complete your KYC first';
              modal.result.then((data) => {
                if (data.isYesPressed) {
                  this.route.navigate(['/kyc']);
                }
              });
            }
          } else {
            this.showInfoPopup(response.message);
          }
        }, error => {
          console.log(error);
          this.spinner.hide();
          this.showInfoPopup(error.message);
        });
    });
  }


  private showInfoPopup(msg) {
    const modal = this.modalService.open(InformationPopupComponent, InformationPopupComponent.POP_UP_DEFAULT_PROPS);
    modal.componentInstance.confirmText = msg;
    modal.componentInstance.headerText = 'ERROR!';
    modal.result.then((data) => {
      if (data.isYesPressed) {
      }
    });
  }
  // shows confirmation popup
  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, ConfirmationPopupComponent.POP_UP_DEFAULT_PROPS);
  }
}
