export interface Iusuario {

  id?: number;
  username: string;
  password: string;
  email: string;
  telefono: string;
  estado: boolean;
  fechaCreacion?: Date;
  rol: string;
}
