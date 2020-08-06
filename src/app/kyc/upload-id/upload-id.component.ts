import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-id',
  templateUrl: './upload-id.component.html',
  styleUrls: ['./upload-id.component.css']
})
export class UploadIdComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onNext(fileInput: any) {
    this.route.navigate(['kyc/drivingLicense']);
  }

}
