import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createdit',
  templateUrl: './createdit.component.html',
  styleUrls: ['./createdit.component.scss']
})
export class CreateditComponent implements OnInit {
  centered = true;
  unbounded = true;

  radius: number = 20;
  color: string = "rgb(51, 51, 51, 0.30)";

  nbfxName: string;

  constructor() { }

  ngOnInit(): void {
  }


  onUploadCustomCover() {
    alert('test working');
  }
}
