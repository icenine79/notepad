import { Notes } from './../models/Notes';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Project } from '../models/Projects';
@Injectable({
  providedIn: 'root'
})
export class NotepadService {
  updatedNotes = new Subject<any[]>()
  notes:any[]=[];
  projects:Project[]=[];
  updatedProjects = new Subject<Project[]>()
  constructor(private http: HttpClient) { }



getNote(id:string){
  return this.http.get<any>('http://localhost:3000/api/notes/'+id)
}
  getNotes(){
  this.http.get<{message:string, notesObj:any}>('http://localhost:3000/api/notes')
  .pipe(map(notesData=>{
    return notesData.notesObj.map(note=>{
      return {
        id: note._id,
        project: note.project,
        note:note.note,
        date:note.date
      }
    })
  }))
  .subscribe(transformedData=>{
    this.notes = transformedData;
    this.updatedNotes.next([...this.notes])
  })
}
getProjects(){
  this.http.get<{message:string, project:any}>('http://localhost:3000/api/projects')
  .pipe(map(projectsData=>{
    return projectsData.project.map(project=>{
      return{
        id:project._id,
        name:project.name
      }
    })
  }))
  .subscribe(transformedData=>{
    this.projects=transformedData;
    this.updatedProjects.next([...this.projects]);
})
}
submitNotes(note:Notes){
  this.http.post<{message:string, noteId:any, notes:any}>('http://localhost:3000/api/notes',note)
  .subscribe(data=>{
    const id=data.noteId
    note.id=id
    this.notes.push(note)
    this.updatedNotes.next([...this.notes])
    console.log(data.message)
    console.log(data.notes)
  })
}

  submitProject(newProject:any){
    this.http.post<{message:string, projectId:string}>('http://localhost:3000/api/projects', newProject)
    .subscribe(responseData=>{
      const id = responseData.projectId;
      newProject.id = id; //transforma o _id mongo no id front end
       this.projects.push(newProject);
      this.updatedProjects.next([...this.projects])
      console.log(responseData.message);
    });
  }
  getUpdatedNotesListener(){
    return this.updatedNotes.asObservable();
  }
  getUpdatedProjectsListener(){
    return this.updatedProjects.asObservable();
  }

  deleteNote(note:Notes){
   /* return */ this.http.delete<{message:string, noteId:string}>('http://localhost:3000/api/notes/'+note)
    .subscribe(note=>{
      const updatedNotes = this.notes.filter(n=>n.note!==note);
      this.notes=updatedNotes;
      this.updatedNotes.next([...this.notes]);
      console.log(note.message)
    })
  }

  updateNote(id:string,note:Notes){
    this.http.put('http://localhost:3000/api/notes/'+id,note)
    .subscribe(response=>console.log(response))
}
}
