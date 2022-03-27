import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss']
})
export class NotebooksComponent implements OnInit {
  sideNavOpened: boolean;
  title:string = "Notebooks";

  filterMenu = {
    'search' : true,
    'addButton' : true,
    'title' : 'Notebook',
    'sort' : true
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sideNavOpened=true
    console.log(this.activatedRoute.data);
    this.activatedRoute.data.subscribe(data => console.log(data));
  }

 


  // const grid = Array.from(document.querySelector("#grid").children);
  // const baseOffset = grid[0].offsetTop;
  // const breakIndex = grid.findIndex(item => item.offsetTop > baseOffset);
  // const numPerRow = (breakIndex === -1 ? grid.length : breakIndex);

  //rawr = Array.from(Document.querySelector('ul'));


}
