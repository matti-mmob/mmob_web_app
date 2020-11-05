import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { InputControls } from 'src/app/shared/validations/InputControls';
import { ValidationService } from 'src/app/shared/validations/ValidationService';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';

@Component({
  selector: 'app-yielder-login',
  templateUrl: './yielder-login.component.html',
  styleUrls: ['./yielder-login.component.css']
})
export class YielderLoginComponent implements OnInit {
  yielderLoginForm: FormGroup;
  public inputControls = InputControls;
  constructor(private formBuilder: FormBuilder, private fieldsValidateService: FieldsValidateService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  //function to initialize form
  initializeForm() {
    this.yielderLoginForm = this.formBuilder.group({
      email: ['', ValidationService.required, ValidationService.emailValidator],
      password: ['', ValidationService.required]
    });
  }
  //submit login form
  submitForm() {
    if (this.yielderLoginForm.invalid) {
      return this.fieldsValidateService.validateAllFormFields(this.yielderLoginForm);
    } else {
      this.router.navigate(["/investments/yielder-investment"]);
    }
  }
  //function to redirect to sign-up
  onClickSignUp(){
    this.router.navigate(["/investments/sign-up"]);
  }
}
