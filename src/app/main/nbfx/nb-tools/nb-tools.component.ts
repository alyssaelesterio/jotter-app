import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-nb-tools',
  templateUrl: './nb-tools.component.html',
  styleUrls: ['./nb-tools.component.scss']
})
export class NbToolsComponent implements OnInit {
  toolType: any;
  headerTitle: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog) {
      this.headerTitle = data.type;
      console.log(this.headerTitle);

    }

  ngOnInit(): void {
    
  }

}
