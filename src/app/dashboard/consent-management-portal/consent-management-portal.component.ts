import { Component, OnInit } from '@angular/core';
import { ConfirmationPopupComponent } from 'src/app/shared/utils/confirmation-popup/confirmation-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consent-management-portal',
  templateUrl: './consent-management-portal.component.html',
  styleUrls: ['./consent-management-portal.component.css']
})
export class ConsentManagementPortalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  
  onClick() {
   this.showPopup();
  }
  showPopup() {
    return this.modalService.open(ConfirmationPopupComponent, {  backdrop: 'static', keyboard: false });
  }
}
