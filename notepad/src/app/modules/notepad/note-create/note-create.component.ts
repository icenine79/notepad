import { NotepadService } from './../services/notepad.service';
import { Component, OnChanges, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from '../models/Projects';
import { Notes } from '../models/Notes';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit, OnChanges {
notesForm:FormGroup
projects:Project[];
mode:string='create';
noteId:string;
note:any;
imagePreview:string;
isVisible:boolean=true;
  constructor(
    private fb:FormBuilder,
    private notePadService: NotepadService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnChanges(){

  }

    ngOnInit(): void {
    this.notesForm=this.fb.group({
      note:['', Validators.required],
      project:['', Validators.required],
      date:[null,Validators.required],
      image:[null, Validators.required]
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
//Getters
get notes(){return this.notesForm.get('note')};
get project(){return this.notesForm.get('project');}
get date(){return this.notesForm.get('date')};
get image(){return this.notesForm.get('image')};


  onSubmit(event){
    if(this.mode==='create'){
      this.notePadService.submitNotes(this.notesForm.value)
      console.log(this.notesForm.value);
      this.isVisible=false
       }else{
      this.notePadService.updateNote(
        this.noteId,this.notesForm.value)
       // this.router.navigate(['/notes-listing'])

    }
  }

  getProjects(){
    this.notePadService.getProjects();
    this.notePadService.getUpdatedProjectsListener()
    .subscribe(projects=>{
      this.projects=projects;
    })
  }
  onImagePick(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.notesForm.patchValue({image:file})
    this.image.updateValueAndValidity();
   const reader =  new FileReader()
  reader.onload =()=>{
    this.imagePreview=reader.result as string;
   }
   reader.readAsDataURL(file)
  }
}
