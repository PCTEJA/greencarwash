import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwasherDashboardComponent } from './carwasher-dashboard.component';

describe('CarwasherDashboardComponent', () => {
  let component: CarwasherDashboardComponent;
  let fixture: ComponentFixture<CarwasherDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwasherDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwasherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
