import { NoteResolver } from './resolvers/note-resolver.service';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NotesListingComponent } from './notes-listing/notes-listing.component';
import { BaseNotepadComponent } from './base-notepad/base-notepad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:BaseNotepadComponent},
  {path:'notes-listing', component:NotesListingComponent},
  {path:'notes-detail/:id', component:NoteDetailComponent, resolve:{detail:NoteResolver}},
  {path:'notes-create', component:NoteCreateComponent},
  {path:'edit/:noteId', component:NoteCreateComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotepadRoutingModule { }
