import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yielder-footer',
  templateUrl: './yielder-footer.component.html',
  styleUrls: ['./yielder-footer.component.css']
})
export class YielderFooterComponent implements OnInit {
  showShortDesciption = true;
  constructor() { }

  ngOnInit(): void {
  }


  alterDescriptionText() {
    this.showShortDesciption = !this.showShortDesciption
  }
}
