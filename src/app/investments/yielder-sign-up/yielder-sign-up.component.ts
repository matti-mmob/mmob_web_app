import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
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
  preferenceList = [{ id: 1, name: "SMS" }, { id: 2, name: "Phone" }, { id: 3, name: "E-mail" }];
  showValidation = false;
  constructor(private formBuilder: FormBuilder, private fieldsValidateService: FieldsValidateService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  //function to initialize forms
  initializeForm() {
    this.yielderSignUpForm = this.formBuilder.group({
      firstName: ['', ValidationService.required],
      lastName: ['', ValidationService.required],
      email: ['', ValidationService.required, ValidationService.emailValidator],
      day: ['', ValidationService.required],
      month: ['', ValidationService.required],
      year: ['', ValidationService.required],
      postcode: ['', ValidationService.required],
      address1: ['', ValidationService.required],
      address2: ['', ValidationService.required],
      city: ['', ValidationService.required],
      state: ['', ValidationService.required],
      country: ['', ValidationService.required],
      phone: ['', ValidationService.required],
      mobileNumber: ['', [ValidationService.required,ValidationService.allowNumberOnly]],
      address3: ['', ValidationService.required],
      investors: ['', ValidationService.required],
      marketingPreference: this.formBuilder.array([])
    });
  }
  //submit signup form
  submitForm() {
    this.checkValidation();
    if (this.yielderSignUpForm.invalid || !this.yielderSignUpForm.value.marketingPreference.length) {
      return this.fieldsValidateService.validateAllFormFields(this.yielderSignUpForm);
    } else {
      this.router.navigate(["/investments/login"]);
    }
  }
  // function to navidate to login screen
  onClickLogin() {
    this.router.navigate(["/investments/login"]);
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.yielderSignUpForm.get('marketingPreference') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    this.checkValidation();
  }
  checkValidation() {
    if (this.yielderSignUpForm.value.marketingPreference.length) {
      this.showValidation = false
    } else {
      this.showValidation = true;
    }
  }
}
