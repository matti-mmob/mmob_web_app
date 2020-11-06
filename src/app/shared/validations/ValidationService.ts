import { ErrorMessage } from './ErrorMessage';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { CustomRegex } from './CustomRegex';
import { Constant } from '../constant/constant';


export class ValidationService {
  /**
   * This function returns dynamic messages according input fields.
   * @param {string} validatorName
   * @param validatorValue
   * @param controlError
   * @param inputElmControl
   * @returns {any}
   */
  public static getValidatorErrorMessage(
    validatorName: string,
    validatorValue?: any,
    controlError?: any,
    inputElmControl?: any
  ) {
    const message = controlError.message;
    const value = controlError.value;
    const config = {
      required: inputElmControl.value + ' is ' + ErrorMessage.required,
      invalidEmailAddress: ErrorMessage.invalidEmail,
      invalidPhoneNumber: ErrorMessage.invalidPhoneNumber,
    };
    return config[validatorName];
  }

  /**
   * This function is uses for validate blank or empty input value.
   * @param control
   * @returns {any}
   */
  public static required(control) {
    // RFC 2822 compliant regex
    if (!control || !control.value || !control.value || control.value.toString().trim() === '') {
      return {
        required: true,
        message: ErrorMessage.required,
        value: control.value,
      };
    } else {
      return null;
    }
  }

  /**
 * email validation
 * @param control
 * @returns {any}
 */
  public static emailValidator(control, isEmailRecipient = false) {
    // RFC 2822 compliant regex
    let emailValue;
    if (isEmailRecipient) {
      emailValue = control;
    } else {
      emailValue = control.value;
    }
    if (emailValue != null && emailValue !== undefined && emailValue.match(CustomRegex.email)) {
      return null;
    } else {
      return {
        invalidEmailAddress: true,
      };
    }
  }
  /**
    * This function is useed to check number values in input field.
    * @param control
    */
  public static allowNumberOnly(control) {
    let mobileNumber;
    mobileNumber = control.value;
    if (mobileNumber === undefined || mobileNumber === '' || (mobileNumber && mobileNumber.match(CustomRegex.allowNumberOnly))) {
      return null;
    } else {
      const controlName = ValidationService.getControlName(control);
      let errorString = null;
      if (controlName === Constant.CONTACT_NUMBER) {
        errorString = 'invalidPhoneNumber';
      } else {
        errorString = 'invalidNumber';
      }
      return { [errorString]: true };
    }
  }
  /**
    * get control name
    * @param control: AbstractControl
    */

  public static getControlName(control: AbstractControl): string | null {
    if (control) {
      const formGroup = control.parent.controls;
      return Object.keys(formGroup).find((name) => control === formGroup[name]) || null;
    }
  }
}

