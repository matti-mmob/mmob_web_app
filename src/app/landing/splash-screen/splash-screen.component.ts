import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }
  joinMmob() {
    this.route.navigate(['tutorial']);
  }

  alreadyMember() {
    Auth.federatedSignIn().then(value => console.log(value));
  }
}
