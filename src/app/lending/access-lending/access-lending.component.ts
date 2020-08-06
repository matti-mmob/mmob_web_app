import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Constant } from 'src/app/shared/constant/constant';


@Component({
  selector: 'app-access-lending',
  templateUrl: './access-lending.component.html',
  styleUrls: ['./access-lending.component.css']
})
export class AccessLendingComponent implements OnInit {
  lending: FormGroup;
  //Navigation Url Constanst
  navigationUrl = NavigationUrl;
  url:string;
  constructor(
    private assetsPipe: AssetsPathPipe,
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService,
    private route: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.initializeForm();
    this.url=NavigationUrl.GETTING_SETUP_ROUTE;
  }

  /**
   *  This function will used to Prepare Form Fields.
   */
  initializeForm() {
    this.lending = this.formBuilder.group({
    });
  }
  /**
   * this function validate form and redirect to next step.
   */
  onNext() {
    this.commonAlertPopUp();
  }
  /**
     * this function set properties for popup
     */
  commonAlertPopUp() {
    const modal = this.showPopup();
    modal.componentInstance.confirmText = Constant.LENDING_CONFIRM_TEXT;
    modal.componentInstance.headerText = Constant.DEFAULT_HEADER_TEXT
    modal.result.then((data) => {
      if (data.isYesPressed) {
        this.route.navigate(['/kyc']);
      }
    });
  }

  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, { backdrop: 'static', keyboard: false });
  }

  
}
