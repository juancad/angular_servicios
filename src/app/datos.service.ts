import { Nota } from "./nota.model";

export class DatosServicio {

  notas:Nota[]=[

    new Nota("Tu primera nota.", "Este es el contenido de tu primera nota", "lightyellow"),

  ];

  addNotaServicio(miNota:Nota){

    this.notas.push(miNota);

  }

}
