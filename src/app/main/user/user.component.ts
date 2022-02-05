import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeComponent } from '../account/change/change.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  sideNavOpened:boolean;
  username: string ="biggiebong13"
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(ChangeComponent, {id: 'jDialog'});
  }

  addItem(item: boolean){
    this.sideNavOpened = item;
  }

  onToggleNav() {
    this.sideNavOpened == false ? this.sideNavOpened = true : this.sideNavOpened = false ;
    this.addItem(this.sideNavOpened);
  }


  onEmailChange() {
    this.dialog.open(ChangeComponent);
  }

  onPassChange() {
    this.dialog.open(ChangeComponent);
  }


}
