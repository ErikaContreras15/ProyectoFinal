import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteFacturasComponent } from './reporte-facturas.component';

describe('ReporteFacturasComponent', () => {
  let component: ReporteFacturasComponent;
  let fixture: ComponentFixture<ReporteFacturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteFacturasComponent]
    });
    fixture = TestBed.createComponent(ReporteFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
