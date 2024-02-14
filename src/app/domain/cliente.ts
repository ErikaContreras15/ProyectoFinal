export class Cliente {
    public _codigo?: number;
    public _nombre?: string;
    public _direccion?: string;
    public _ciudad?: string;
    public _correo?: string;
    public _telefono?: string;

  
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
  
      public get direccion(): string | undefined {
          return this._direccion;
      }
  
      public set direccion(value: string | undefined) {
          this._direccion = value;
      }
  
      public get ciudad(): string | undefined {
          return this._ciudad;
      }
  
      public set ciudad(value: string | undefined) {
          this._ciudad = value;
      }
  
      public get correo(): string | undefined {
          return this._correo;
      }
  
      public set correo(value: string | undefined) {
          this._correo = value;
      }
  
      public get telefono(): string | undefined {
          return this._telefono;
      }
  
      public set telefono(value: string | undefined) {
          this._telefono = value;
      }
  }
  