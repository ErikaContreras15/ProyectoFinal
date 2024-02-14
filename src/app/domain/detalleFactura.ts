import { Factura } from "./factura";
import { Producto } from "./producto";
import { Usuario } from "./usuario";

export class DetalleFactura {
    public _id?: number;
    public _precio?: number;
    public _cantidad?: number;
    public _subtotal?: number;
   
    public usuario?:  Usuario | null;
    public factura?: Factura | null;
    public productos?: Producto[];

    constructor() {
        this.productos = [];
    }
    
    public getProductos(): Producto[] | undefined {
        return this.productos;
    }

    public setProductos(productos: Producto[]): void {
        this.productos = productos;
    }

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

    public setSubtotal(subtotal: number): void {
        this._subtotal = subtotal;
      }
}
