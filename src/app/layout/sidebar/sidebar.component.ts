import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // Default Menu Status
  showMoreMenu: boolean = false;
  // Default Button Label
  buttonLabel: any = Constant.TOGGLE_TEXT_MORE;

  constructor() {}

  ngOnInit(): void {}

  /*  This function is used to show/hide More menu.
   */
  toggleMenu() {
    this.showMoreMenu = !this.showMoreMenu;
    this.buttonLabel = this.showMoreMenu ? Constant.TOGGLE_TEXT_LESS : Constant.TOGGLE_TEXT_MORE;
  }
}
