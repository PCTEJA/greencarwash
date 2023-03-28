import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwasherRegistrationComponent } from './carwasher-registration.component';

describe('CarwasherRegistrationComponent', () => {
  let component: CarwasherRegistrationComponent;
  let fixture: ComponentFixture<CarwasherRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwasherRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwasherRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
