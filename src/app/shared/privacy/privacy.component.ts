import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  public static POP_UP_DEFAULT_PROPS: NgbModalOptions = { backdrop: 'static', keyboard: false, centered: true };
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  yesPressed() {
    console.log('2s')
    this.activeModal.close({ isYesPressed: true });
  }
}
