import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  codeABuscar: number = 0;
  usuario: any = null;
  constructor(private usuarioService: UsuarioService, private router: Router) {}
  irAUsuario() {this.router.navigate(['paginas/usuarios'], { replaceUrl: true });}
  irACarrito() {this.router.navigate(['paginas/carrito'], {replaceUrl: true});}
  irAReporte() {this.router.navigate(['paginas/reporte'], {replaceUrl: true});}
  irALogIn() {this.router.navigate(['paginas/login'], {replaceUrl: true});}
  
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

