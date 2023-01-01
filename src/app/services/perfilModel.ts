export class Perfil {
  id? : number;
  nombre: string;
  apellido: string;
  ocupacion: string;
  empresa: string;

  constructor(
    nombre: string,
    apellido: string,
    ocupacion: string,
    empresa: string,
    presentacion: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.ocupacion = ocupacion;
    this.empresa = empresa;
  }
}
