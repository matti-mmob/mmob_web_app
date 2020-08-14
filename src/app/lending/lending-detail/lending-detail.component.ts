import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Constant } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-lending-detail',
  templateUrl: './lending-detail.component.html',
  styleUrls: ['./lending-detail.component.css']
})
export class LendingDetailComponent implements OnInit {
  lendingDetailForm: FormGroup;
  //Navigation Url Constanst
  navigationUrl = NavigationUrl;
  constructor(
    private assetsPipe: AssetsPathPipe,
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService,
    private route: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  /**
    *  This function will used to Prepare Form Fields.
    */
  initializeForm() {
    this.lendingDetailForm = this.formBuilder.group({
      totalIncome: ['', [Validators.required]],
      employementStatus: ['', [Validators.required]],
      employementDuration: ['', [Validators.required]],
    });
  }
  //this function validate form and redirect to next step
  onNext() {
    if (this.lendingDetailForm.invalid) {
      return this.fieldsValidateService.validateAllFormFields(this.lendingDetailForm);
    }
  }
}
