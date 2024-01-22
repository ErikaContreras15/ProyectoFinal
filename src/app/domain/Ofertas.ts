
import { producto } from "./producto";
export class Ofertas{

    idOfertas: number=0;
    codigo:string='';
    fecha_Inicio:Date | undefined;
    fecha_fin:Date | undefined;

    producto!:producto;
}