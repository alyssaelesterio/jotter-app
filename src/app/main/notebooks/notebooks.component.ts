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

}