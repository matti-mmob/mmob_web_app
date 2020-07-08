import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  currentActiveFormControl: string;
  previousControlName: string;
  constructor(
    private assetsPipe: AssetsPathPipe,
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      twoFactorPassword: ['', Validators.required],
      age: ['', Validators.required],
      termAndCondition: ['', Validators.required],
    });
    this.validateFormNextStep();
  }

  /**
   * Enable only next form
   */
  validateFormNextStep() {
    const formValues = this.registrationForm.controls;
    Object.entries(formValues).every((key, value) => {
      const currentControlKey = key[0];
      const currentControlStatus = key[1]['status'];
      if (currentControlStatus === 'INVALID') {
        this.fieldsValidateService.validateAllFormFields(this.registrationForm);
        this.currentActiveFormControl = currentControlKey;
        return false;
      } else {
        this.previousControlName = currentControlKey;
        return true;
      }
    });
  }
}
