import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  constructor(private router: Router) {}

  irACrearCuenta() {
    this.router.navigate(['/paginas/SignUp'], { replaceUrl: true });
  }

  iniciarSesion() {
    this.router.navigate(['/paginas/SignUp'], { replaceUrl: true });
  }
}

