import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Pago } from '../domain/pago';
import { catchError } from 'rxjs';

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
}