import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notemark',
  templateUrl: './notemark.component.html',
  styleUrls: ['./notemark.component.css']
})
export class NotemarkComponent implements OnInit {

  //Hacemos una salida desde el hijo, el dato que sale es un número

@Output() newMarkEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  // Añadimos la nota

  addnewMark(value: boolean){
    this.newMarkEvent.emit(value);
  }

}
