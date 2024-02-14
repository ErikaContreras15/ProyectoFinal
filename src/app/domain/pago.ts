export class Pago {
    public _codigo?: number;
    public _metodo?: string;
    public _numero?: number;
    public _fecha?: Date;
    public _cvv?: string;


    public get codigo(): number | undefined {
        return this._codigo;
    }

    public set codigo(value: number | undefined) {
        this._codigo = value;
    }

    public get metodo(): string | undefined {
        return this._metodo;
    }

    public set metodo(value: string | undefined) {
        this._metodo = value;
    }

    public get numero(): number | undefined {
        return this._numero;
    }

    public set numero(value: number | undefined) {
        this._numero = value;
    }

    public get fecha(): Date | undefined {
        return this._fecha;
    }

    public set fecha(value: Date | undefined) {
        this._fecha = value;
    }

    public get cvv(): string | undefined {
        return this._cvv;
    }

    public set cvv(value: string | undefined) {
        this._cvv = value;
    }
}
