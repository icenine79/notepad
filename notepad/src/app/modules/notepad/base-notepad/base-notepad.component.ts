import { Project } from '../models/Projects';
import { NotepadService } from './../services/notepad.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Notes } from '../models/Notes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-notepad',
  templateUrl: './base-notepad.component.html',
  styleUrls: ['./base-notepad.component.css']
})
export class BaseNotepadComponent implements OnInit {
projectForm: FormGroup;
projects: Project[]
projectName:string;
filteredNotes:Notes[]
  constructor(private fb:FormBuilder, private notePad: NotepadService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectForm=this.fb.group({
      project:['', Validators.required],

    })

  }
get project(){return this.projectForm.get('project')}



  onSubmit(){
    const project:Project={
      id:null,
      name:this.project.value
    }
    this.notePad.submitProject(project)
  }

  searchProject(project:string){
    console.log(project)
    }

}
