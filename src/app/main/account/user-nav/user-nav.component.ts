import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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

  isNavOpen:boolean = false;

  @Output() sidenav: EventEmitter<any> = new EventEmitter();

  @Input('drawerState') drawerState: boolean;


  constructor() { }

  ngOnInit(): void {
  }


  toggle() {
    this.sidenav.emit();
  }


}
