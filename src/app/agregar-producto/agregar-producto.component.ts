import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Producto } from '@app/producto'
import { ProductoService } from '@services/producto.service'

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  producto: Producto = new Producto()

  constructor (
    private productoService: ProductoService,
    private enrutador: Router
  ) { }

  onSubmit () {
    this.guardarProducto()
  }

  goToListaProductos () {
    this.enrutador.navigate(['/productos'])
  }

  guardarProducto () {
    this.productoService.agregarProducto(this.producto).subscribe(
      {
        next: (data) => { this.goToListaProductos() },
        error: (error: any) => { console.log(error) }
      }
    )
  }
}
