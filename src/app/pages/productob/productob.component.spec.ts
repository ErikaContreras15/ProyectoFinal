import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductobComponent } from './productob.component';

describe('ProductobComponent', () => {
  let component: ProductobComponent;
  let fixture: ComponentFixture<ProductobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductobComponent]
    });
    fixture = TestBed.createComponent(ProductobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
