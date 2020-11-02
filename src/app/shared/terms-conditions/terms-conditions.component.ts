import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {

  public static POP_UP_DEFAULT_PROPS: NgbModalOptions = {backdrop: 'static', keyboard: false, centered: true};
 
  constructor(private activeModal: NgbActiveModal) {
    document.addEventListener('keydown',this.scroll);
  }

  ngOnInit() {
    this.scroll();
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
  scroll(){
    console.log('2')
    let x=document.getElementsByClassName('col-md-12');
    console.log(x)
  }

}
