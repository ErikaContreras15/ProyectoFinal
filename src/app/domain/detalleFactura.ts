import { Factura } from "./factura";

import { Usuario } from "./usuario";

export class DetalleFactura {
    public _id?: number;
    public _precio?: number;
    public _cantidad?: number;
    public _subtotal?: number;
   
    public usuario?:  Usuario | null;
    public factura?: Factura | null;

    public get id(): number | undefined {
        return this._id;
    }

    public set id(value: number | undefined) {
        this._id = value;
    }

    public get precio(): number | undefined {
        return this._precio;
    }

    public set precio(value: number | undefined) {
        this._precio = value;
    }

    public get cantidad(): number | undefined {
        return this._cantidad;
    }

    public set cantidad(value: number | undefined) {
        this._cantidad = value;
    }

    public get subtotal(): number | undefined {
        return this._subtotal;
    }

    public set subtotal(value: number | undefined) {
        this._subtotal = value;
    }

   /* public get usuario(): Usuario | null | undefined {
        return this._usuario;
    }

    public set usuario(value: Usuario | null | undefined) {
        this._usuario = value;
    }

    public get factura(): Factura | null | undefined {
        return this._factura;
    }

    public set factura(value: Factura | null | undefined) {
        this._factura = value;
    }*/
}
