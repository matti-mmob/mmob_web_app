import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  // method to open modal
  yesPressed() {
    this.activeModal.close({ isYesPressed: true });
  }
  
  //Method to close modal
  noPressed() {
    this.activeModal.close({ isYesPressed: false });
  }


}
