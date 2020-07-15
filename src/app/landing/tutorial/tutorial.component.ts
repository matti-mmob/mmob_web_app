import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataService } from 'src/app/core/services/local-data.service';


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  //contains tutorial images
  public images = [];
  constructor(private boostrapSliderConfiguration: NgbCarouselConfig, private localDataService: LocalDataService) {
  }

  ngOnInit(): void {
    this.boostrapSliderConfiguration.wrap = true;
    this.boostrapSliderConfiguration.keyboard = true;
    this.boostrapSliderConfiguration.pauseOnHover = false;
    this.boostrapSliderConfiguration.showNavigationArrows = false;
    this.boostrapSliderConfiguration.interval = 1;
    this.images = this.localDataService.getTutorialImages();
  }
}