import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  showFiller = false;
  sideNavOpened:boolean;
  constructor() { }

  ngOnInit(): void {
  }


  onToggle() {

  }


  addItem(item: boolean){

    this.sideNavOpened = item;
  }
}
