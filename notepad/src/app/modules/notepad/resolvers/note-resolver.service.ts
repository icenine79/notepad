import { Notes } from './../models/Notes';
import { NotepadService } from './../services/notepad.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeroResolver implements Resolve<Notes> {
  constructor(private notePadservice: NotepadService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.notePadservice.getNote(route.paramMap.get('id'));
  }
}
