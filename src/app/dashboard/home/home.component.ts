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
    const __this = this;
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
		positioner: function () {
          return { x: 80, y: 50 };
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          dataLabels: {
            enabled: true,
            useHTML: true,
            formatter: function (this) {
              let labelImage;
              if (this.key) {
                switch (this.key) {
                  case ChartLabels.CIMB_Bank_LABEL:
                    labelImage = __this.assetsPipe.transform('cart.png', 'img');
                    break;
                  case ChartLabels.SANTANDER_LABEL:
                    labelImage = __this.assetsPipe.transform('Phone-icon.png', 'img');
                    break;
                  case ChartLabels.HSBC_LABEL:
                    labelImage = __this.assetsPipe.transform('Home.png', 'img');
                    break;
                  case ChartLabels.BARCLAYS_LABEL:
                    labelImage = __this.assetsPipe.transform('Car-icon.png', 'img');
                    break;
                }
              }
              return '<img  src="' + labelImage + '" style="vertical-align: middle; margin: 0 10px;">';
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
          innerSize: '75%',
          states: {
            inactive: {
              opacity: 1,
            },
          },
          data: [
            {
              name: this.chartLabelEnum.CIMB_Bank_LABEL,
              y: 12394.34,
              color: '#fab9a2', //cart-icon
            },
            {
              name: this.chartLabelEnum.SANTANDER_LABEL,
              y: 5550.97,
              color: '#b0c1bf', // phone-icon
            },
            {
              name: this.chartLabelEnum.HSBC_LABEL,
              y: 23617.23,
              color: '#bddccb', // home-icon
            },
            {
              name: this.chartLabelEnum.BARCLAYS_LABEL,
              y: 6823.83,
              color: '#ae96d2', // car-icon
            },
          ],
        },
      ],
    });
  }
}
