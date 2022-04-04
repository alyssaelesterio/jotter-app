import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  centered = true;
  unbounded = true;

  radius: number = 30;
  color: string = "rgb(51, 51, 51, 0.30)";

  constructor() { }

  ngOnInit(): void {
  }

}
