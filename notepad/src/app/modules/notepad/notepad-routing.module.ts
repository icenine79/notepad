import { NotesListingComponent } from './notes-listing/notes-listing.component';
import { BaseNotepadComponent } from './base-notepad/base-notepad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:BaseNotepadComponent},
  {path:'notes-listing', component:NotesListingComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotepadRoutingModule { }
