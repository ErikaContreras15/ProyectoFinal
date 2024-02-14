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
  productos: any;
  product: Producto = new Producto();
  detalles: DetalleFactura[] = [];
  
  constructor(private router: Router, private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.obtenerDetallesCarrito();
    this.productos = this.carritoService.obtenerDetallesCarrito();
    this.obtenerProductosPorDetalle();
  }
  irAUsuario() {this.router.navigate(['paginas/usuarios'], { replaceUrl: true });}
  irACarrito() {this.router.navigate(['paginas/carrito'], {replaceUrl: true});}
  irAFactura() {this.router.navigate(['paginas/Factura'], {replaceUrl: true});}
  irAtienda() {this.router.navigate(['paginas/productos'], {replaceUrl: true});}
  
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

  eliminarProductos(codigo: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.carritoService.dropCarrito(codigo).subscribe(data => {
        console.log(data)
          this.ngOnInit()
      })
    }
  }
  obtenerProductosPorDetalle() {
    const codigoDetalle = 1;
    this.carritoService.getProductosPorDetalle(codigoDetalle).subscribe(data => {
      this.productos = data;
    });
  }

  

}
