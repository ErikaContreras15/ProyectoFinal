import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Pago } from '../domain/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    let url = environment.WS_PATH + "/pagos/list"
    console.log("URL del servicio web:", url);
    return this.http.get<any>(url)
  }
  saveUsuario(pago: Pago){
    let url = environment.WS_PATH + "/pagos"
    return this.http.post<any>(url, pago)
  }
  
  updatePersona(pago: Pago){
    let url = environment.WS_PATH + "/pagos"
    return this.http.put<any>(url, pago)
  }

}