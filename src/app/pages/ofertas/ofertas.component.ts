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
  prod: Producto = new Producto()
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
  colorSeleccionado: string = '';
  tallaSeleccionada: string = ''; 

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

    this.productoService.saveProducto(nuevoProducto).subscribe(
      (response) => {
        console.log('Producto guardado exitosamente:', response);
      },
      (error) => {
        console.error('Error al guardar el producto:', error);
      }
    );
}


  aadirAFavoritos() {
    console.log('Código:', this.codigo);
    console.log('Nombre:', this.nombre);
    console.log('Precio:', this.producto.precio);
    console.log('IVA:', this.producto.iva);
    console.log('Stock:', this.producto.stock);
    console.log('Marca:', this.producto.marca);
    console.log('Peso:', this.producto.peso);
  }
  
}
