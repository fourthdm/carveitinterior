import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Client5Component } from './client5.component';

describe('Client5Component', () => {
  let component: Client5Component;
  let fixture: ComponentFixture<Client5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Client5Component]
    });
    fixture = TestBed.createComponent(Client5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
