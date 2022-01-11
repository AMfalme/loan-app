import { Component, Input, OnInit, Output, EventEmitter, } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: '[FormControlName] app-select-form-field, [selectOptions] app-select-form-field',
  templateUrl: './select-form-field.component.html',
  styleUrls: ['./select-form-field.component.scss']
})
export class SelectFormFieldComponent implements OnInit {
  public loanType: FormGroup = new FormGroup({
    loanTypeDesc: new FormControl('')
  });


  
  constructor(private controlContainer: ControlContainer) { 
    
  }


  @Output() onSelect = new EventEmitter();


  @Input()
  selectOptions: string[] = [];
  @Input()
  selectControl: string = '';

  getControlsKeyValues: string[] = [];




  ngOnInit(): void {

    this.loanType = <FormGroup>this.controlContainer.control;;
    
  }

  checkValidity() {
    // return this.selectControl?.touched && this.selectControl?.invalid;
  }

  onSelectLoanType($event: any) {
    this.onSelect.emit($event);
  }

}
