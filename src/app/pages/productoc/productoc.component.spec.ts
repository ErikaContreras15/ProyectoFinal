import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductocComponent } from './productoc.component';

describe('ProductocComponent', () => {
  let component: ProductocComponent;
  let fixture: ComponentFixture<ProductocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductocComponent]
    });
    fixture = TestBed.createComponent(ProductocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
