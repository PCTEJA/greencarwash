import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpromosComponent } from './viewpromos.component';

describe('ViewpromosComponent', () => {
  let component: ViewpromosComponent;
  let fixture: ComponentFixture<ViewpromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
