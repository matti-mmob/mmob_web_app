import { Injectable } from '@angular/core';
import * as tutorialImages from '../../shared/localData/tutorialImages.json';
import * as bankData from '../../shared/localData/bankData.json';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  public images = [];
  public allBanks = [];
  constructor() {
  }

  // this function is use to get all images of tutorial page
  getTutorialImages() {
    this.images = tutorialImages['default'];
    return this.images;
  }
  // this function is use to get all banks
  getALlBanks() {
    this.allBanks = bankData['default'];
    return this.allBanks;
  }
}
