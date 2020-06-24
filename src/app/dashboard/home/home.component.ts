import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import 'chartjs-plugin-labels';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { Constant } from 'src/app/shared/constant/constant';
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

  constructor(private assetsPipe: AssetsPathPipe) {}

  ngOnInit(): void {}

  /*
   * Chart will render after the View is loaded.
   */
  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.canvasContextType = this.canvas.getContext('2d');
    // Initialize Chart
    const myChart = new Chart(this.canvasContextType, {
      type: 'doughnut', // Type Of Chart
      data: {
        labels: ['Phone Bills', 'Grocery Expenses', 'Car Fuel', 'House Expenses'],
        datasets: [
          {
            data: [5550.97, 12394.34, 6823.83, 23617.23],
            backgroundColor: [
              'rgba(176,193,191, 1)',
              'rgba(250,185,162, 1)',
              'rgba(174,150,210,1)',
              'rgba(189,220,203, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            title: function (tooltipItem, data) {
              return data['labels'][tooltipItem[0]['index']];
            },
            label: (item, data) => {
              return '£' + data['datasets'][0]['data'][item['index']];
            },
          },
        },
        responsive: false,
        display: true,
        cutoutPercentage: Constant.CHART_CUTOFF_PERCENTAGE,
        plugins: {
          labels: {
            render: 'image',
            position: 'outside',
            images: [
              {
                src: this.assetsPipe.transform('/Phone-icon.png', 'img'),
                width: Constant.CHART_ICON_WIDTH,
                height: Constant.CHART_ICON_HEIGHT,
              },
              {
                src: this.assetsPipe.transform('/cart.png', 'img'),
                width: Constant.CHART_ICON_WIDTH,
                height: Constant.CHART_ICON_HEIGHT,
              },
              {
                src: this.assetsPipe.transform('/Car-icon.png', 'img'),
                width: Constant.CHART_ICON_WIDTH,
                height: Constant.CHART_ICON_HEIGHT,
              },
              {
                src: this.assetsPipe.transform('/Home.png', 'img'),
                width: Constant.CHART_ICON_WIDTH,
                height: Constant.CHART_ICON_HEIGHT,
              },
            ],
            textMargin: Constant.CHART_ICON_MARGIN,
          },
        },
      },
    });
  }
}
