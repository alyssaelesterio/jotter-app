import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  triggerFx: boolean = false;
  
  centered = true;
  unbounded = true;

  radius: number = 25;
  color: string = "rgb(255, 255, 255, 0.30)";

  constructor() { }

  ngOnInit(): void {
  }



  onHover() {
    //alert('hover working');
    console.log('test');
    this.triggerFx = this.triggerFx ? false : true;
    console.log(this.triggerFx);
  }
}
