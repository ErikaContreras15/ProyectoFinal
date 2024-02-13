import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent{
  constructor(private router: Router){}

  IrAlProductoUno() {
    this.router.navigate(['paginas/odertas'], { replaceUrl: true });
  }
}




