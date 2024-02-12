import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Factura } from '../domain/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    let url = environment.WS_PATH + "/facturas/list"
    console.log("URL del servicio web:", url);
    return this.http.get<any>(url)
  }
  saveUsuario(factura: Factura){
    let url = environment.WS_PATH + "/facturas"
    return this.http.post<any>(url, factura)
  }
  
  updatePersona(factura: Factura){
    let url = environment.WS_PATH + "/facturas"
    return this.http.put<any>(url, factura)
  }

}
