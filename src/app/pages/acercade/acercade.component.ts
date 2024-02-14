import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.scss']
})
export class AcercadeComponent {
  constructor(private router: Router) {}
  irAUsuario() {
    this.router.navigate(['paginas/usuarios'], { replaceUrl: true });
  }
  irACarrito() {
    this.router.navigate(['paginas/carrito'], {replaceUrl: true});
  }
}
