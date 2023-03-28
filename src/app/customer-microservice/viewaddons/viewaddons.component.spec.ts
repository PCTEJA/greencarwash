import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaddonsComponent } from './viewaddons.component';

describe('ViewaddonsComponent', () => {
  let component: ViewaddonsComponent;
  let fixture: ComponentFixture<ViewaddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
