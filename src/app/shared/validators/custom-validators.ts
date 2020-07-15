import { FormArray, FormControl, FormGroup, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {

  static emailCustomValidation(c: FormControl): ValidationErrors {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (c.value !== null && c.value !== '') {
      const numbers = /^[0-9]+$/;
      if (re.test(String(c.value).toLowerCase())) {
        return null;
      } else {
        return { validateEmail: true };
      }
    } else {
      return null;
    }
  }

  static passwordCustomValidation(c: FormControl): ValidationErrors {

    var re = /(?=^.{8,100}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/;
    if (c.value !== null && c.value !== '') {
      const numbers = /^[0-9]+$/;
      if (re.test(String(c.value))) {
        return null;
      } else {
        return { validatePassword: true };
      }
    } else {
      return null;
    }
  }

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }
}
