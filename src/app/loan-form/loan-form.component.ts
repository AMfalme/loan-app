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
    loanType: new FormControl(''),
    loanPeriod: new FormControl(''),
    downPaymentAmount: new FormControl(''),
    loanAmount: new FormControl(''),
    discountCode: new FormControl(''),
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
      purpose: ['', Validators.required],
      propertyDetails: ['', Validators.required]
  };
  
  HouseConstructionFormGroup: Object = {
      purpose: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      propertyDetails: ['', Validators.required]
  };
  

  
  loanOptions: string[] = [
    'Housing Purchasing', 
    'House Construction', 
    'Exploring Laon possibilities',
    'Purchasing of land plot',
    'Home Exchange',
    'Housing renovation or repair',
    'Change in loan agreement'  
  ];

  loanPeriod : number [] = Array.from(Array(30).keys())
  coApplicants: CoApplicant[] = [];
  get CoApplicants (): FormArray {
    return this.personalDataForm.get('coApplicants') as FormArray;
  }
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.dynamicFormGroup);
      
    this.loanForm = this.formBuilder.group({
      loanType: [null, [Validators.required, ]],
      loanPeriod: [null, Validators.required],
      downPaymentAmount: [null, Validators.required],
      loanAmount: [null, Validators.required],
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
  
  createFormGroups(GroupList: Object) : FormGroup {
    return this.formBuilder.group(GroupList);
  } 

  

  submitLoanForm() {
    if (!this.loanForm.valid) {

      // Array.from(this.loanForm, element => console.log(element))
      console.log(this.loanForm.value);
      console.log(this.personalDataForm.value);
      return;
    }
    console.log(this.loanForm.value);
  }
  
  get dynamicForms () {
    return this.loanForm.get('dynamicFormGroup') as FormArray;
  }

  getControlsKeyValues: string[] = [];
  
  
  onSelectLoanType(e: any) {
    this.dynamicForms.clear();
    
    switch(e.value) {
      case 'Housing Purchasing':
        this.dynamicForms.push(
          this.createFormGroups(this.HousePurchaseFormGroup)
          );
          console.log(this.getControlsKeyValues);
          this.getControlsKeyValues = Object.keys(this.HouseConstructionFormGroup);
          break;
      case 'House Construction':
            this.dynamicForms.push(
              this.createFormGroups(this.HouseConstructionFormGroup)
        );
        break;
      case 'Exploring Laon possibilities':
        // let item = this.loanForm.get('additional')?.value[0];
        console.log( this.dynamicForms);
        break;
      case 'Purchasing of land plot':
        console.log(this.dynamicFormGroup);
        break;
      case 'Home Exchange':
      case 'Housing renovation or repair':
      case 'Change in loan agreement':
      
    } 
  }

}
