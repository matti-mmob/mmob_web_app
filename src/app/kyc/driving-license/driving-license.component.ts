import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driving-license',
  templateUrl: './driving-license.component.html',
  styleUrls: ['./driving-license.component.css']
})
export class DrivingLicenseComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  //this function validate form and redirect to next step
  onNext() {
    this.route.navigate(['kyc/uploadAddressProof']);
  }
}
