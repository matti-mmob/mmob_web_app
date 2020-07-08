import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent {
  private static readonly errorMessages = {
    required: () => 'This field is required',
    minlength: params => 'The min number of characters is ' + params.requiredLength,
    maxlength: params => 'The max allowed number of characters is ' + params.requiredLength,
    inValidMac: () => 'InValid Mac Address!',
    smallSizeValidation: () => 'File size should be less than or equal to 1 MB.',
    //imageType: () => 'Only ' + SentinllX.SENTINLLX_IMAGE_FORMAT + ' is allowed'
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control && this.control.errors && (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    const Errors = Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
    return [Errors[0]];
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }
}
