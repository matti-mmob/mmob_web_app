import { Component, OnInit } from '@angular/core';
import { AssetsPathPipe } from 'src/app/shared/pipes/assets-path.pipe';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FieldsValidateService } from 'src/app/service/fields-validate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationUrl } from 'src/app/shared/constant/navigation-url.constant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-looking-for',
  templateUrl: './looking-for.component.html',
  styleUrls: ['./looking-for.component.css']
})
export class LookingForComponent implements OnInit {
  navigationUrl = NavigationUrl;
  constructor(
    private assetsPipe: AssetsPathPipe,
    private formBuilder: FormBuilder,
    private fieldsValidateService: FieldsValidateService,
    private route: Router,
    private modalService: NgbModal) { }
  ngOnInit(): void {
  }
  onNext() {
    this.route.navigate([NavigationUrl.LENDING_DETAIL]);
  }
}
