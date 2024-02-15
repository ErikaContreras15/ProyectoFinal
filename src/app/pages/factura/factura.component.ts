import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { Factura } from 'src/app/domain/factura';
import { Pago } from 'src/app/domain/pago';
import { ClienteService } from 'src/app/service/cliente.service';
import { FacturaService } from 'src/app/service/factura.service';
import { PagoService } from 'src/app/service/pago.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})

export class FacturaComponent {
  constructor(private router: Router, private facturaService: FacturaService, private clienteService: ClienteService, private pagoServices: PagoService) {}

  facturas: Factura[] = [];
  cli: Cliente = new Cliente
  codigoFactura: number = 1;
  productoAgregado: boolean = false;
  error: boolean = false;

  //-------CLIENTE-------
  nombreCompleto: string = "";
  cedula: string = "";
  ciudad: string = "";
  direccion: string = "";
  correoElectronico: string = "";
  numeroTelefono: string = "";
  codigo: number = 1;

  //-------PAGO-------
  metodoPago: string = "";
  numeroTarjeta: string = "";
  fechaVencimiento: string = "";
  cvv: string = "";

  aceptoTerminos: boolean = false; // Nueva propiedad

  ngOnInit(): void {
    this.obtenerValoresFactura();
  }

  irAUsuario() {
    this.router.navigate(['paginas/usuarios'], { replaceUrl: true });
  }

  irACarrito() {
    this.router.navigate(['paginas/carrito'], { replaceUrl: true });
  }

  regresar() {
    window.history.back();
  }

  obtenerValoresFactura(): void {
    this.facturaService.obtenerValoresCarrito().subscribe(
      (facturas: Factura[]) => {
        this.facturas = facturas;
      },
      (error) => {
        console.error('Error al obtener valores del carrito:', error);
      }
    );
  }

  asignarValoresaCliente(){
    const nuevoCliente: Cliente = {
      codigo: this.codigo,
      nombre: this.nombreCompleto,
      direccion: this.direccion,
      ciudad: this.ciudad,
      correo: this.correoElectronico,
      telefono: this.numeroTelefono,
      cedula: this.cedula
    };
    console.log('Nuevo cliente:', nuevoCliente);
    this.setearClienteAFactura(nuevoCliente);
    this.asignarValoresaPago();
    this.clienteService.saveCliente(nuevoCliente).subscribe(
      (response) => {console.log('Producto guardado exitosamente:', response);},
      (error) => {console.error('Error al guardar el producto:', error);}
    );
  }

  asignarValoresaPago(){
    const nuevoPago: Pago = {
      codigo: this.codigo,
      metodo: this.metodoPago,
      numero: this.numeroTarjeta,
      fecha: this.fechaVencimiento,
      cvv: this.cvv
    };
    console.log('Nuevo pago:', nuevoPago);
    this.setearPagoAFactura(nuevoPago);
    this.pagoServices.savePago(nuevoPago).subscribe(
      (response) => {console.log('Producto guardado exitosamente:', response);},
      (error) => {console.error('Error al guardar el producto:', error);}
    );
  }

  setearClienteAFactura(nuevoCliente: Cliente){
    const factura: Factura = new Factura();
    factura.setClientes([nuevoCliente]);
    const clientes: Cliente[] | undefined = factura.getClientes();
    this.facturaService.agregarClienteAFactura(this.codigoFactura, nuevoCliente).subscribe(
      (response) => {console.log('Cliente agregado Exitosamente a factura:', response);},
      (error) => {console.error('Error al agregar el cliente:', error);}
    );
  }

  setearPagoAFactura(nuevoPago: Pago){
    const factura: Factura = new Factura();
    factura.setPagos([nuevoPago]);
    const pagos: Pago[] | undefined = factura.getPagos();
    this.facturaService.agregarPagoAFactura(this.codigoFactura, nuevoPago).subscribe(
      (response) => {console.log('Cliente agregado Exitosamente a factura:', response);},
      (error) => {console.error('Error al agregar el cliente:', error);}
    );
  }

  agregarAlCarrito() {
    this.productoAgregado = true;
    setTimeout(() => {
      this.productoAgregado = false;
    }, 2000);
  }
}
