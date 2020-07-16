import { Component, OnInit } from '@angular/core';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';


@Component({
  selector: 'app-access-utilities',
  templateUrl: './access-utilities.component.html',
  styleUrls: ['./access-utilities.component.css']
})
export class AccessUtilitiesComponent implements OnInit {
  private previousUrl: string = undefined;
  constructor(private modalService: NgbModal, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.events.pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        this.previousUrl = events[0].urlAfterRedirects;
        if (this.previousUrl === '/utilities/profile') {
          this.commonAlertPopUp('Allow mmob to share with octopus energy');
        }
      });
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
