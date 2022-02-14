import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss']
})
export class NotebooksComponent implements OnInit {
  sideNavOpened: boolean;
  constructor() { }

  ngOnInit(): void {
    this.sideNavOpened=true
  }

 


  // const grid = Array.from(document.querySelector("#grid").children);
  // const baseOffset = grid[0].offsetTop;
  // const breakIndex = grid.findIndex(item => item.offsetTop > baseOffset);
  // const numPerRow = (breakIndex === -1 ? grid.length : breakIndex);

  //rawr = Array.from(Document.querySelector('ul'));


}
