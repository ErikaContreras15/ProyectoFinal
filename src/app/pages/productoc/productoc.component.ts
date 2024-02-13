import { Component } from '@angular/core';

@Component({
  selector: 'app-productoc',
  templateUrl: './productoc.component.html',
  styleUrls: ['./productoc.component.scss']
})
export class ProductocComponent {
  peso: number = 1100;
  codigo: number = 12015550;
  subtotal: number = 25.5;
  cantidad: number = 0;
  total: number = 0;
  error: boolean = false;
  disponibilidad: number = 165;

  actualizarTotal() {
    const inputCantidad = document.getElementById('numero') as HTMLInputElement;
    this.cantidad = parseInt(inputCantidad.value);
    if (this.cantidad < 0) {this.error = true;
    } else if (this.cantidad > this.disponibilidad) {this.error = true;
    } else {this.error = false;this.total = this.subtotal * this.cantidad;}
    const spanTotal = document.getElementById('total');
    if (spanTotal) {spanTotal.textContent = this.total.toFixed(2);}
  }
  regresar() {
    window.history.back();
  }
}
