import { Component, Input, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { FormFieldBase } from '../form-field-base';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent {
  @Input() question!: FormFieldBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
