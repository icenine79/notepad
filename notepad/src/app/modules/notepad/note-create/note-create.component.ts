import { NotepadService } from './../services/notepad.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from '../models/Projects';
import { Notes } from '../models/Notes';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
notesForm:FormGroup
projects:Project[];
mode:string='create';
noteId:string;
note:any;
  constructor(
    private fb:FormBuilder,
    private notePadService: NotepadService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.notesForm=this.fb.group({
      note:['', Validators.required],
      project:['', Validators.required],
      date:[null,Validators.required]
    })
    this.route.paramMap.subscribe((paraMap:ParamMap)=>{
      if(paraMap.has('noteId')){
        this.mode='edit';
        this.noteId= paraMap.get('noteId');
        this.note=this.notePadService.getNote(this.noteId)
        .subscribe(noteData=>{
          this.note = { note: noteData.note};
          this.notesForm = new FormGroup({
            note : new FormControl(this.note['note']['note']),
            project : new FormControl(this.note['note']['project']),
            date : new FormControl(this.note['note']['date']),
          });
        })

      }else{
        this.mode='create';
        this.noteId=null;
      }
    })
    this.getProjects();
  }
  onSubmit(){
    if(this.mode==='create'){
      this.notePadService.submitNotes(this.notesForm.value)
      console.log(this.notesForm.value);
      this.router.navigate(['/notes-listing'])
    }else{
      this.notePadService.updateNote(
        this.noteId,this.notesForm.value)
        this.router.navigate(['/notes-listing'])

    }
  }
  test(event){
    console.log(event)
  }
  getProjects(){
    this.notePadService.getProjects();
    this.notePadService.getUpdatedProjectsListener()
    .subscribe(projects=>{
      this.projects=projects;
    })
  }
}
