import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BardesignComponent } from './bardesign.component';

describe('BardesignComponent', () => {
  let component: BardesignComponent;
  let fixture: ComponentFixture<BardesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BardesignComponent]
    });
    fixture = TestBed.createComponent(BardesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
