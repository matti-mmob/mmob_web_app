import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldsValidateService} from '../../service/fields-validate.service';
import {GetAddressService} from '../../shared/services/get-address-io/get-address.service';
import {UserService} from '../../shared/services/user/user.service';
import {Auth} from 'aws-amplify';
import {NgxSpinnerService} from 'ngx-spinner';
import {CommonService} from '../../shared/services/helper-services/common.service';
import {ConfirmationPopupComponent} from '../../shared/confirmation-popup/confirmation-popup.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {InformationPopupComponent} from '../../shared/information-popup/information-popup.component';

@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.css']
})
export class KycFormComponent implements OnInit {
  kycForm: FormGroup;
  addresses = [];

  constructor(private formBuilder: FormBuilder,
              private fieldsValidateService: FieldsValidateService,
              private getAddressService: GetAddressService,
              private userService: UserService,
              private spinner: NgxSpinnerService,
              private route: Router,
              private commonService: CommonService,
              private modalService: NgbModal) {
    this.getMyDetails();
  }

  ngOnInit(): void {
    this.kycForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      surName: ['', [Validators.required]],
      dobDay: ['1', []],
      dobMonth: ['1', []],
      dobYear: ['1992', []],
      postcode: ['', [Validators.required]],
      address: ['0', []],
    });
  }

  // this function validate form and redirect to next step
  onNext() {
    this.route.navigate(['kyc/selectId']);
  }

  getAddresses() {
    if (this.kycForm.value.postcode.length > 4) {
      this.getAddressService.findByPostCode(this.kycForm.value.postcode).subscribe(
        addressResponse => {
          console.log(addressResponse);
          this.addresses = addressResponse.addresses;
          if (addressResponse.addresses.length > 0) {
            this.kycForm.controls.address.setValue(0);
          }
        });
    }
  }

  onFormSubmit() {
    console.log(this.kycForm.value);
    if (this.kycForm.invalid) {
      this.fieldsValidateService.validateAllFormFields(this.kycForm);
      return true;
    }
    const formData = this.kycForm.value;
    console.log(formData);
    const data = {
      first_name: formData.firstName,
      surname: formData.surName,
      postcode: formData.postcode,
      address_1: this.addresses[Number(formData.address)].line_1,
      address_2: this.addresses[Number(formData.address)].line_2,
      dob: formData.dobYear + '-' + formData.dobMonth + '-' + formData.dobDay,
      email_address: this.commonService.getEmailAddress()
    };
    this.spinner.show();
    this.userService.updateUser(data)
      .subscribe(response => {
        console.log(response);
        this.spinner.hide();
        if (response.statusCode === 200) {
          this.route.navigate(['/kyc/selectId']);
        } else {
          console.log('ERROR!', response);
          this.showInfoPopup(response.message);
        }
      }, error => {
        console.log(error);
        this.spinner.hide();
        this.showInfoPopup(error.message);
      });
    console.log(data);
  }

  private getMyDetails() {
    this.spinner.show();
    this.userService.getUserByEmail({email_address: this.commonService.getEmailAddress()})
      .subscribe(response => {
        if (response.statusCode === 200 && response.data) {
          this.kycForm.controls.firstName.patchValue(response.data.first_name);
          this.kycForm.controls.surName.patchValue(response.data.surname);
          const dob = response.data.dob.split('-');
          const day = dob[2].indexOf('0') === 0 ? dob[2].charAt(1) : dob[2];
          this.kycForm.controls.dobDay.setValue(Number(day));
          this.kycForm.controls.dobMonth.setValue(Number(dob[1]));
          this.kycForm.controls.dobYear.setValue(Number(dob[0]));
          if (response.data.postcode != null) {
            this.getAddressService.findByPostCode(response.data.postcode)
              .subscribe(addressResponse => {
                addressResponse.addresses.forEach((address, i) => {
                  if (address.line_1 === response.data.address_1 && address.line_2 === response.data.address_2) {
                    address.isSelected = true;
                    this.kycForm.controls.address.setValue(i);
                  }
                });
                this.kycForm.controls.postcode.patchValue(response.data.postcode);
                this.addresses = addressResponse.addresses;
                console.log(addressResponse);
                this.spinner.hide();
              }, error => {
                console.log(error);
                this.spinner.hide();
              });
          } else {
            this.spinner.hide();
          }
        } else {
          this.spinner.hide();
          this.showInfoPopup(response.message);
        }
      }, error => {
        console.log(error);
        this.spinner.hide();
        this.showInfoPopup(error.message);
      });
  }

  private showInfoPopup(msg) {
    const modal = this.modalService.open(InformationPopupComponent, InformationPopupComponent.POP_UP_DEFAULT_PROPS);
    modal.componentInstance.confirmText = msg;
    modal.componentInstance.headerText = 'ERROR!';
    modal.result.then((data) => {
      if (data.isYesPressed) {
      }
    });
  }

}
