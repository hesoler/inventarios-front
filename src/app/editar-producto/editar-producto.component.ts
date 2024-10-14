import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Producto } from '@app/producto'
import { ProductoService } from '@services/producto.service'

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html'
})
export class EditarProductoComponent implements OnInit {
  producto: Producto = new Producto()
  id!: number

  constructor (
    private productoService: ProductoService,
    private ruta: ActivatedRoute,
    private enrutador: Router
  ) {}

  ngOnInit () {
    this.id = this.ruta.snapshot.params['id']
    this.productoService.obtenerProductoPorId(this.id).subscribe(
      {
        next: (data) => { this.producto = data },
        error: (errors: any) => { console.log(errors) }
      }
    )
  }

  onSubmit () {
    this.guardarProducto()
  }

  goToListaProductos () {
    this.enrutador.navigate(['/productos'])
  }

  guardarProducto () {
    this.productoService.guardarProducto(this.id, this.producto).subscribe(
      {
        next: (data) => { this.goToListaProductos() },
        error: (errors) => { console.log(errors) }
      }
    )
  }
}
