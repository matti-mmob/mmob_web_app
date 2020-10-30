import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationPopupComponent} from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-making-investment',
  templateUrl: './making-investment.component.html',
  styleUrls: ['./making-investment.component.css']
})
export class MakingInvestmentComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private route: Router,) {
  }

  ngOnInit(): void {
  }

  // method to call pop up
  commonAlertPopUp(confirmationText) {
    const modal = this.showPopup();
    modal.componentInstance.confirmText = confirmationText;
    modal.result.then((data) => {
      if (data.isYesPressed) {
        this.route.navigate(['/kyc']);
      }
    });
  }
  // shows confirmation popup
  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, ConfirmationPopupComponent.POP_UP_DEFAULT_PROPS);
  }
}
