import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Usuario } from '../domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  getUsuarios(){
    let url = environment.WS_PATH + "/usuarios/list"
    console.log("URL del servicio web:", url);
    return this.http.get<any>(url)
  }
  saveUsuario(usuario: Usuario){
    let url = environment.WS_PATH + "/usuarios"
    return this.http.post<any>(url, usuario)
  }
  
  updatePersona(usuario: Usuario){
    let url = environment.WS_PATH + "/usuario"
    return this.http.put<any>(url, usuario)
  }

}
