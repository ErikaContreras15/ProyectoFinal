
import { Carrito_Compras } from "./Carrito_Compras";
export class Factura{

    idFactura: number=0;
    codigo:string='';
    fecha:Date | undefined;
    total: number=0.0;

    Carrito_Compras:Carrito_Compras = new Carrito_Compras();
}