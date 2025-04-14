import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmplWebPgsComponent } from './smpl-web-pgs.component';

describe('SmplWebPgsComponent', () => {
  let component: SmplWebPgsComponent;
  let fixture: ComponentFixture<SmplWebPgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmplWebPgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmplWebPgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
