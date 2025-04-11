import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductModalComponent } from './prduct-modal.component';

describe('PrductModalComponent', () => {
  let component: PrductModalComponent;
  let fixture: ComponentFixture<PrductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrductModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
