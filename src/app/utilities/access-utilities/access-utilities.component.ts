import { Component, OnInit } from '@angular/core';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-utilities',
  templateUrl: './access-utilities.component.html',
  styleUrls: ['./access-utilities.component.css']
})
export class AccessUtilitiesComponent implements OnInit {
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  constructor(private modalService: NgbModal, private route: Router) { 
  }
  

  ngOnInit(): void {
   
  }


  // method to call pop up
  commonAlertPopUp(confirmationText) {
    const modalRefForFirstConfirm = this.modalService.open(ConfirmationPopupComponent, { backdrop: 'static', keyboard: false });
    modalRefForFirstConfirm.componentInstance.confirmText = confirmationText;
    modalRefForFirstConfirm.result.then(
      data => {
        if (data.isYesPressed) {
          this.route.navigate(['utilities/profile']);
        }
      },
      () => {
      }
    );
  }
}
