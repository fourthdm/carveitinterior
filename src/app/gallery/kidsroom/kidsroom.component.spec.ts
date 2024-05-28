import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsroomComponent } from './kidsroom.component';

describe('KidsroomComponent', () => {
  let component: KidsroomComponent;
  let fixture: ComponentFixture<KidsroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsroomComponent]
    });
    fixture = TestBed.createComponent(KidsroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
