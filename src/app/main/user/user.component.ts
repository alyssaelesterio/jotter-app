import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  sideNavOpened:boolean;
  username: string ="biggiebong13"
  
  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: boolean){
    this.sideNavOpened = item;
  }


}
