import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productoc',
  templateUrl: './productoc.component.html',
  styleUrls: ['./productoc.component.scss']
})
export class ProductocComponent {
  constructor(private router: Router) {}
  irAUsuario() {this.router.navigate(['paginas/usuarios'], { replaceUrl: true });}
  irACarrito() {this.router.navigate(['paginas/carrito'], {replaceUrl: true});}
  peso: number = 200;
  codigo: number = 15251489;
  subtotal: number = 33.60;
  cantidad: number = 0;
  total: number = 0;
  error: boolean = false;
  disponibilidad: number = 300;

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
