import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface LoanType {
  loanType: string;
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

  

  
  loanOptions: string[] = ['Housing Purchasing', 'Purchase of housing (specific property chosen)', 'Igor'];
  

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    
    this.loanForm = this.formBuilder.group({
      loanType: [null, [Validators.required, ]],
      loanPeriod: [null, Validators.required],
      downPaymentAmount: [null, Validators.required],
      loanAmount: [null, Validators.required],
      discountCode: [null, [Validators.required,]],
    });
    
    this.personalDataForm = this.formBuilder.group({
      firstName: [null, [Validators.required, ]],
      lastName: [null, [Validators.required, ]],
      personalCode: [null, [Validators.required, ]],
      maritalStatus: [null, [Validators.required, ]],
      familyDependants: [null, [Validators.required, ]],
      extendedData: this.formBuilder.group({
        education: [null, [Validators.required, ]],
        statusCategory: [null, [Validators.required, ]],
      }),
      coApplicant: this.formBuilder.group({
        firstName: [null, [Validators.required, ]],
      lastName: [null, [Validators.required, ]],
      personalCode: [null, [Validators.required, ]],
      relationship: [Array],  
      }),
      contactDetails: this.formBuilder.group({
        state: [null, ],
        cityCounty: [null, ],
        homeAddress: [null, ],
        telephone: [null, ],
        email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      }),
      });
  }

  clickNext() {
    if (!this.loanForm.valid) {
      return;
    }
    console.log(this.loanForm.value);
  }

}
