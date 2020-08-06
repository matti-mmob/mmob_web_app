import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-address-proof',
  templateUrl: './upload-address-proof.component.html',
  styleUrls: ['./upload-address-proof.component.css']
})
export class UploadAddressProofComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  //this function validate form and redirect to next step
  onNext() {
    this.route.navigate(['kyc/addressProof']);
  }
}
