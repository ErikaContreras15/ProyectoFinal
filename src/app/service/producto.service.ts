import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../domain/producto';
import { environment } from 'src/environments/environments';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    let url = environment.WS_PATH + "/productos/list"
    console.log("URL del servicio web:", url);
    return this.http.get<any>(url)
  }
  saveUsuario(producto: Producto){
    let url = environment.WS_PATH + "/productos"
    return this.http.post<any>(url, producto)
  }
  
  updatePersona(producto: Producto){
    let url = environment.WS_PATH + "/productos"
    return this.http.put<any>(url, producto)
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
  saveProducto(producto: Producto): Observable<any> {
    return this.http.post(`${environment.WS_PATH}/productos`, producto);
  }
}
