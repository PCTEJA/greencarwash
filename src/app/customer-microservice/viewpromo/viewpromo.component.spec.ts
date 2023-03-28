import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpromoComponent } from './viewpromo.component';

describe('ViewpromoComponent', () => {
  let component: ViewpromoComponent;
  let fixture: ComponentFixture<ViewpromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
