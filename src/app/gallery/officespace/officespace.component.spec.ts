import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficespaceComponent } from './officespace.component';

describe('OfficespaceComponent', () => {
  let component: OfficespaceComponent;
  let fixture: ComponentFixture<OfficespaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficespaceComponent]
    });
    fixture = TestBed.createComponent(OfficespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
