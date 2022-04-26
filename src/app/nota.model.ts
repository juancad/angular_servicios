export class Nota{

  constructor(titulo:string, contenido:string, color:string){
    this.titulo=titulo,
    this.contenido=contenido,
    this.color=color;
    this.fecha=new Date();
  }

  titulo="";
  contenido="";
  color="lightyellow";
  fecha=new Date();
}