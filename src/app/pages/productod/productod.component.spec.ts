import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductodComponent } from './productod.component';

describe('ProductodComponent', () => {
  let component: ProductodComponent;
  let fixture: ComponentFixture<ProductodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductodComponent]
    });
    fixture = TestBed.createComponent(ProductodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
