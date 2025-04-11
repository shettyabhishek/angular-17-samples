import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWindComponent } from './login-wind.component';

describe('LoginWindComponent', () => {
  let component: LoginWindComponent;
  let fixture: ComponentFixture<LoginWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
