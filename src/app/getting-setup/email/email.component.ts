import {Component, OnInit} from '@angular/core';
import {AssetsPathPipe} from 'src/app/shared/pipes/assets-path.pipe';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldsValidateService} from 'src/app/service/fields-validate.service';
import {Router} from '@angular/router';
import {NavigationUrl} from 'src/app/shared/constant/navigation-url.constant';
import {CustomValidators} from 'src/app/shared/validators/custom-validators';
import {ConfirmationPopupComponent} from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constant} from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emailForm: FormGroup;
  //Navigation Url Constanst
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
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, CustomValidators.emailCustomValidation]],
    });
  }
  //this function validate form and redirect to next step
  onNext() {
    if (this.emailForm.invalid) {
      return this.fieldsValidateService.validateAllFormFields(this.emailForm);
    } else {
      this.commonAlertPopUp();
    }
  }

  commonAlertPopUp() {
    const modal = this.showPopup();
    modal.componentInstance.confirmText = Constant.EMAIL_CONFIRM_TEXT;
    modal.componentInstance.firstButtonText = Constant.EMAIL_FIRST_BUTTON_TEXT;
    modal.componentInstance.secondButtonText = Constant.EMAIL_SECOND_BUTTON_TEXT;
    modal.result.then((data) => {
      if (data.isYesPressed) {
        this.route.navigate(['/getting-setup/password']);
      }
    });
  }
  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, ConfirmationPopupComponent.POP_UP_DEFAULT_PROPS);
  }
}
