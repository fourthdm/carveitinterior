import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrtfolioComponent } from './prtfolio.component';

describe('PrtfolioComponent', () => {
  let component: PrtfolioComponent;
  let fixture: ComponentFixture<PrtfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrtfolioComponent]
    });
    fixture = TestBed.createComponent(PrtfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
