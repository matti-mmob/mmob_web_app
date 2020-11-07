import {Component, OnInit} from '@angular/core';
import {Constant} from 'src/app/shared/constant/constant';
import {Router} from '@angular/router';
import {Auth} from 'aws-amplify';

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
  menuToggleClass: any = '';
  menuToggle: boolean = false;
  menuToggleIconClass: any = '';

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  /*  This function is used to show/hide More menu.
   */
  toggleMenu() {
    this.showMoreMenu = !this.showMoreMenu;
    this.buttonLabel = this.showMoreMenu ? Constant.TOGGLE_TEXT_LESS : Constant.TOGGLE_TEXT_MORE;
  }

  /* 
  * This function is used to show/hide More menu for mobile
  */
  mobileToggleMenu() {
    this.menuToggle = !this.menuToggle;
    this.menuToggleClass = this.menuToggle ? Constant.MENU_TOGGLE_CLASS : '';
    this.menuToggleIconClass = this.menuToggle ? Constant.MENU_TOGGLE_ICON : '';
  }

  highLightClickedElement($event) {
    const highlights = document.querySelectorAll('.nav-link');
    highlights.forEach((element) => {
      element.classList.remove('active');
    });
    $event.target.classList.add('active');
  }

  logout() {
    Auth.signOut();
  }
}
