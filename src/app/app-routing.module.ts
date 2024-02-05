import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

const routes: Routes = [
  {path: '', redirectTo: '/paginas/Inicio', pathMatch: 'full' },
  {path: 'paginas/Inicio',component:InicioComponent},
  {path: 'paginas/login', component: LogInComponent},
  {path: 'paginas/signUp', component: SignUpComponent},
  {path: 'paginas/Factura', component: FacturaComponent},
  {path: 'paginas/productos', component: ProductosComponent},
  {path: 'paginas/acercade', component: AcercadeComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

