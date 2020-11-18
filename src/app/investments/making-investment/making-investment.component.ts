import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationPopupComponent} from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import {Router} from '@angular/router';
import {KycVerificationService} from '../../shared/services/kyc-verification-service/kyc-verification.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-making-investment',
  templateUrl: './making-investment.component.html',
  styleUrls: ['./making-investment.component.css']
})
export class MakingInvestmentComponent implements OnInit {

  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService,
              private route: Router, private kycVerificationService: KycVerificationService) {
  }

  ngOnInit(): void {
  }

  // method to call pop up
  commonAlertPopUp(confirmationText) {
    this.spinner.show();
    return new Promise((resolve, reject) => {

      this.kycVerificationService.checkKycStatus({email_address: 'gaurav.kumar@ficode.com'})
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
          }
        });
    });
  }

  // shows confirmation popup
  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, ConfirmationPopupComponent.POP_UP_DEFAULT_PROPS);
  }
}
