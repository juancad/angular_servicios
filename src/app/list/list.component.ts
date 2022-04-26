import { Component, Input, OnInit } from '@angular/core';
import { Nota } from '../nota.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // Indicamos que vamos a recibir datos del componente padre -notes-

  @Input() notaList:Nota=new Nota("","","lightyellow");
  @Input() indexList:number=0;

  mark=false;

  addMark(newMark: boolean) {
    this.mark=(newMark);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
