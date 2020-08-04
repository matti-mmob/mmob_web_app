import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  joinMmob() {
    this.route.navigate(['tutorial']);
  }

  alreadyMember() {
    this.route.navigate([NavigationUrl.LOGIN_ROUTE]);
  }
}
