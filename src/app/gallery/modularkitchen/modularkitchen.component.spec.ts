import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularkitchenComponent } from './modularkitchen.component';

describe('ModularkitchenComponent', () => {
  let component: ModularkitchenComponent;
  let fixture: ComponentFixture<ModularkitchenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModularkitchenComponent]
    });
    fixture = TestBed.createComponent(ModularkitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
