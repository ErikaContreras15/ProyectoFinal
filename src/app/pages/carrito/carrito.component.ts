import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleFactura } from 'src/app/domain/detalleFactura';
import { Producto } from 'src/app/domain/producto';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  productos: Producto[] = [];
  detalles: DetalleFactura[] = [];
  
  constructor(private router: Router, private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.obtenerDetallesCarrito();
  }

  irAUsuario() {
    this.router.navigate(['paginas/usuarios'], { replaceUrl: true });
  }
  irACarrito() {
    this.router.navigate(['paginas/carrito'], {replaceUrl: true});
  }
  obtenerDetallesCarrito(): void {
    this.carritoService.obtenerDetallesCarrito().subscribe(
      (detalles: DetalleFactura[]) => {
        this.detalles = detalles;
      },
      (error) => {
        console.error('Error al obtener detalles del carrito:', error);
      }
    );
  }
}
