import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataService } from 'src/app/core/services/local-data.service';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { Constant } from 'src/app/shared/constant/constant';


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  //contains tutorial images
  public images = [];
  constructor(private boostrapSliderConfiguration: NgbCarouselConfig, private localDataService: LocalDataService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.boostrapSliderConfiguration.wrap = true;
    this.boostrapSliderConfiguration.keyboard = true;
    this.boostrapSliderConfiguration.pauseOnHover = false;
    this.boostrapSliderConfiguration.showNavigationArrows = false;
    this.boostrapSliderConfiguration.interval = 1;
    this.images = this.localDataService.getTutorialImages();
  }

  // function to open popup
  continue() {
    const modalRefForFirstConfirm = this.modalService.open(ConfirmationPopupComponent, { backdrop: 'static', keyboard: false });
    modalRefForFirstConfirm.componentInstance.confirmText = Constant.TUTORIAL_CONFIRMATION_TEXT;
    modalRefForFirstConfirm.componentInstance.secondButtonText = 'Okay';
    modalRefForFirstConfirm.result.then(
      data => {
      },
      () => {
      }
    );
  }
}
