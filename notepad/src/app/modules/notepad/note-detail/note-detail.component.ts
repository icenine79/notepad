import { NotepadService } from './../services/notepad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
id:string;
  constructor(private route: ActivatedRoute, private notePadService:NotepadService) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.id = params.get("id");
        return this.notePadService.getNote(this.id);
      })
    )
  }

}
