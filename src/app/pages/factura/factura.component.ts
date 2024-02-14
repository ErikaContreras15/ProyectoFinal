import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})

export class FacturaComponent {
  detallesPersonales = {
    nombreCompleto: '',
    cedula: '',
    ciudad: 'blank',
    direccion: '',
    correoElectronico: '',
    numeroTelefono: ''
  };

  detallesPago = {
    metodoPago: 'blank',
    numeroTarjeta: '',
    fechaVencimiento: '',
    cvv: ''
  };

  constructor(private router: Router) {}

  guardarFactura() {
    // Aquí puedes implementar la lógica para guardar la factura
    // Por ejemplo, puedes enviar los detalles al servidor, mostrar un mensaje de confirmación, etc.
    console.log('Detalles de la factura:', this.detallesPersonales, this.detallesPago);

    // Después de guardar la factura, redirige a la página de usuarios
    this.irAUsuario();
  }

  irAUsuario() {
    this.router.navigate(['paginas/usuarios'], { replaceUrl: true });
  }

  irACarrito() {
    this.router.navigate(['paginas/carrito'], { replaceUrl: true });
  }
  regresar() {window.history.back();}
}

