import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwasherLoginComponent } from './carwasher-login.component';

describe('CarwasherLoginComponent', () => {
  let component: CarwasherLoginComponent;
  let fixture: ComponentFixture<CarwasherLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwasherLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwasherLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
