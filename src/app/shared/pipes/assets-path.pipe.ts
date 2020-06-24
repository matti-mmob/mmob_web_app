import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetsPath',
})
export class AssetsPathPipe implements PipeTransform {
  assetPath = 'assets';
  DS = '/';
  imagePath = 'images';
  svgPath = 'icons';
  baseUrl: string;

  constructor() {
    this.baseUrl = '';
  }

  transform(value: any, args?: any): any {
    let assetsPath = this.baseUrl + this.assetPath + this.DS;
    if (args) {
      switch (args) {
        case 'img':
          assetsPath += this.imagePath;
          assetsPath += this.DS;
          break;
      }
    }
    assetsPath += value;
    return assetsPath;
  }
}
