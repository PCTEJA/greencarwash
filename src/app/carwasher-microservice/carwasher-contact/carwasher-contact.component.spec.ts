import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwasherContactComponent } from './carwasher-contact.component';

describe('CarwasherContactComponent', () => {
  let component: CarwasherContactComponent;
  let fixture: ComponentFixture<CarwasherContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwasherContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwasherContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
