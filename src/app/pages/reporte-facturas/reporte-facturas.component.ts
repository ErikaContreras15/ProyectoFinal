import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/domain/factura';
import { ClienteService } from 'src/app/service/cliente.service';
import { FacturaService } from 'src/app/service/factura.service';
import { PagoService } from 'src/app/service/pago.service';

@Component({
  selector: 'app-reporte-facturas',
  templateUrl: './reporte-facturas.component.html',
  styleUrls: ['./reporte-facturas.component.scss']
})
export class ReporteFacturasComponent {
  constructor(private router: Router, private facturaService: FacturaService, private clienteService: ClienteService, private pagoServices: PagoService) {}

  facturas: Factura[] = [];

  ngOnInit(): void {
    this.obtenerValoresFactura();
  }
  regresar() {window.history.back();}
  irAUsuario() {this.router.navigate(['paginas/usuarios'], { replaceUrl: true });}
  irACarrito() {this.router.navigate(['paginas/carrito'], {replaceUrl: true});}
  obtenerValoresFactura(): void {
    this.facturaService.obtenerValoresCarrito().subscribe(
      (facturas: Factura[]) => {
        this.facturas = facturas;
      },
      (error) => {
        console.error('Error al obtener valores del carrito:', error);
      }
    );
  }
}
