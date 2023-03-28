import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpromosComponent } from './addpromos.component';

describe('AddpromosComponent', () => {
  let component: AddpromosComponent;
  let fixture: ComponentFixture<AddpromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
