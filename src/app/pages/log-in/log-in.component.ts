import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  usuario: string = '';
  contrasena: string = '';
  usuarioU: Usuario = new Usuario();
  error: boolean = false; 

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ingresar() {
    this.usuarioService.getUsuariosbyUsuario(this.usuario).subscribe(data => {
      this.usuarioU = data;
      if (this.usuarioU && this.usuarioU.contrasena === this.contrasena) {
        console.log("Contraseña válida");
        this.router.navigate(['paginas/home'], { replaceUrl: true });
      } else {
        console.log("Usuario o contraseña incorrectos.");
        this.error = true;
        alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
      }
    });
  } 

  public GetUsuarioCodigo(){
    this.usuarioService.getUsuariosbyUsuario(this.usuario).subscribe(data => {
      this.usuarioU = data;
    });
    return this.usuarioU.codigo
  }
}
 