export class Education{
id?:number;
nombre:string;
instituto:string;
inicio:string;
fin:string;
foto:string;

constructor(
nombre:string,
instituto:string,
inicio:string,
fin:string,
foto:string
) {
    this.nombre = nombre;
    this.instituto = instituto;
    this.inicio = inicio;
    this.fin = fin;
    this.foto = foto;
}
}
