import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcardetailsComponent } from './addcardetails.component';

describe('AddcardetailsComponent', () => {
  let component: AddcardetailsComponent;
  let fixture: ComponentFixture<AddcardetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcardetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
