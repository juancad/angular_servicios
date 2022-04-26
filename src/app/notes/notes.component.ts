import { Component, OnInit } from '@angular/core';
import { Nota } from "./../nota.model";
import { DatosServicio } from './../datos.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  title = "Crear una nota";
  DatosServicio: any;

  constructor(private notaServicio: DatosServicio){
      //this.notas=this.notaServicio.notas;
  }

  notas:Nota[]=[];

  altaNota(): void{
    let miNota=new Nota(this.boxTitulo, this.boxContenido, this.boxColor);
    this.notaServicio.addNotaServicio(miNota);
  }

  boxTitulo:string="";
  boxContenido:string="";
  boxColor:string="lightyellow";

  ngOnInit(): void {

    this.notas=this.notaServicio.notas;

  }
}
