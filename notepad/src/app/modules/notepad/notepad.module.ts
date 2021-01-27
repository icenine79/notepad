import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNotepadComponent } from './base-notepad/base-notepad.component';
import { NotepadRoutingModule } from './notepad-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotesListingComponent } from './notes-listing/notes-listing.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteCreateComponent } from './note-create/note-create.component';




@NgModule({
  declarations: [BaseNotepadComponent, NotesListingComponent, NoteDetailComponent, NoteCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NotepadRoutingModule,
    NgbModule,
    MaterialModule
  ]
})
export class NotepadModule { }
