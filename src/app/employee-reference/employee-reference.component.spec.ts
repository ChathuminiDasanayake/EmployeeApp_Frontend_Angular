import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReferenceComponent } from './employee-reference.component';

describe('EmployeeReferenceComponent', () => {
  let component: EmployeeReferenceComponent;
  let fixture: ComponentFixture<EmployeeReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
