import { NotepadService } from './../services/notepad.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../models/Projects';
import { Notes } from '../models/Notes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
notesForm:FormGroup
projects:Project[]
  constructor(private fb:FormBuilder, private notePadService: NotepadService, private router: Router) { }

  ngOnInit(): void {
    this.notesForm=this.fb.group({
      note:['', Validators.required],
      project:['', Validators.required],
      date:[null,Validators.required]

    })
    this.getProjects();
  }
  onSubmit(){
    this.notePadService.submitNotes(this.notesForm.value)
    console.log(this.notesForm.value);
    this.router.navigate(['/notes-listing'])
  }

  getProjects(){
    this.notePadService.getProjects();
    this.notePadService.getUpdatedProjectsListener()
    .subscribe(projects=>{
      this.projects=projects;
    })
  }
}
