import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwasherShowCustomersComponent } from './carwasher-show-customers.component';

describe('CarwasherShowCustomersComponent', () => {
  let component: CarwasherShowCustomersComponent;
  let fixture: ComponentFixture<CarwasherShowCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwasherShowCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwasherShowCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
