import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

import { FacturaComponent } from './pages/factura/factura.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
const routes: Routes = [
 
  {path: '', redirectTo: '/paginas/Inicio', pathMatch: 'full' },
  {path: 'paginas/Inicio',component:InicioComponent},
  {path: 'paginas/productos', component: ProductosComponent},
  {path: 'paginas/login', component: LogInComponent},
  {path: 'paginas/signUp', component: SignUpComponent},
  {path: 'paginas/Factura', component: FacturaComponent},

  {path: 'paginas/factura', component: FacturaComponent},


];












@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
