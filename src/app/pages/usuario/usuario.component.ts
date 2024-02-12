import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  codeABuscar: number = 0;
  usuario: any = null;
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  realizarBusqueda(): void {
    this.usuarioService.getUsuarioPorCodigo(this.codeABuscar).subscribe((result: any) => {
      console.log('Datos del usuario recibidos:', result);
      this.usuario = result;
    }, (error) => {
      console.error('Error al buscar usuario:', error);
    });
  }
  irAIniciarSesion() {
    this.router.navigate(['paginas/usuarios'], { replaceUrl: true });
  }
}

