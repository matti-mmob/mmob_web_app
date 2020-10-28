import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { Router } from '@angular/router';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { Constant } from 'src/app/shared/constant/constant';
import { TermsConditionsComponent } from 'src/app/shared/terms-conditions/terms-conditions.component';
import { PrivacyComponent } from 'src/app/shared/privacy/privacy.component';


@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
  termConditionForm: FormGroup;
  //Navigation Url Constants
  navigationUrl = NavigationUrl;
  constructor(
    private assetsPipe: AssetsPathPipe,
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService,
    private route: Router,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  /**
   *  This function will used to Prepare Form Fields.
   */
  initializeForm() {
    this.termConditionForm = this.formBuilder.group({
      age: ['', Validators.required],
      termAndCondition: ['', Validators.required],
    });
  }
  //this function validate form and redirect to next step
  onNext() {
    if (this.termConditionForm.invalid) {
      alert("Both checboxes are requried");
      return this.fieldsValidateService.validateAllFormFields(this.termConditionForm);

    } else {
      return this.modalService.open(PrivacyComponent, { backdrop: 'static', keyboard: false });
      //this.route.navigate(['/getting-setup/banks']);
      //this.showPopUp();
      //console.log('hi');
      // modal.componentInstance.confirmText = Constant.EMAIL_CONFIRM_TEXT;
    }
  }
  showPopUp() {
    return this.modalService.open(TermsConditionsComponent, { backdrop: 'static', keyboard: false });

  }
  onNextprivacy() {
    console.log('hi');
    this.showPopUp();
    // modal.componentInstance.confirmText = Constant.EMAIL_CONFIRM_TEXT;
  }
}
