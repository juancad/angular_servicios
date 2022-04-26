import { DatosServicio } from './datos.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ListComponent } from './list/list.component';
import { NotemarkComponent } from './notemark/notemark.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ListComponent,
    NotemarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatosServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
