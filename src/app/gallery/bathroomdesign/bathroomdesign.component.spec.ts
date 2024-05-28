import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomdesignComponent } from './bathroomdesign.component';

describe('BathroomdesignComponent', () => {
  let component: BathroomdesignComponent;
  let fixture: ComponentFixture<BathroomdesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BathroomdesignComponent]
    });
    fixture = TestBed.createComponent(BathroomdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
