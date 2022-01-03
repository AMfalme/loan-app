import { FormFieldBase } from './form-field-base';

export class DropDownField extends FormFieldBase<string> {
  override controlType = 'dropdown';
}