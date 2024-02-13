import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent {
  constructor(private router: Router, private productoService: ProductoService) {}

  producto: Producto = new Producto();
  peso: number = 1100;
  codigo: number = 12015550;
  subtotal: number = 25.5;
  iva: number = 0;
  marca: string = "Violantino";
  nombre: string = "Abrigo lijero con bolsillos";
  disponibilidad: number = 165;
  cantidad: number = 0;
  total: number = 0;
  error: boolean = false;

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
    if (spanTotal) {
      spanTotal.textContent = this.total.toFixed(2);
    }
  }

  regresar() {
    window.history.back();
  }

  guardarProducto() {
    if (!this.error) {
      this.producto = {
        procodigo: this.codigo,
        pronombre: this.nombre,
        proprecio: this.total,
        proiva: this.iva,
        prostock: this.disponibilidad,
        promarca: this.marca,
        propeso: this.peso,
        prodescripcion: this.producto.prodescripcion,
        protalla: this.producto.protalla
      };
  
      this.productoService.saveProducto(this.producto).subscribe(
        (response) => {
          console.log('Producto guardado exitosamente:', response);
        },
        (error) => {
          console.error('Error al guardar el producto:', error);
        }
      );
    } else {
      console.error('No se puede guardar el producto debido a errores en los datos.');
    }
  }
  
}
