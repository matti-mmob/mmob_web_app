import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-final-verification',
  templateUrl: './final-verification.component.html',
  styleUrls: ['./final-verification.component.css']
})
export class FinalVerificationComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }
//this function validate form and redirect to next step
  onNext() {
    this.route.navigate(['/dashboard']);
  }
}
