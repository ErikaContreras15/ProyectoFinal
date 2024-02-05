import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

}

function moveImage(element: HTMLElement) {
  element.style.transform = 'translateY(-10px)';
  setTimeout(() => {
    element.style.transform = 'translateY(0)';
  }, 300);
}



