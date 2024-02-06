
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedOption: string | null = null;

  selectOption(option: string) {
    this.selectedOption = option;
  }

  selectedProduct: string | null = null;
  selectProduct(product: string) {
    this.selectedProduct = product;
  }
}
