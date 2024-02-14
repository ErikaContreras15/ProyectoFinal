import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}
  irAUsuario() {this.router.navigate(['paginas/usuarios'], { replaceUrl: true });}
  irACarrito() {this.router.navigate(['paginas/carrito'], {replaceUrl: true});}

  selectedOption: string | null = null;

  selectOption(option: string) {
    this.selectedOption = option;
  }

  selectedProduct: string | null = null;
  selectProduct(product: string) {
    this.selectedProduct = product;
  }


}
