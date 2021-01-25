import { Notes } from './../models/Notes';
import { NotepadService } from './../services/notepad.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/Categories';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-base-notepad',
  templateUrl: './base-notepad.component.html',
  styleUrls: ['./base-notepad.component.css']
})
export class BaseNotepadComponent implements OnInit {
notesForm: FormGroup;
notes: Notes[]
  constructor(private fb:FormBuilder, private notePad: NotepadService) { }

  ngOnInit(): void {
    this.notesForm=this.fb.group({
      note:['', Validators.required],
      title:['', Validators.required],
      date:[null,Validators.required]

    })
    this.getNotes();
  }
get note(){return this.notesForm.get('note')}
get title(){return this.notesForm.get('title')}
get date(){return this.notesForm.get('date')}


  onSubmit(){
    const noteObj:Notes={
      id:null,
      title:this.title.value,
      note:this.note.value,
      date:this.date.value
    }
    this.notePad.submitNotes(noteObj)
  }
  getNotes(){
    this.notePad.getNotes();
    this.notePad.getUpdatedNotesListener()
    .subscribe(notes=>{
      this.notes = notes
     console.log(this.notes)
    })
  }
}
