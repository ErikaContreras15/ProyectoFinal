import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { DetalleFactura } from '../domain/detalleFactura';
import { Producto } from '../domain/producto';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = 'http://localhost:8080/ProyectoFinal/rs/detalles/productos/1';

  constructor(private http: HttpClient) { }

  obtenerDetallesCarrito(): Observable<DetalleFactura[]> {
    return this.http.get<DetalleFactura[]>(this.apiUrl);
  }
  dropCarrito(codigo: number){
    let url = environment.WS_PATH + "/detalles/productos/" + codigo;
    console.log("URL del servicio web para eliminar:", url);
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          console.error("Error al eliminar persona:", error);
          throw error;
        })
      );
  }
  getProductosPorDetalle(codigoDetalle: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/ProyectoFinal/rs/detalles/productos/${codigoDetalle}`);
  }
}
