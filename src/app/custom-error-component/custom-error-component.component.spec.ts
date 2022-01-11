import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomErrorComponentComponent } from './custom-error-component.component';

describe('CustomErrorComponentComponent', () => {
  let component: CustomErrorComponentComponent;
  let fixture: ComponentFixture<CustomErrorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomErrorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomErrorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
