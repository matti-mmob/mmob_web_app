import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-yielders-investments',
  templateUrl: './yielders-investments.component.html',
  styleUrls: ['./yielders-investments.component.css']
})
export class YieldersInvestmentsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigate(["/investments/yielder-asset-details"]);
  }

}
