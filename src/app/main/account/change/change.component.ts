import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailChangeComponent } from './email-change/email-change.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})

export class ChangeComponent implements OnInit {
  //const MAT_DIALOG_DATA: InjectionToken<any>;
  dialogType: any;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ChangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.dialogType = data
    }

  ngOnInit(): void {
    console.log(this.dialogType);
  }

  getdialogType() {
    return this.dialogType;
  }

}
