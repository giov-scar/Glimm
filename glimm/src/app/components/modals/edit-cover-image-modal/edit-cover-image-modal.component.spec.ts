import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoverImageModalComponent } from './edit-cover-image-modal.component';

describe('EditCoverImageModalComponent', () => {
  let component: EditCoverImageModalComponent;
  let fixture: ComponentFixture<EditCoverImageModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCoverImageModalComponent]
    });
    fixture = TestBed.createComponent(EditCoverImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
