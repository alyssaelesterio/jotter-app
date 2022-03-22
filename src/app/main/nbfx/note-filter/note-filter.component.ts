import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NbToolsComponent } from '../nb-tools/nb-tools.component';
import { toolType } from 'src/app/models/toolType';
import { style } from '@angular/animations';

@Component({
  selector: 'app-note-filter',
  templateUrl: './note-filter.component.html',
  styleUrls: ['./note-filter.component.scss']
})
export class NoteFilterComponent implements OnInit {
  toolType: toolType;

  constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      console.log(data)
      this.toolType = data;
    })
  }

  onOpenTool() {
    // open Notebook CreateEdit
    // or open Note > Add Note

    console.log(this.toolType);
    let toolToBeLoaded: any;
    this.dialog.open(
      NbToolsComponent,
      {
        panelClass:'modal',
        data: {type: 'Create'}
    });
  }
}
