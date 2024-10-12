import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductoListaComponent } from './producto-lista/producto-lista.component'
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'productos', title: 'Producto Lista', component: ProductoListaComponent },
  { path: 'agregar', title: 'Agregar Producto', component: AgregarProductoComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: '**', title: '404 Not Found Inventario App', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
