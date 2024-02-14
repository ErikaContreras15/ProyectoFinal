export class Usuario {
    public _codigo?: number;
    public _nombre?: string;
    public _usuario?: string;
    public _contrasena?: string;
    public _correo?: string;
  

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

    public get usuario(): string | undefined {
        return this._usuario;
    }

    public set usuario(value: string | undefined) {
        this._usuario = value;
    }

    public get contrasena(): string | undefined {
        return this._contrasena;
    }

    public set contrasena(value: string | undefined) {
        this._contrasena = value;
    }

    public get correo(): string | undefined {
        return this._correo;
    }

    public set correo(value: string | undefined) {
        this._correo = value;
    }
}

