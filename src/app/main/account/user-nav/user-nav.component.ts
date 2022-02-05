import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {
  centered = true;
  unbounded = true;

  radius: number = 40;
  color: string = "rgb(51, 51, 51, 0.30)";

  @Output() newItemEvent = new EventEmitter<boolean>();

  isNavOpen:boolean = false;

  constructor() { }

  ngOnInit(): void {
    //this.newItemEvent.subscribe(data => console.log(data));
  }


  addNewItem() {
    //alert(this.isNavOpen);
    this.isNavOpen == false ? this.isNavOpen = true : this.isNavOpen = false ;
    this.newItemEvent.emit(this.isNavOpen);
  }

  
}
