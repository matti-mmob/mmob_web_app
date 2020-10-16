import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationPopupComponent} from 'src/app/shared/confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-consent-management-portal',
  templateUrl: './consent-management-portal.component.html',
  styleUrls: ['./consent-management-portal.component.css']
})
export class ConsentManagementPortalComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.showPopup();
  }
  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, ConfirmationPopupComponent.POP_UP_DEFAULT_PROPS);
  }
}
