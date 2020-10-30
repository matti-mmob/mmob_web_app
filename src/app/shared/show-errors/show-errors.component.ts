import {Component, Input} from '@angular/core';
import {AbstractControl, AbstractControlDirective} from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent {
  private static readonly errorMessages = {
    required: () => 'This field is required',
    validateEmail: () => 'Email is Invalid!',
    validatePassword: () => 'Password should match the criteria'
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
