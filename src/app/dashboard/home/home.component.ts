import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AssetsPathPipe} from 'src/app/shared/pipes/assets-path.pipe';
import * as Highcharts from 'highcharts';
import {ChartLabels} from 'src/app/shared/enum/chart-labels.enum';
import {Auth} from 'aws-amplify';
import {CommonService} from '../../shared/services/helper-services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  // Chart Enum Label
  chartLabelEnum = ChartLabels;
  firstName: string;
  lastName: string;
  email: string;

  constructor(private assetsPipe: AssetsPathPipe, private commonService: CommonService) {
  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then((u) => {
      this.firstName = u.attributes.name;
      this.lastName = u.attributes.family_name;
      this.email = u.attributes.email;
      this.commonService.setEmailAddress(this.email);
      console.log('The user is : ', u);
    }).catch(e => {
      console.log('NOT AUTHENTICATED YET');
    });
    // Auth.currentUserInfo().then(result => console.log(result));
  }

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
        formatter: function() {
          return this.point.name + '<br>£' + this.y;
        },
        positioner: () => {
          return {x: 80, y: 50};
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          dataLabels: {
            enabled: true,
            useHTML: true,
            formatter: function(this) {
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
          innerSize: '75%',
          states: {
            inactive: {
              opacity: 1,
            },
          },
          data: [
            {
              name: this.chartLabelEnum.SANTANDER_LABEL,
              y: 5550.97,
              color: '#ff4f00',
              borderColor: '#FFB566',
              borderWidth: 3,
            },
            {
              name: this.chartLabelEnum.HSBC_LABEL,
              y: 23617.23,
              color: '#00008b',
              borderColor: '#acacd9',
              borderWidth: 3,
            },
            {
              name: this.chartLabelEnum.BARCLAYS_LABEL,
              y: 12394.34,
              color: '#9400d3',
              borderColor: '#ddaef0',
              borderWidth: 3,
            },
            {
              name: this.chartLabelEnum.CIMB_BANK_LABEL,
              y: 6823.83,
              color: '#ea4c89',
              borderColor: '#e29ce1',
              borderWidth: 3,
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
        this.assetsPipe.transform('Home.png', 'img') +
        '" alt="HSBC" style="vertical-align: middle; margin: 0 10px;">',
      Barclays:
        '<img  src="' +
        this.assetsPipe.transform('Car-icon.png', 'img') +
        '" alt="Barclays" style="vertical-align: middle; margin: 0 10px;">',
      Santander:
        '<img  src="' +
        this.assetsPipe.transform('Phone-icon.png', 'img') +
        '" alt="Santander" style="vertical-align: middle; margin: 0 10px;">',
      'CIMB Bank':
        '<img  src="' +
        this.assetsPipe.transform('cart.png', 'img') +
        '" alt="CIMB Bank" style="vertical-align: middle; margin: 0 10px;">',
    };
    return iconImage[iconKey];
  }
}
