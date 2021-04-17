import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test board', [
    new Column('Ideas', [
      "Some random idea",
      "Build an awesome application"
    ]),
    new Column('Research', [
      "Lorem ipsum",
      "foo"
    ]),
    new Column('Todo', [
      "Get to work",
      "go to sleep"
    ]),
    new Column('Done', [
      "get up",
      "brush teeth"
    ])
  ]);

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else{
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
