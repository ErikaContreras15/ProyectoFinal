
import { carritoCompras } from "./carritoCompras";
export class Factura{

    idFactura: number=0;
    codigo:string='';
    fecha:Date | undefined;
    total: number=0.0;

    
    carritoCompras:carritoCompras = new carritoCompras();
}