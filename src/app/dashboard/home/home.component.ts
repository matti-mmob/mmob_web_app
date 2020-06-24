import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import 'chartjs-plugin-labels';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  // store canvas
  canvas: any;
  // define canvas Context Type
  ctx: any;

  constructor() {}

  ngOnInit(): void {}

  /*
   * Chart will render after the View is loaded.
   */
  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    // Initialize Chart
    const myChart = new Chart(this.ctx, {
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
              return ' £' + data['datasets'][0]['data'][item['index']];
            },
          },
        },
        responsive: false,
        display: true,
        cutoutPercentage: 80,
        plugins: {
          labels: {
            render: 'image',
            position: 'outside',
            images: [
              { src: '../assets/images/Phone-icon.png', width: 22, height: 22 },
              { src: '../assets/images/cart.png', width: 25, height: 25 },
              { src: '../assets/images/Car-icon.png', width: 25, height: 25 },
              { src: '../assets/images/Home.png', width: 25, height: 25 },
            ],
            textMargin: 10,
          },
        },
      },
    });
  }
}
