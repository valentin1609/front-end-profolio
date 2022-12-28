export class Proyect {
    id?: number;
    nombre: string;
    url: string;
    descripcion: string;
    foto : string;
  
    constructor(nombre: string, url: string, descripcion: string, foto : string) {
      this.nombre = nombre;
      this.url = url;
      this.descripcion = descripcion;3
      this.foto = foto;
    }
  }