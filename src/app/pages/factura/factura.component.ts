import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {
  constructor(private router: Router) {}
  irAUsuario() {
    this.router.navigate(['paginas/usuarios'], { replaceUrl: true });
  }
  irACarrito() {
    this.router.navigate(['paginas/carrito'], {replaceUrl: true});
  }
}
