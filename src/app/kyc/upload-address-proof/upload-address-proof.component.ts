import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {KycFormService} from '../kyc-form-service/kyc-form.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-upload-address-proof',
  templateUrl: './upload-address-proof.component.html',
  styleUrls: ['./upload-address-proof.component.css']
})
export class UploadAddressProofComponent implements OnInit {
  public addressProofBase64Str;

  constructor(private route: Router, private kycFormService: KycFormService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
  }

  // this function validate form and redirect to next step
  onNext() {
    this.route.navigate(['kyc/addressProof']);
  }

  uploadAddressProofEvent(event) {
    const files = event.target.files;
    this.kycFormService.addressProofFile = files[0];
    this.spinner.show();
    // tslint:disable-next-line:no-unused-expression
    new Promise((resolve, reject) => {
      const addressProofFr = new FileReader();
      addressProofFr.addEventListener('load', (e) => {
        this.addressProofBase64Str = e.target.result;
        this.spinner.hide();
        resolve({});
      });
      addressProofFr.readAsDataURL(this.kycFormService.addressProofFile);
    });
  }

  showButton() {
    return this.kycFormService.addressProofFile ? true : false;
  }
}
