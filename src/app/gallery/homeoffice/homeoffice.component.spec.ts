import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeofficeComponent } from './homeoffice.component';

describe('HomeofficeComponent', () => {
  let component: HomeofficeComponent;
  let fixture: ComponentFixture<HomeofficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeofficeComponent]
    });
    fixture = TestBed.createComponent(HomeofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
