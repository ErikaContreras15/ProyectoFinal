import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  selectedOption: string | null = null;

  selectOption(option: string) {
    this.selectedOption = option;
  }

  selectedProduct: string | null = null;
  selectProduct(product: string) {
    this.selectedProduct = product;
  }

  irAIniciarSesion() {
    this.router.navigate(['paginas/usuarios'], { replaceUrl: true });
  }

}
