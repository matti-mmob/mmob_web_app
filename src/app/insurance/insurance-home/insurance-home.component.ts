import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Constant } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-insurance-home',
  templateUrl: './insurance-home.component.html',
  styleUrls: ['./insurance-home.component.css']
})
export class InsuranceHomeComponent implements OnInit {
  insurance: FormGroup;
  //Navigation Url Constanst
  navigationUrl = NavigationUrl;
  constructor(
    private assetsPipe: AssetsPathPipe,
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService,
    private route: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.initializeForm();
  }

  /**
   *  This function will used to Prepare Form Fields.
   */
  initializeForm() {
    this.insurance = this.formBuilder.group({
    });
  }
  //this function validate form and redirect to next step
  onNext() {
    this.commonAlertPopUp();
  }

  commonAlertPopUp() {
    const modal = this.showPopup();
    modal.componentInstance.confirmText = Constant.INSURANCE_CONFIRM_TEXT;
    modal.componentInstance.headerText = Constant.INSURANCE_HEADER_TEXT;
    modal.componentInstance.firstButtonText = Constant.INSURANCE_FIRST_BUTTON_TEXT;
    modal.componentInstance.secondButtonText = Constant.INSURANCE_SECOND_BUTTON_TEXT;
    modal.result.then((data) => {
      if (data.isYesPressed) {
        this.route.navigate([NavigationUrl.AML_ONBOARDING]);
      }
    });
  }

  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, {backdrop: 'static', keyboard: false});
  }

}
