import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { Router } from '@angular/router';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';
import { LocalDataService } from 'src/app/core/services/local-data.service';
import { Constant } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  banksDetailForm: FormGroup;
  //Navigation Url Constanst
  navigationUrl = NavigationUrl;
  banksArray = [];
  constructor(
    private assetsPipe: AssetsPathPipe,
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService,
    private route: Router,
    private localDataService: LocalDataService) {
  }

  ngOnInit() {
    this.initializeForm();
    this.banksArray = this.localDataService.getALlBanks();
  }

  /**
   *  This function will used to Prepare Form Fields.
   */
  initializeForm() {
    this.banksDetailForm = this.formBuilder.group({});
  }
  //this function validate form and redirect to next step
  onNext() {
    this.route.navigate(['/getting-setup/request-bank-data']);
  }
  setBankName(name) {
    window.localStorage[Constant.BANK_NAME] = name;
  }
}
