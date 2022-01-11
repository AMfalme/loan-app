import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-error-component',
  templateUrl: './custom-error-component.component.html',
  styleUrls: ['./custom-error-component.component.scss']
})
export class CustomErrorComponentComponent implements OnInit {
  
  constructor(private controlContainer: ControlContainer) { }
  @Input()
  displayErrotState: boolean | undefined; 
  ngOnInit(): void {
    
  }

}
