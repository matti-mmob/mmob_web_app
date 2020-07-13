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
  @Input() public confirmText = 'IConstants.STATUS_CHANGE_MESSAGE';

  constructor(private activeModal: NgbActiveModal,
    private assetsPipe: AssetsPathPipe) {
  }

  ngOnInit() {
    // if (this.action === IConstants._2ND_DELETE_CONFIRM) {
    //   this.confirmText = IConstants.DELETE_2ND_CONFIRMATION;
    // } else if (this.action === IConstants.DELETE_ACTION) {
    //   this.confirmText = IConstants.DELETE_MESSAGE;
    // } else if (this.action === IConstants.APPROVAL_STATUS) {
    //   this.confirmText = IConstants.APPROVAL_MESSAGE + ' approve?';
    // } else if (this.action === IConstants.DESELECT_SITE) {
    //   this.confirmText = IConstants.DESELECT_SITE;
    // } else if (this.action === IConstants.CHANGE_PORTFOLIO) {
    //   this.confirmText = IConstants.CHANGE_PORTFOLIO;
    // } else if (this.action === IConstants.DELETE_ENERGY_UNIT_RATES) {
    //   this.confirmText = IConstants.DELETE_ENERGY_UNIT_RATES;
    // } else if(this.action === IConstants.ALARM_CLOSE){
    //   this.confirmText = IConstants.ALARM_CLOSE_MESSAGE;
    // } else if(this.action === IConstants.UNIT_TYPE){
    //   this.confirmText = IConstants.UNIT_TYPE_MESSAGE;
    // } else if(this.action === IConstants.UNIT){
    //   this.confirmText = IConstants.UNIT_MESSAGE;
    // }
  }


  /**
   * Method used to close the modal
   */
  noPressed() {
    this.activeModal.close({isYesPressed: false});
  }

  yesPressed() {
    this.activeModal.close({isYesPressed: true});
  }
}
