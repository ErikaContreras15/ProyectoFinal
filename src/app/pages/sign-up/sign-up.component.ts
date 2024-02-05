import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private router: Router) {}
 
  irACrearCuenta() {
    this.router.navigate(['paginas/login'], { replaceUrl: true });
  }

}
