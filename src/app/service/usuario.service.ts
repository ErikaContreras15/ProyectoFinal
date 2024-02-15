import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Usuario } from '../domain/usuario';
import { Observable, catchError, throwError } from 'rxjs';

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
  saveUsuario(usuario: Usuario): Observable<any> {
    console.log("Usuario a guardar en el servicio:", usuario);
    let url = environment.WS_PATH + "/usuarios";
    return this.http.post<any>(url, usuario);
  }
  updatePersona(usuario: Usuario){
    let url = environment.WS_PATH + "/usuario"
    return this.http.put<any>(url, usuario)
  }
  dropPersona(id: number){
    let url = environment.WS_PATH + "/usuario?id=" + id;
    console.log("URL del servicio web para eliminar:", url);
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          console.error("Error al eliminar persona:", error);
          throw error;
        })
      );
  }

  getUsuariosbyUsuario(usuario: string){
    let url = environment.WS_PATH + "/usuarios/userbyuser/"+ usuario;
    console.log("URL del servicio web:", url);
    return this.http.get<any>(url)
  }

  getUsuarioPorCodigo(codigo: number): Observable<any> {
    const url = `${environment.WS_PATH}/usuarios/userbycode/${codigo}`;
    return this.http.get<any>(url);
  }

  private baseUrl = 'http://localhost:8080/ProyectoFinal/rs/usuarios';
  verificarUsuario(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/userbyuserandpass/${username}&${password}`;
  
    // Configurar cabeceras HTTP si es necesario
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    // Cuerpo de la solicitud
    const body = { username, password };
  
    // Realizar la solicitud POST al backend
    return this.http.post<any>(url, body, { headers }).pipe(
      catchError(this.handleError) // Manejar errores si los hay
    );
  }
  

  // Manejar errores HTTP
  private handleError(error: any) {
    console.error('Error en el servicio de usuario:', error);
    return throwError('Error al realizar la solicitud. Por favor, intenta nuevamente.'); // Puedes personalizar el mensaje de error según tu caso
  }

}
