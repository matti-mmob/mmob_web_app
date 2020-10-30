import {Component, OnInit} from '@angular/core';
import {Constant} from 'src/app/shared/constant/constant';
import {ConfirmationPopupComponent} from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-merchants-home',
  templateUrl: './merchants-home.component.html',
  styleUrls: ['./merchants-home.component.css']
})
export class MerchantsHomeComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  commonAlertPopUp() {
    const modal = this.showPopup();
    modal.componentInstance.confirmText = Constant.MERCHANTS_CONFIRM_TEXT;
    modal.componentInstance.headerText = Constant.INSURANCE_HEADER_TEXT;
    modal.result.then((data) => {
      if (data.isYesPressed) {
        this.route.navigate(['/kyc']);
      }
    });
  }

  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, ConfirmationPopupComponent.POP_UP_DEFAULT_PROPS);
  }

}
