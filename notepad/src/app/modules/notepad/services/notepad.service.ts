import { Notes } from './../models/Notes';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
@Injectable({
  providedIn: 'root'
})
export class NotepadService {
  updatedNotes = new Subject<Notes[]>()
  notes:Notes[]=[];
  constructor(private http: HttpClient) { }

  getNotes(){
  this.http.get<{message:string, notesObj:any}>('http://localhost:3000/api/notes')
  .pipe(map(notesData=>{
    return notesData.notesObj.map(note=>{
      return {
        id: note._id,
        title: note.title,
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



  submitNotes(note:Notes){
    this.http.post<{message:string, noteId:string}>('http://localhost:3000/api/notes', note)
    .subscribe(responseData=>{
      const id = responseData.noteId;
      note.id = id; //transforma o _id mongo no id front end
       this.notes.push(note);
      this.updatedNotes.next([...this.notes])
      console.log(responseData.message);
    });
  }
  getUpdatedNotesListener(){
    return this.updatedNotes.asObservable();
  }
}
