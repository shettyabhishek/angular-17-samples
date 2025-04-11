import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingGridsComponent } from './pricing-grids.component';

describe('PricingGridsComponent', () => {
  let component: PricingGridsComponent;
  let fixture: ComponentFixture<PricingGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingGridsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
