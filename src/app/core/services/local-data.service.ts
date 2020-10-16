import {Injectable} from '@angular/core';
import * as tutorialImages from '../../shared/localData/tutorialImages.json';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  public images = [];
  constructor() {
  }

  // this function is use to get all images of tutorial page
  getTutorialImages() {
    this.images = tutorialImages['default'];
    return this.images;
  }
}
