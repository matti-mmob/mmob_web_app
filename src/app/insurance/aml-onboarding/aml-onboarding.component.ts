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
  selector: 'app-aml-onboarding',
  templateUrl: './aml-onboarding.component.html',
  styleUrls: ['./aml-onboarding.component.css']
})
export class AmlOnboardingComponent implements OnInit {
  onboardingFrom: FormGroup;
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
    this.onboardingFrom = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      sirName: ['', [Validators.required]],
      date: [''],
      month: [''],
      year: [''],
      postCode: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }
  //this function validate form and redirect to next step
  onNext() {
    if (this.onboardingFrom.invalid) {
      return this.fieldsValidateService.validateAllFormFields(this.onboardingFrom);
    }
    else {
      this.commonAlertPopUp();
    }
  }

  commonAlertPopUp() {
    const modal = this.showPopup();
    modal.componentInstance.confirmText = Constant.ONBOARD_CONFIRM_TEXT;
    modal.result.then((data) => {
      if (data.isYesPressed) {
        // this.route.navigate([NavigationUrl.GETTING_SETUP_PASSWORD]);
      }
    });
  }
  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, {backdrop: 'static', keyboard: false});
  }

}
