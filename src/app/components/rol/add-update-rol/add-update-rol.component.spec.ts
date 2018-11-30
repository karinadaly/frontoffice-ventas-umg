import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateRolComponent } from './add-update-rol.component';

describe('AddUpdateRolComponent', () => {
  let component: AddUpdateRolComponent;
  let fixture: ComponentFixture<AddUpdateRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
