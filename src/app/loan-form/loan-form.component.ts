import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface CoApplicant {
  firstName: string,
  lastName: string,
  personalCode: Array<string>,
  relationship:Array<string>,
}
@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {
  
  loanForm: FormGroup = new FormGroup({
    loanType: new FormGroup({
      loanTypeDesc: new FormControl('')
    }),
    loanPeriod: new FormControl(''),
    downPaymentAmount: new FormControl(''),
    loanAmount: new FormControl(''),
    discountCode: new FormControl(''),
    dynamicFormGroup: new FormArray([])
  });

  personalDataForm: FormGroup = new FormGroup({

  });
  incomeFormGroup: FormGroup = new FormGroup({

  });
  confirmationFormGroup: FormGroup = new FormGroup({

  });

  dynamicFormGroup: FormArray = new FormArray([]);

  dynamicFormControlkeyValues!: Object;

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

  
  loanOptions: string[] = [
    'Housing Purchasing', 
    'House Construction', 
    // 'Exploring Laon possibilities',
    'Purchasing of land plot',
    // 'Home Exchange',
    'Housing renovation or repair',
    // 'Change in loan agreement'  
  ];

  loanPeriod : number [] = Array.from(Array(30).keys())
  coApplicants: CoApplicant[] = [];
  payLoad: string | undefined;
  get CoApplicants (): FormArray {
    return this.personalDataForm.get('coApplicants') as FormArray;
  }
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
      
    this.loanForm = this.formBuilder.group({
      loanType: this.formBuilder.group(
       { loanTypeDesc: ['', [Validators.required, ]],
       }),
      loanPeriod: [null, Validators.required],
      downPaymentAmount: [null, Validators.required],
      loanAmount: [null, [Validators.required, Validators.min(1000)]],
      dynamicFormGroup: this.formBuilder.array([])
      
    });
    
    this.personalDataForm = this.formBuilder.group({
      firstName: ['', [Validators.required, ]],
      lastName: ['', [Validators.required, ]],
      personalCode: [null, [Validators.required, ]],
      maritalStatus: [null, [Validators.required, ]],
      familyDependants: [null, [Validators.required, ]],
      extendedData: this.formBuilder.group({
        education: [null, [Validators.required, ]],
        statusCategory: [null, [Validators.required, ]],
      }),
      coApplicants: this.formBuilder.array([this.formBuilder.control('')]),
      contactDetails: this.formBuilder.group({
        state: [null, ],
        cityCounty: [null, ],
        homeAddress: [null, ],
        telephone: [null, ],
        email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      }),
      });

      

  }
  
  addFormControls(GroupList: FormControl[])  {
    
  } 

  

  submitLoanForm() {
    if (!this.loanForm.valid) {

      // Array.from(this.loanForm, element => console.log(element))
      console.log(this.loanForm.value);
      console.log(this.personalDataForm.value);
      return;
    }
    console.log(this.loanForm.value);
    this.payLoad = JSON.stringify(this.loanForm.getRawValue());
    console.log(this.payLoad);
    return this.payLoad;
  }
  
  get dynamicForms () {
    return this.loanForm.controls['dynamicFormGroup'] as FormArray;
  }

  getLoanFormLoanType = this.loanForm.controls['LoanType'];
  getControlsKeyValues: [string, any][] = [['', '']];
  
  
  onSelectLoanType(e: any) {
    this.dynamicForms.clear();
    
    console.log(this.loanForm.controls);
    console.log(this.dynamicForms);
    switch(e.value) {
      case 'Housing Purchasing':
        this.formBuilder.array([])
        this.dynamicForms.push(new FormControl('')
          // this.createFormGroups(this.HousePurchaseFormGroup)
        );
        
        this.getControlsKeyValues = Object.entries(this.HousePurchaseFormGroup);
        console.log(this.getControlsKeyValues);
        break;
      case 'House Construction':
        this.dynamicForms.push(new FormControl('')
          // this.createFormGroups(this.HouseConstructionFormGroup)
        );
        // this.getControlsKeyValues = Object.keys(this.HouseConstructionFormGroup);
        break;
      case 'Purchasing of land plot':
        this.dynamicForms.push(new FormControl('')
          // this.createFormGroups(this.LandPurchaseFormGroup)
          );
          // this.getControlsKeyValues = Object.keys(this.LandPurchaseFormGroup);
          // let item = this.loanForm.get('additional')?.value[0];
          console.log( this.LandPurchaseFormGroup);
          break;
      case 'Exploring Laon possibilities':
        console.log(this.dynamicFormGroup);
        break;
      case 'Housing renovation or repair':
        this.dynamicForms.push(new FormControl('')
          // this.createFormGroups(this.HouseRenovationtionFormGroup)
          );
          // this.getControlsKeyValues = Object.keys(this.HouseRenovationtionFormGroup);
          // let item = this.loanForm.get('additional')?.value[0];
          console.log( this.LandPurchaseFormGroup);
          break;
        case 'Home Exchange':
      case 'Change in loan agreement':
      
    } 
  }

}
