import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
@Output() addProjectEvent= new EventEmitter<MouseEvent>()
  constructor() { }

  ngOnInit(): void {
  }

  addProject(event:MouseEvent){
    this.addProjectEvent.emit(event);
  }

}
