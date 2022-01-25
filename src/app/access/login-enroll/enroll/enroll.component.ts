import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TAndCDialogComponent } from '../t-and-c-dialog/t-and-c-dialog.component';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {
  testRoute: any;

  constructor(
    public dialog: MatDialog,
    private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => this.testRoute = data);
    //alert(this.testRoute['onManualRedirect']);
  }

  onOpenTC() {
    this.dialog.open(TAndCDialogComponent);
  }


  isDirectlyAccessed() {
    return this.testRoute['onManualRedirect'];
  }


}
