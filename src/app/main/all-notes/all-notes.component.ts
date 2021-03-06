import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {
  title:string = "All Notes";
  filterMenu = {
    'search' : true,
    'addButton' : true,
    'title' : 'Note',
    'sort' : true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
