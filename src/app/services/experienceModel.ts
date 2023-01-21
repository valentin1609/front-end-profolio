export class Experience {
  id?: number;
  nombre: string;
  empresa: string;
  descripcion: string;
  inicio: string;
  fin: string;

  constructor(nombre: string, empresa: string, descripcion: string, inicio: string, fin: string) {
    this.nombre = nombre;
    this.empresa = empresa;
    this.descripcion = descripcion;
    this.inicio = inicio;
    this.fin = fin;
  }
}
