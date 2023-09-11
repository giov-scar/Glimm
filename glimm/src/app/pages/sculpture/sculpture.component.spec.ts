import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SculptureComponent } from './sculpture.component';

describe('SculptureComponent', () => {
  let component: SculptureComponent;
  let fixture: ComponentFixture<SculptureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SculptureComponent]
    });
    fixture = TestBed.createComponent(SculptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
