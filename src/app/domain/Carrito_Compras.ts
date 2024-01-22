
import { Ofertas } from "./Ofertas";
import { Producto } from "./Producto";

export class Carrito_Compras{

    idCarrito_Compras: number=0;
    codigo:string='';
    fecha_Creacion:Date | undefined;
    estado:string='';

    producto!:Producto;
    ofertas!:Ofertas;
}