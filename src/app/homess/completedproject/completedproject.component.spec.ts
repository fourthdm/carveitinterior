import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedprojectComponent } from './completedproject.component';

describe('CompletedprojectComponent', () => {
  let component: CompletedprojectComponent;
  let fixture: ComponentFixture<CompletedprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedprojectComponent]
    });
    fixture = TestBed.createComponent(CompletedprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
