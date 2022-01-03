import { FormFieldBase } from './form-field-base';

export class TextBoxField extends FormFieldBase<string> {
  override controlType = 'textbox';
}