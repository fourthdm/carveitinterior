import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbydesignComponent } from './lobbydesign.component';

describe('LobbydesignComponent', () => {
  let component: LobbydesignComponent;
  let fixture: ComponentFixture<LobbydesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LobbydesignComponent]
    });
    fixture = TestBed.createComponent(LobbydesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
