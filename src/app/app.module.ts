import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './template/menu/menu.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';


@NgModule({
  declarations: [
    MenuComponent,
    AppComponent,
    LogInComponent,
    SignUpComponent,
    ProductosComponent,
    InicioComponent,
    FacturaComponent,
    AcercadeComponent,
    HomeComponent,
    OfertasComponent,
    UsuarioComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
