export class Producto {
    private _codigo?: number;
    private _nombre?: string;
    private _descripcion?: string;
    private _precio?: number;
    private _iva?: number;
    private _talla?: string;
    private _stock?: number;
    private _marca?: string;
    private _peso?: number;

    public get codigo(): number | undefined {
        return this._codigo;
    }

    public set codigo(value: number | undefined) {
        this._codigo = value;
    }

    public get nombre(): string | undefined {
        return this._nombre;
    }

    public set nombre(value: string | undefined) {
        this._nombre = value;
    }

    public get descripcion(): string | undefined {
        return this._descripcion;
    }

    public set descripcion(value: string | undefined) {
        this._descripcion = value;
    }

    public get precio(): number | undefined {
        return this._precio;
    }

    public set precio(value: number | undefined) {
        this._precio = value;
    }

    public get iva(): number | undefined {
        return this._iva;
    }

    public set iva(value: number | undefined) {
        this._iva = value;
    }

    public get talla(): string | undefined {
        return this._talla;
    }

    public set talla(value: string | undefined) {
        this._talla = value;
    }

    public get stock(): number | undefined {
        return this._stock;
    }

    public set stock(value: number | undefined) {
        this._stock = value;
    }

    public get marca(): string | undefined {
        return this._marca;
    }

    public set marca(value: string | undefined) {
        this._marca = value;
    }

    public get peso(): number | undefined {
        return this._peso;
    }

    public set peso(value: number | undefined) {
        this._peso = value;
    }
}
