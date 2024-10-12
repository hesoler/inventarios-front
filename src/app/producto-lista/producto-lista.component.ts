import { Component, OnInit } from '@angular/core'
import { Producto } from '@app/producto'
import { ProductoService } from '@services/producto.service'

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {
  productos!: Producto[]

  constructor (private productoServicio: ProductoService) { }

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
}
