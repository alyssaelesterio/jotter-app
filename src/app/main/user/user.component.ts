import { Component, OnInit, SimpleChanges} from '@angular/core';
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

  drawerState:boolean = false;



  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    //this.dialog.open(ChangeComponent, {panelClass: 'custom-dialog-container', data:'false'})
  }

  

  onToggleNav() {
    console.log('onToggleNav', this.drawerState);
    this.drawerState == false ? this.drawerState = true : this.drawerState = false ;
    this.addItem(this.drawerState);
  }

  onEmailChange(e: Event) {
    e.preventDefault();
    this.dialog.open(ChangeComponent, {panelClass: 'custom-dialog-container', data:true});
  }

  onPassChange(e: Event) {
    e.preventDefault();
    this.dialog.open(ChangeComponent, {panelClass: 'custom-dialog-container', data:false});
  }


  addItem(item: boolean){
    this.drawerState = item;
  }


}
