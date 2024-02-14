import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleFactura } from 'src/app/domain/detalleFactura';
import { Producto } from 'src/app/domain/producto';
import { DetalleFacturaService } from 'src/app/service/detalle-factura.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-productob',
  templateUrl: './productob.component.html',
  styleUrls: ['./productob.component.scss']
})
export class ProductobComponent {
  irAUsuario() {this.router.navigate(['paginas/usuarios'], { replaceUrl: true });}
  irACarrito() {this.router.navigate(['paginas/carrito'], {replaceUrl: true});}

  constructor(private router: Router, private productoService: ProductoService, private detalleService: DetalleFacturaService) {}
  prod: Producto = new Producto()
  detalleFactura: DetalleFactura = new DetalleFactura();
  codigoDetalle: number = 1;
  peso: number = 500;
  codigo: number = 15655269;
  subtotal: number = 20.00;
  iva: number = 0;
  marca: string = "Squizer";
  nombre: string = "Camiseta lolabum";
  disponibilidad: number = 300;
  cantidad: number = 0;
  total: number = 0;
  error: boolean = false;
  colorSeleccionado: string = '';
  tallaSeleccionada: string = ''; 
  subtotalFin: number = 0;

  actualizarTotal() {
    const inputCantidad = document.getElementById('numero') as HTMLInputElement;
    this.cantidad = parseInt(inputCantidad.value);
    if (this.cantidad < 0) {
      this.error = true;
    } else if (this.cantidad > this.disponibilidad) {
      this.error = true;
    } else {
      this.error = false;
      this.total = this.subtotal * this.cantidad;
    }
    const spanTotal = document.getElementById('total');
    if (spanTotal) {spanTotal.textContent = this.total.toFixed(2);}
  }

  regresar() {window.history.back();}

  asignarValoresAProducto() {
    const nuevoProducto: Producto = {
      codigo: this.codigo,
      descripcion: this.colorSeleccionado,
      iva: this.iva,
      marca: this.marca,
      nombre: this.nombre,
      precio: this.total,
      peso: this.peso,
      stock: this.disponibilidad,
      talla: this.tallaSeleccionada
    };
    console.log('Nuevo producto:', nuevoProducto);
    this.setearProdcutosDetalle(nuevoProducto)
    this.productoService.saveProducto(nuevoProducto).subscribe(
      (response) => {console.log('Producto guardado exitosamente:', response);},
      (error) => {console.error('Error al guardar el producto:', error);}
    );
  }
  anadirAFavoritos() {

  }
  setearProdcutosDetalle(nuevoProducto: Producto){
    const detalle: DetalleFactura = new DetalleFactura();
    detalle.setProductos([nuevoProducto]);
    const productos: Producto[] | undefined = detalle.getProductos();
    this.detalleService.agregarProductoADetalle(this.codigoDetalle, nuevoProducto).subscribe(
      (response) => {console.log('Producto agregado Exitosamente a detalle:', response);},
      (error) => {console.error('Error al agregar el producto:', error);}
    );
  }
  
  actualizarSubtotal(): void {
    this.detalleService.setSubtotalDetalle(this.codigoDetalle, this.total)
      .subscribe(
        response => {
          console.log('Subtotal actualizado correctamente:', response);
        },
        error => {console.error('Error al actualizar el subtotal:', error);
        }
      );
  }

  getSubtotalDetalle(){
    if (this.detalleFactura) {
      const subtotaldetalle = this.detalleFactura.subtotal || 0;
      this.subtotalFin = subtotaldetalle + this.total;
      this.setSubtotalDetalle(this.subtotalFin);
      console.log('Subtotal:', this.detalleFactura.subtotal);
    } else {
      console.error('detalleFactura no está definido o es nulo.');
    }
  }
  
  setSubtotalDetalle(subtotal: number){
    this.detalleFactura.setSubtotal(subtotal);
  }

  productoAgregado: boolean = false;

  agregarAlCarrito() {
    this.productoAgregado = true;
    setTimeout(() => {
      this.productoAgregado = false;
    }, 2000);
  }
}
