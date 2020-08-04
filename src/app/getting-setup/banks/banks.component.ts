import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  banksDetailForm: FormGroup;
  //Navigation Url Constanst
  navigationUrl = NavigationUrl;
  constructor(
    private assetsPipe: AssetsPathPipe,
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService,
    private route: Router) { }

  ngOnInit() {
    this.initializeForm();
  }

  /**
   *  This function will used to Prepare Form Fields.
   */
  initializeForm() {
    this.banksDetailForm = this.formBuilder.group({
      // age: ['', Validators.required],
      // termAndCondition: ['', Validators.required],
    });
  }
  //this function validate form and redirect to next step
  onNext() {
    //if (this.banksDetailForm.invalid) {
    //  return this.fieldsValidateService.validateAllFormFields(this.banksDetailForm);
    // }
    // else {
    this.route.navigate([ '/getting-setup/request-bank-data']);
    // }
  }
}
