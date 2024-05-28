import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Client6Component } from './client6.component';

describe('Client6Component', () => {
  let component: Client6Component;
  let fixture: ComponentFixture<Client6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Client6Component]
    });
    fixture = TestBed.createComponent(Client6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
