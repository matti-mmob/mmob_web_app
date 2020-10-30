import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { Router } from '@angular/router';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';
import { Constant } from 'src/app/shared/constant/constant';


@Component({
  selector: 'app-request-bank-data',
  templateUrl: './request-bank-data.component.html',
  styleUrls: ['./request-bank-data.component.css']
})
export class RequestBankDataComponent implements OnInit {
  requestBankDataForm: FormGroup;
  //Navigation Url Constanst
  navigationUrl = NavigationUrl;
  selectedBank;
  constructor(
    private assetsPipe: AssetsPathPipe,
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService,
    private route: Router) {
    this.selectedBank = localStorage.getItem(Constant.BANK_NAME);
  }

  ngOnInit() {
    this.initializeForm();
  }

  /**
   *  This function will used to Prepare Form Fields.
   */
  initializeForm() {
    this.requestBankDataForm = this.formBuilder.group({
      // age: ['', Validators.required],
      // termAndCondition: ['', Validators.required],
    });
  }
  //this function validate form and redirect to next step
  onDecline() {
    this.route.navigate(['/getting-setup/banks']);
    localStorage.removeItem(Constant.BANK_NAME);
  }
  onConfirm() {
    this.route.navigate(['login']);
  }
}
