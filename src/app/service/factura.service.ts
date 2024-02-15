import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Factura } from '../domain/factura';
import { Observable, catchError } from 'rxjs';

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
  private apiUrl2 = 'http://localhost:8080/ProyectoFinal/rs/facturas/list';
  obtenerValoresCarrito(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.apiUrl2);
  }

  private apiUrl = 'http://localhost:8080/ProyectoFinal/rs/facturas';
  agregarClienteAFactura(codigoFactura: number, cliente: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregarCliente?codigoFactura=${codigoFactura}`, cliente);
  }
  agregarPagoAFactura(codigoFactura: number, pago: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregarPago?codigoFactura=${codigoFactura}`, pago);
  }
}
