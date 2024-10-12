import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Producto } from '@app/producto'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlBase = 'http://localhost:8080/inventario-app/productos'

  constructor (private clienteHttp: HttpClient) { }

  obtenerProductosLista (): Observable<Producto[]> {
    return this.clienteHttp.get<Producto[]>(this.urlBase)
  }

  agregarProducto (producto: Producto): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, producto)
  }
}
