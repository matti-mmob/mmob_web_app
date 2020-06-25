import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { Constant } from 'src/app/shared/constant/constant';
import * as Highcharts from 'highcharts';
import { ChartLabels } from 'src/app/shared/enum/chart-labels.enum';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  // store canvas
  canvas: any;
  // define canvas Context Type
  canvasContextType: any;
  // Chart Enum Label
  chartLabelEnum = ChartLabels;

  constructor(private assetsPipe: AssetsPathPipe) {}

  ngOnInit(): void {}

  /*
   * Chart will render after the View is loaded.
   */
  ngAfterViewInit() {
    // Generate the chart
    const _this = this;
    Highcharts.chart({
      chart: {
        renderTo: 'container',
        plotShadow: false,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        animation: false,
        formatter: function () {
          return this.point.name + '<br>£' + this.y;
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          dataLabels: {
            enabled: true,
            useHTML: true,
            formatter: function (this) {
              if (this.key) {
                return _this.createIconImages(this.key);
              }
            },
            style: {
              fontSize: '14px',
            },
          },
        },
      },
      series: [
        {
          type: 'pie',
          size: '100%',
          innerSize: '80%',
          states: {
            inactive: {
              opacity: 1,
            },
          },
          data: [
            {
              name: this.chartLabelEnum.CIMB_BANK_LABEL,
              y: 12394.34,
              color: '#fab9a2',
            },
            {
              name: this.chartLabelEnum.SANTANDER_LABEL,
              y: 5550.97,
              color: '#b0c1bf',
            },
            {
              name: this.chartLabelEnum.HSBC_LABEL,
              y: 23617.23,
              color: '#bddccb',
            },
            {
              name: this.chartLabelEnum.BARCLAYS_LABEL,
              y: 6823.83,
              color: '#ae96d2',
            },
          ],
        },
      ],
    });
  }

  /**
   * This function we return Icon Image
   * @param iconKey
   */
  private createIconImages(iconKey: string) {
    const iconImage = {
      HSBC:
        '<img  src="' +
        this.assetsPipe.transform('home.png', 'img') +
        '" style="vertical-align: middle; margin: 0 10px;">',
      Barclays:
        '<img  src="' +
        this.assetsPipe.transform('car-icon.png', 'img') +
        '" style="vertical-align: middle; margin: 0 10px;">',
      Santander:
        '<img  src="' +
        this.assetsPipe.transform('phone-icon.png', 'img') +
        '" style="vertical-align: middle; margin: 0 10px;">',
      'CIMB Bank':
        '<img  src="' +
        this.assetsPipe.transform('cart.png', 'img') +
        '" style="vertical-align: middle; margin: 0 10px;">',
    };
    return iconImage[iconKey];
  }
}
