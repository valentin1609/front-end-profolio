export class User {
  nombre: string;
  apellido: string;
  username: string;
  password: string;
  email: string;
  ocupacion: string;
  empresa: string;

  constructor(
    nombre: string,
    apellido: string,
    username: string,
    password: string,
    email: string,
    ocupacion: string,
    empresa: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.username = username;
    this.password = password;
    this.email = email;
    this.ocupacion = ocupacion;
    this.empresa = empresa;
  }
}
