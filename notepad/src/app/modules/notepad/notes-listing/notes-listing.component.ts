import { NotepadService } from './../services/notepad.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
project:string;
projectNotes:Notes[]=[]
filteredProjectNotes:Notes[]=[]
  constructor(private fb:FormBuilder, private notepadService: NotepadService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getNotes();

   this.getProjects()
    this.getParams();
  }
 getParams(){
  this.route.queryParamMap.subscribe(params=>{
      this.project= params.get('project');
      console.log(this.project)
      this.projectsFilter();
    })
  }
  getNotes(){
    this.notepadService.getNotes();
    this.notepadService.getUpdatedNotesListener()
    .subscribe(notes=>{
      this.projectNotes=this.filteredProjectNotes=notes;
      console.log(this.filteredProjectNotes)
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
       this.filteredProjectNotes = (this.project)?
       this.projectNotes.filter(p=>p.project===this.project):
       this.projectNotes;
       console.log(this.filteredProjectNotes)
    }

   searchProject(event){
     console.log(event)
   }

   delete(note:Notes){
this.notepadService.deleteNote(note);

}



  }
