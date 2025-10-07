import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceLoansComponent } from './insurance-loans.component';

describe('InsuranceLoansComponent', () => {
  let component: InsuranceLoansComponent;
  let fixture: ComponentFixture<InsuranceLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceLoansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuranceLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
