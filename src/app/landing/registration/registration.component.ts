import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  nameForm: FormGroup;
  emailForm: FormGroup;
  passwordForm: FormGroup;
  mobileForm: FormGroup;
  twoFactorForm: FormGroup;
  termConditionForm: FormGroup;
  banksDetailForm: FormGroup;
  requestDataForm: FormGroup;
  isNameForm = true;
  isEmailForm = false;
  isPasswordForm = false;
  isMobileForm = false;
  isTwoFactorForm = false;
  isTermConditionForm = false;
  isBanksDetailForm = false;
  isRequestDataForm = false;
  constructor(
    private assetsPipe: AssetsPathPipe,
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService,) { }

  ngOnInit() {
    this.nameForm = this.formBuilder.group({
      name: ['', Validators.required],
    });

    this.emailForm = this.formBuilder.group({
      email: ['', Validators.required],
    });

    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
    });

    this.mobileForm = this.formBuilder.group({
      mobile: ['', Validators.required],
    });
    this.twoFactorForm = this.formBuilder.group({
      twoFactorPassword: ['', Validators.required],
    });
    this.termConditionForm = this.formBuilder.group({
      age: ['', Validators.required],
      termAndCondition: ['', Validators.required],
    });

    this.banksDetailForm = this.formBuilder.group({
      // name: ['', Validators.required],
      // email: ['', Validators.required],
    });

    this.requestDataForm = this.formBuilder.group({
      // name: ['', Validators.required],
      // email: ['', Validators.required],
    });



  }

  /**
   * Enable only next form 
   * @param form group name 
   */
  onPrevious(form = null) {
    this.disableAllForms();
    this.showHideForms(form);
  }

  /**
   *Enable only previous form 
   * @param form group name 
   */
  onNext(form = null) {
    this.disableAllForms();
    this.showHideForms(form);
  }
  /**
   *Enable perticular forms
   * @param form group name 
   */
  showHideForms(fromName) {
    console.log(fromName);
    switch (fromName) {
      case 'nameForm':
        this.isNameForm = true;
        break;
      case 'emailForm':
        this.isEmailForm = true;
        break;
      case 'passwordForm':
        this.isPasswordForm = true;
        break;
      case 'mobileForm':
        this.isMobileForm = true;
        break;
      case 'twoFactorForm':
        this.isTwoFactorForm = true;
        break;
      case 'termConditionForm':
        this.isTermConditionForm = true;
        break;
      case 'banksDetailForm':
        this.isBanksDetailForm = true;
        break;
      case 'requestDataForm':
        this.isRequestDataForm = true;
        break;

      default:
        this.disableAllForms();
        break;
    }
  }
  /**
  *Disable all forms
  * @param form group name 
  */
  disableAllForms() {
    this.isNameForm = false;
    this.isPasswordForm = false;
    this.isMobileForm = false;
    this.isTwoFactorForm = false;
    this.isTermConditionForm = false;
    this.isBanksDetailForm = false;
    this.isEmailForm = false;
    this.isRequestDataForm = false;
  }
}
