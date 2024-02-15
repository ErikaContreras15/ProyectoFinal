import { Cliente } from "./cliente";
import { DetalleFactura } from "./detalleFactura";
import { Pago } from "./pago";
export class Factura {
    public _id?: number;
    public _fecha?: Date;
    public _subtotal?: number;
    public _iva?: number;
    public _total?: number;

    public pago?: Pago[];
    public detalles?: DetalleFactura[];
    public clientes?: Cliente[];

    public getClientes(): Cliente[] | undefined {
        return this.clientes;
    }
    public setClientes(clientes: Cliente[]): void {
        this.clientes = clientes;
    }
    public getPagos(): Pago[] | undefined {
        return this.pago;
    }
    public setPagos(pagos: Pago[]): void {
        this.pago = pagos;
    }

    public get id(): number | undefined {
        return this._id;
    }

    public set id(value: number | undefined) {
        this._id = value;
    }

    public get fecha(): Date | undefined {
        return this._fecha;
    }

    public set fecha(value: Date | undefined) {
        this._fecha = value;
    }

    public get subtotal(): number | undefined {
        return this._subtotal;
    }

    public set subtotal(value: number | undefined) {
        this._subtotal = value;
    }

    public get iva(): number | undefined {
        return this._iva;
    }

    public set iva(value: number | undefined) {
        this._iva = value;
    }

    public get total(): number | undefined {
        return this._total;
    }

    public set total(value: number | undefined) {
        this._total = value;
    }

    /*public get pago(): Pago | undefined {
        return this._pago;
    }

    public set pago(value: Pago | undefined) {
        this._pago = value;
    }

    public get detalles(): DetalleFactura[] | undefined {
        return this._detalles;
    }

    public set detalles(value: DetalleFactura[] | undefined) {
        this._detalles = value;
    }*/
}
