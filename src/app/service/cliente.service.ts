import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Cliente } from '../domain/cliente';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    let url = environment.WS_PATH + "/clientes/list"
    console.log("URL del servicio web:", url);
    return this.http.get<any>(url)
  }
  saveUsuario(cliente: Cliente){
    let url = environment.WS_PATH + "/cliente"
    return this.http.post<any>(url, cliente)
  }
  
  updatePersona(cliente: Cliente){
    let url = environment.WS_PATH + "/cliente"
    return this.http.put<any>(url, cliente)
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
  saveCliente(cliente: Cliente) {
    console.log('cliente recibido en el servicio:', cliente); // Verificar que el objeto producto se reciba correctamente
    let url = environment.WS_PATH + "/clientes";
    return this.http.post<any>(url, cliente)
        .pipe(
            tap(response => console.log('Respuesta del servidor:', response)), // Verificar la respuesta del servidor
            catchError(error => {
                console.error('Error al guardar el producto:', error);
                throw error;
            })
        );
  }

}