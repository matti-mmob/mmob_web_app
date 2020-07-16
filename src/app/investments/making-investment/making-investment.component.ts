import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-making-investment',
  templateUrl: './making-investment.component.html',
  styleUrls: ['./making-investment.component.css']
})
export class MakingInvestmentComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // method to call pop up
  commonAlertPopUp(confirmationText) {
    const modal = this.showPopup();
    modal.componentInstance.confirmText = confirmationText;
  }
  // shows confirmation popup
  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, { backdrop: 'static', keyboard: false });
  }
}
