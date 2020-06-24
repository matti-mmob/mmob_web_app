import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public showMoreMenu: boolean = false;
  public buttonLabel: any = 'More';

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.showMoreMenu = !this.showMoreMenu;
    this.buttonLabel = this.showMoreMenu ? 'Less' : 'More';
  }
}
