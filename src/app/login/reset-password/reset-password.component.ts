import {Component, OnInit} from '@angular/core';
import {AssetsPathPipe} from 'src/app/shared/pipes/assets-path.pipe';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldsValidateService} from 'src/app/service/fields-validate.service';
import {Router} from '@angular/router';
import {NavigationUrl} from 'src/app/shared/constant/navigation-url.constant';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
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
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  //this function validate form and redirect to next step
  onNext() {
    if (this.resetPasswordForm.invalid) {
      return this.fieldsValidateService.validateAllFormFields(this.resetPasswordForm);
    }
  }

}
