import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleFactura } from '../domain/detalleFactura';
import { Producto } from '../domain/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = 'http://localhost:8080/ProyectoFinal/rs/detalles/productos/1';

  constructor(private http: HttpClient) { }

  obtenerDetallesCarrito(): Observable<DetalleFactura[]> {
    return this.http.get<DetalleFactura[]>(this.apiUrl);
  }
}
