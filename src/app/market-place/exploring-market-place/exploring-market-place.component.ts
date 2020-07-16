import { Component, OnInit } from '@angular/core';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';

@Component({
  selector: 'app-exploring-market-place',
  templateUrl: './exploring-market-place.component.html',
  styleUrls: ['./exploring-market-place.component.css']
})
export class ExploringMarketPlaceComponent implements OnInit {
  navigationUrlConstants = NavigationUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
