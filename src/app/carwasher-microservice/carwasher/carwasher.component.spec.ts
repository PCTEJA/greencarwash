import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwasherComponent } from './carwasher.component';

describe('CarwasherComponent', () => {
  let component: CarwasherComponent;
  let fixture: ComponentFixture<CarwasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwasherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
