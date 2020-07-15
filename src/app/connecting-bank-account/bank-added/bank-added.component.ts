import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';

@Component({
  selector: 'app-bank-added',
  templateUrl: './bank-added.component.html',
  styleUrls: ['./bank-added.component.css']
})
export class BankAddedComponent implements OnInit {
  twoFactorForm: FormGroup;
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
    this.twoFactorForm = this.formBuilder.group({
  
    });
  }
  //this function validate form and redirect to next step
  onNext() {
    this.route.navigate(['/' + NavigationUrl.CONNECTING_BABK_ACCOUNT_BANK_ADDED]);
  }
}

