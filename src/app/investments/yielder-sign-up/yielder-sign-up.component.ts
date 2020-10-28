import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { InputControls } from 'src/app/shared/validations/InputControls';
import { ValidationService } from 'src/app/shared/validations/ValidationService';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';

@Component({
  selector: 'app-yielder-sign-up',
  templateUrl: './yielder-sign-up.component.html',
  styleUrls: ['./yielder-sign-up.component.css']
})
export class YielderSignUpComponent implements OnInit {
  yielderSignUpForm: FormGroup;
  public inputControls = InputControls;
  constructor(private formBuilder: FormBuilder, private fieldsValidateService: FieldsValidateService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  //function to initialize forms
  initializeForm() {
    this.yielderSignUpForm = this.formBuilder.group({
      firstName: ['', ValidationService.required],
      lastName: ['', ValidationService.required],
      email: ['', ValidationService.required],
      day: ['', ValidationService.required],
      month: ['', ValidationService.required],
      year: ['', ValidationService.required],
      postcode: ['', ValidationService.required],
      address1: ['', ValidationService.required],
      address2: ['', ValidationService.required],
      city: ['', ValidationService.required],
      state: ['', ValidationService.required],
    });
  }
  //submit signup form
  submitForm() {
    if (this.yielderSignUpForm.invalid) {
      return this.fieldsValidateService.validateAllFormFields(this.yielderSignUpForm);
    } else {
      this.router.navigate(["/investments/login"]);
    }
  }
  // function to navidate to login screen
  onClickLogin() {
    this.router.navigate(["/investments/login"]);
  }
}
