import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexviewComponent } from './flexview.component';

describe('FlexviewComponent', () => {
  let component: FlexviewComponent;
  let fixture: ComponentFixture<FlexviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
