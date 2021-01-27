import { NotepadService } from './../services/notepad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Notes } from '../models/Notes';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
id:string;
notes:Notes[]
  constructor(private route: ActivatedRoute, private notePadService:NotepadService) { }

  ngOnInit(): void {
    this.route.data.subscribe(notes=>{
      this.notes =Array.of(notes).map(n=>n['detail']['note'])
      console.log(this.notes)
    })
    }

}

