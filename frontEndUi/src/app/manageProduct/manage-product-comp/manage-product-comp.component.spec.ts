import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductCompComponent } from './manage-product-comp.component';

describe('ManageProductCompComponent', () => {
  let component: ManageProductCompComponent;
  let fixture: ComponentFixture<ManageProductCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProductCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
