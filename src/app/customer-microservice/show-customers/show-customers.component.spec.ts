import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomersComponent } from './show-customers.component';

describe('ShowCustomersComponent', () => {
  let component: ShowCustomersComponent;
  let fixture: ComponentFixture<ShowCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
