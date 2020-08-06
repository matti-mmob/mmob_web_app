import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.css']
})
export class KycFormComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  //this function validate form and redirect to next step
  onNext() {
    this.route.navigate(['kyc/selectId']);
  }
}
