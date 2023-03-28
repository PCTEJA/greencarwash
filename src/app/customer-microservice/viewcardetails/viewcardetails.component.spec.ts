import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcardetailsComponent } from './viewcardetails.component';

describe('ViewcardetailsComponent', () => {
  let component: ViewcardetailsComponent;
  let fixture: ComponentFixture<ViewcardetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcardetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
