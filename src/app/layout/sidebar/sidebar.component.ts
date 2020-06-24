import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // Default Menu Status
  public showMoreMenu: boolean = false;
  // Default Button Label
  public buttonLabel: any = 'More';

  constructor() {}

  ngOnInit(): void {}

  /*  This function is used to show/hide More menu.
   */
  toggleMenu() {
    this.showMoreMenu = !this.showMoreMenu;
    this.buttonLabel = this.showMoreMenu ? 'Less' : 'More';
  }
}
