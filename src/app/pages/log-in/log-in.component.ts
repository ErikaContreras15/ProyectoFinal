import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  constructor(private router: Router, private usuarioService: UsuarioService) {}
  irAHome() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    this.usuarioService.verificarUsuario(username, password).subscribe(
      (response: any) => {
        if (response.codigo) {
          this.router.navigate(['paginas/home'], { replaceUrl: true });
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      },
      (error) => {
        console.error('Error al verificar usuario:', error);
        alert('Error al verificar usuario. Por favor, intenta nuevamente.');
      }
    );
  }
}

