import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {KycFormService} from '../kyc-form-service/kyc-form.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-upload-id',
  templateUrl: './upload-id.component.html',
  styleUrls: ['./upload-id.component.css']
})
export class UploadIdComponent implements OnInit {

  public idProofBase64Str;
  public additionalIdProofBase64Str;

  constructor(private route: Router,
              private spinner: NgxSpinnerService,
              private kycFormService: KycFormService) {
  }

  ngOnInit(): void {
  }

  onNext() {
    this.route.navigate(['kyc/drivingLicense']);
  }

  uploadProofEvent(event) {
    this.spinner.show();
    const files = event.target.files;
    this.kycFormService.idProofFile = files[0];
    // tslint:disable-next-line:no-unused-expression
    new Promise((resolve, reject) => {
      const idProofFr = new FileReader();
      idProofFr.addEventListener('load', (e) => {
        this.idProofBase64Str = e.target.result;
        resolve({});
        this.spinner.hide();
      });
      idProofFr.readAsDataURL(this.kycFormService.idProofFile);
    });
  }

  uploadAdditionalProofEvent(event) {
    this.spinner.show();
    const files = event.target.files;
    this.kycFormService.additionalProofFile = files[0];
    // tslint:disable-next-line:no-unused-expression
    new Promise((resolve, reject) => {
      const idProofFr = new FileReader();
      idProofFr.addEventListener('load', (e) => {
        this.additionalIdProofBase64Str = e.target.result;
        resolve({});
        this.spinner.hide();
      });
      idProofFr.readAsDataURL(this.kycFormService.additionalProofFile);
    });
  }

  showButton() {
    return this.kycFormService.idProofFile ? true : false;
  }
}
