import { Project } from '../models/Projects';
import { NotepadService } from './../services/notepad.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Notes } from '../models/Notes';
import { ActivatedRoute, Router } from '@angular/router';
import { Fader, FaderNode } from '../../shared/animations/landing-page';

@Component({
  selector: 'app-base-notepad',
  templateUrl: './base-notepad.component.html',
  styleUrls: ['./base-notepad.component.css'],
  animations:[Fader.animations, FaderNode.animations]
})
export class BaseNotepadComponent implements OnInit {

projectForm: FormGroup;
projects: Project[]
projectName:string;
filteredNotes:Notes[];
isProjectCreateVisible:boolean=false;
isNoteListingVisible:boolean=false;
isNoteCreateVisible:boolean=false;
visibilityOnSubmit:boolean = false;
  constructor(
    private fb:FormBuilder,
    private notePad: NotepadService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.projectForm=this.fb.group({
      project:['', Validators.required],

    })

  }
get project(){return this.projectForm.get('project')}

receivedEvent(event){
  this.isProjectCreateVisible=true;
}

  onSubmit(){
    const project:Project={
      id:null,
      name:this.project.value
    }
    this.notePad.submitProject(project)
    this.isNoteCreateVisible=true;
    this.isProjectCreateVisible=false;
  }

  searchProject(project:string){
    console.log(project)
    }

}
