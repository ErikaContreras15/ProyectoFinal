import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  constructor(private router: Router) {}

  irAUsuario() {
    this.router.navigate(['paginas/usuarios'], { replaceUrl: true });
  }
  irACarrito() {
    this.router.navigate(['paginas/carrito'], {replaceUrl: true});
  }
}
