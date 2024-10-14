import { Component, OnInit } from '@angular/core'
import { Producto } from '@app/producto'
import { ProductoService } from '@services/producto.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {
  productos!: Producto[]

  constructor (
    private readonly productoServicio: ProductoService,
    private readonly enrutador: Router
  ) { }

  ngOnInit () {
    // cargar los productos
    this.obtenerProductos()
  }

  private obtenerProductos () {
    // consumir los datos del observable (suscribirnos)
    this.productoServicio.obtenerProductosLista().subscribe(
      data => { this.productos = data }
    )
  }

  editarProducto (id: number) {
    this.enrutador.navigate(['editar-producto', id])
  }

  eliminarProducto (id: number) {
    this.productoServicio.eliminarProducto(id).subscribe(
      {
        next: (data) => { this.obtenerProductos() },
        error: (errors) => { console.log(errors) }
      }
    )
  }
}
