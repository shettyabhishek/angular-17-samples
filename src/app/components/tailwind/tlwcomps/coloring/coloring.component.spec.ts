import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoringComponent } from './coloring.component';

describe('ColoringComponent', () => {
  let component: ColoringComponent;
  let fixture: ComponentFixture<ColoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
