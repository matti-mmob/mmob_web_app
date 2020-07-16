import { Component, OnInit } from '@angular/core';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PreviousRouteService } from 'src/app/service/previous-route.service';
import { Constant } from 'src/app/shared/constant/constant';


@Component({
  selector: 'app-access-utilities',
  templateUrl: './access-utilities.component.html',
  styleUrls: ['./access-utilities.component.css']
})
export class AccessUtilitiesComponent implements OnInit {
  private previousUrl: string = undefined;
  constant= Constant;
  constructor(private modalService: NgbModal, private previousRouteService: PreviousRouteService, private route: Router) {
  }

  ngOnInit(): void {
    this.previousUrl = this.previousRouteService.getPreviousUrl();
    if (this.previousUrl === '/utilities/profile') {
      this.commonAlertPopUp(Constant.SHARE_DETIALS_WITH_OCTOPUS_ENERGY);
    }
  }

  // method to call pop up
  commonAlertPopUp(confirmationText) {
    const modalRefForFirstConfirm = this.modalService.open(ConfirmationPopupComponent, { backdrop: 'static', keyboard: false });
    modalRefForFirstConfirm.componentInstance.confirmText = confirmationText;
    modalRefForFirstConfirm.result.then(
      data => {
        if (data.isYesPressed && confirmationText === Constant.USER_DETAILS_TO_ACCESS_UTILITIES) {
          this.route.navigate(['utilities/profile']);
        }
      },
      () => {
      }
    );
  }
}
