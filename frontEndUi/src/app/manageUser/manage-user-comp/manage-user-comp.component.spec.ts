import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserCompComponent } from './manage-user-comp.component';

describe('ManageUserCompComponent', () => {
  let component: ManageUserCompComponent;
  let fixture: ComponentFixture<ManageUserCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUserCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
