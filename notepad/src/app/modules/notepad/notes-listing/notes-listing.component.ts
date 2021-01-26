import { NotepadService } from './../services/notepad.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../models/Projects';
import { ActivatedRoute } from '@angular/router';
import { Notes } from '../models/Notes';

@Component({
  selector: 'app-notes-listing',
  templateUrl: './notes-listing.component.html',
  styleUrls: ['./notes-listing.component.css']
})
export class NotesListingComponent implements OnInit {
projects:Project[]
notesForm:FormGroup;
name:string;
projectNotes:Notes[]=[]
filteredProjectNotes:Notes[]=[]
  constructor(private fb:FormBuilder, private notepadService: NotepadService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.notesForm=this.fb.group({
      note:['', Validators.required],
      project:['', Validators.required],
      date:[null,Validators.required]

    })
   this.getProjects()
    this.getParams();
  }
 getParams(){
  this.route.queryParamMap.subscribe(params=>{
      this.name= params.get('project');
      console.log(this.name)
      this.projectsFilter();
    })
  }
  getNotes(){
    this.notepadService.getNotes();
    this.notepadService.getUpdatedNotesListener()
    .subscribe(notes=>{
      this.projectNotes=this.filteredProjectNotes=notes;
      console.log(this.projectNotes)
    })
  }
  getProjects(){
    this.notepadService.getProjects();
    this.notepadService.getUpdatedProjectsListener()
    .subscribe(projects=>{
      this.projects=projects;
    })
  }
     projectsFilter(){
       this.filteredProjectNotes = (this.name)?
       this.projectNotes.filter(p=>p.project===this.name):
       this.projectNotes;
    }
  }
