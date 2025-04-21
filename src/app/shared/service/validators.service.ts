import { Injectable } from '@angular/core';
import {
  FormGroup,
  type FormControl,
  type ValidationErrors,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  constructor() {}

  public firstNameAndLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();

    if (value === 'strider') return { noStrider: true };

    return null;
  };

  public isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }

  public isFieldOneEqualToTwo(field1: string, field2: string) {

    return (formGroup: FormGroup): ValidationErrors | null => {
      const formField1 = formGroup.controls?.[field1];
      const formField2 = formGroup.controls?.[field2];

      const password1 = formField1?.value || '';
      const password2 = formField2.value || '';

      if (password1 !== password2) {
        formField2.setErrors({ noEqual: true });
        return { noEqual: true };
      }

      formField2.setErrors(null);
      return null;
    }

  }
}
