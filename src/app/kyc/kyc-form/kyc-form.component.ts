import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldsValidateService} from '../../service/fields-validate.service';
import {GetAddressService} from '../../shared/services/get-address-io/get-address.service';
import {UserService} from '../../shared/services/user/user.service';
import {Auth} from 'aws-amplify';
import {NgxSpinnerService} from 'ngx-spinner';

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
              private route: Router) {
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
      dob: formData.dobYear + '-' + formData.dobMonth + '-' + formData.dobDay
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
        }
      });
    console.log(data);
  }

  private getMyDetails() {
    this.spinner.show();
    this.userService.getUserByEmail({email_address: 'gaurav.kumar@ficode.com'})
      .subscribe(response => {
        this.kycForm.controls.firstName.patchValue(response.data.first_name);
        this.kycForm.controls.surName.patchValue(response.data.surname);
        const dob = response.data.dob.split('-');
        console.log(dob);
        this.kycForm.controls.dobDay.setValue(Number(dob[2]));
        this.kycForm.controls.dobMonth.setValue(Number(dob[1]));
        this.kycForm.controls.dobYear.setValue(Number(dob[0]));
        if (response.data.postcode != null) {
          this.getAddressService.findByPostCode('response.data.postcode')
            .subscribe(addressResponse => {
              addressResponse.addresses.forEach((address, i) => {
                if (address.line_1 === response.data.address_1 && address.line_2 === response.data.address_2) {
                  // if (address.line_1 === 'Canada Square (Pavilion) Ltd' && address.line_2 === '1 Canada Square') {
                  address.isSelected = true;
                  this.kycForm.controls.address.setValue(i);
                }
              });
              this.kycForm.controls.postcode.patchValue(response.data.postcode);
              this.addresses = addressResponse.addresses;
              console.log(addressResponse);
              this.spinner.hide();
            });
        } else {
          this.spinner.hide();
        }
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }
}
