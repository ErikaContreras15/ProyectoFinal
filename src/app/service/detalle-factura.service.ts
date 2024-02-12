import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleFactura } from '../domain/detalleFactura';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    let url = environment.WS_PATH + "/detalles/list"
    console.log("URL del servicio web:", url);
    return this.http.get<any>(url)
  }
  saveUsuario(detalle_factura: DetalleFactura){
    let url = environment.WS_PATH + "/detalles"
    return this.http.post<any>(url, detalle_factura)
  }
  
  updatePersona(detalle_factura: DetalleFactura){
    let url = environment.WS_PATH + "/detalles"
    return this.http.put<any>(url, detalle_factura)
  }

}

