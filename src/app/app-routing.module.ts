import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { MenuComponent } from './template/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {path: '', redirectTo: '/paginas/Inicio', pathMatch: 'full' },
  {path: 'paginas/Inicio',component:InicioComponent},
  {path: 'paginas/login', component: LogInComponent},
  {path: 'paginas/signUp', component: SignUpComponent},
  {path: 'paginas/Factura', component: FacturaComponent},
  {path: 'paginas/productos', component: ProductosComponent},
  {path: 'paginas/acercade', component: AcercadeComponent},
  {path: 'paginas/menu', component: MenuComponent},
  {path: 'paginas/home', component: HomeComponent},
  { path: 'pagina/productos', component: ProductosComponent },
  { path: 'paginas/ofertas', component: OfertasComponent },
  { path: 'paginas/usuarios', component: UsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

