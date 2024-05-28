import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextdataComponent } from './textdata.component';

describe('TextdataComponent', () => {
  let component: TextdataComponent;
  let fixture: ComponentFixture<TextdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextdataComponent]
    });
    fixture = TestBed.createComponent(TextdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
