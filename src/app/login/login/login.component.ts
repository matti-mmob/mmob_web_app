import {Component, OnInit} from '@angular/core';
import {AssetsPathPipe} from 'src/app/shared/pipes/assets-path.pipe';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldsValidateService} from 'src/app/service/fields-validate.service';
import {Router} from '@angular/router';
import {NavigationUrl} from 'src/app/shared/constant/navigation-url.constant';
import {CustomValidators} from 'src/app/shared/validators/custom-validators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
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
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, CustomValidators.emailCustomValidation]],
      password: ['', [Validators.required]],
    });
  }
  //this function validate form and redirect to next step
  onNext() {
    if (this.loginForm.invalid) {
      return this.fieldsValidateService.validateAllFormFields(this.loginForm);
    } else {
      this.route.navigate(['dashboard']);
    }
  }

}
