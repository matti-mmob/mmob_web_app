import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-proof',
  templateUrl: './address-proof.component.html',
  styleUrls: ['./address-proof.component.css']
})
export class AddressProofComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  //this function validate form and redirect to next step
  onNext() {
    this.route.navigate(['kyc/finalVerification']);
  }
}
