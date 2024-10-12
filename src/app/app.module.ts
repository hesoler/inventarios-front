import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ProductoListaComponent } from './producto-lista/producto-lista.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AgregarProductoComponent,
    PageNotFoundComponent,
    ProductoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
