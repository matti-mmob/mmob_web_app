import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AssetsPathPipe } from '../pipes/assets-path.pipe';


@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {
  @Input() public action;
  @Input() public modalType = 'confirm'; // alert/confirm
  @Input() public confirmText = '';

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  /**
   * Method used to close the modal
   */
  noPressed() {
    this.activeModal.close({ isYesPressed: false });
  }

  yesPressed() {
    this.activeModal.close({ isYesPressed: true });
  }
}
