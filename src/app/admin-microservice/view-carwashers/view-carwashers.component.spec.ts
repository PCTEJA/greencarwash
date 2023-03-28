import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarwashersComponent } from './view-carwashers.component';

describe('ViewCarwashersComponent', () => {
  let component: ViewCarwashersComponent;
  let fixture: ComponentFixture<ViewCarwashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCarwashersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarwashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
