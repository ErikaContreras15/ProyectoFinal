import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Cliente } from '../domain/cliente';

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

}