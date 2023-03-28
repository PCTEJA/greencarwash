import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaddonsCustomersComponent } from './viewaddons-customers.component';

describe('ViewaddonsCustomersComponent', () => {
  let component: ViewaddonsCustomersComponent;
  let fixture: ComponentFixture<ViewaddonsCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaddonsCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaddonsCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
