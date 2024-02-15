import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private router: Router, private usuariosServices: UsuarioService) {}
  
  usuarios: any;
  user: Usuario = new Usuario();

  ngOnInit(): void {
    this.usuarios = this.usuariosServices.getUsuarios();
  }
 
  irAIniciarSesion() {
    this.router.navigate(['paginas/login'], { replaceUrl: true });
  }

  guardar() {
    console.log("Usuario a guardar:", this.user);
    this.usuariosServices.saveUsuario(this.user).subscribe(data => {
      console.log("Respuesta del servidor:", data);
      this.ngOnInit();
    });
    this.irAIniciarSesion();
  }
  
}
