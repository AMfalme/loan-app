import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-select-form-field',
  templateUrl: './select-form-field.component.html',
  styleUrls: ['./select-form-field.component.scss']
})
export class SelectFormFieldComponent implements OnInit {

  constructor() { }


  @Output() onSelect = new EventEmitter();


  loanOptions: string[] = [
    'Housing Purchasing', 
    'House Construction', 
    // 'Exploring Laon possibilities',
    'Purchasing of land plot',
    // 'Home Exchange',
    'Housing renovation or repair',
    // 'Change in loan agreement'  
  ];

  @Input() selectControl!: FormControl;
  @Input() selectOptions!: [];
  
  getControlsKeyValues: string[] = [];

  HousePurchaseFormGroup: Object = {
    descrption: ['', Validators.required],
    propertyDetails: ['', Validators.required]
};

HouseConstructionFormGroup: Object = {
    description: ['', Validators.required],
    purchasePrice: ['', Validators.required],
    propertyDetails: ['', Validators.required]
};

HouseRenovationtionFormGroup: Object = {
    description: ['', Validators.required],
    renovationAmount: ['', Validators.required],
    houseDetails: ['', Validators.required]
};

LandPurchaseFormGroup: Object = {
    description: ['', Validators.required],
    purchasePrice: ['', Validators.required],
    landDetails: ['', Validators.required]
};


  ngOnInit(): void {
  }

  checkValidity() {
    return this.selectControl?.touched && this.selectControl?.invalid;
  }

  onSelectLoanType(e: any) {
    
    // switch(e.value) {
    //   case 'Housing Purchasing':
    //     this.dynamicForms.push(
    //       this.createFormGroups(this.HousePurchaseFormGroup)
    //     );
    //     this.getControlsKeyValues = Object.keys(this.HousePurchaseFormGroup);
    //     break;
    //   case 'House Construction':
    //     this.dynamicForms.push(
    //       this.createFormGroups(this.HouseConstructionFormGroup)
    //     );
    //     this.getControlsKeyValues = Object.keys(this.HouseConstructionFormGroup);
    //     break;
    //   case 'Purchasing of land plot':
    //     this.dynamicForms.push(
    //       this.createFormGroups(this.LandPurchaseFormGroup)
    //       );
    //       this.getControlsKeyValues = Object.keys(this.LandPurchaseFormGroup);
    //       // let item = this.loanForm.get('additional')?.value[0];
    //       console.log( this.LandPurchaseFormGroup);
    //       break;
    //   case 'Exploring Laon possibilities':
    //     console.log(this.dynamicFormGroup);
    //     break;
    //     case 'Housing renovation or repair':
    //       this.dynamicForms.push(
    //         this.createFormGroups(this.HouseRenovationtionFormGroup)
    //         );
    //         this.getControlsKeyValues = Object.keys(this.HouseRenovationtionFormGroup);
    //         // let item = this.loanForm.get('additional')?.value[0];
    //         console.log( this.LandPurchaseFormGroup);
    //         break;
    //     case 'Home Exchange':
    //   case 'Change in loan agreement':
      
    // } 
    this.onSelect.emit("Loan Type Selected");
  }

}
