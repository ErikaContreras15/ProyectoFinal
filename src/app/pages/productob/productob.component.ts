import { Component } from '@angular/core';

@Component({
  selector: 'app-productob',
  templateUrl: './productob.component.html',
  styleUrls: ['./productob.component.scss']
})
export class ProductobComponent {
  peso: number = 600;
  codigo: number = 15000150;
  subtotal: number = 20.00;
  cantidad: number = 0;
  total: number = 0;
  error: boolean = false;
  disponibilidad: number = 50;

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
