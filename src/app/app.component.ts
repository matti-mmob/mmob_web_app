import {Component} from '@angular/core';
import {Amplify} from 'aws-amplify';
import config from '../aws-exports';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MMOB | Dashboard';

  constructor() {
    //Amplify.configure(config);
  }
}
