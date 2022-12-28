export class Contact {
  id?: number;
  nombre: string;
  url: string;

  constructor(nombre: string, url: string) {
    this.nombre = nombre;
    this.url = url;
  }
}
