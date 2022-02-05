import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerifyComponent } from 'src/app/access/verification/verify/verify.component';
@Component({
  selector: 'app-email-change',
  templateUrl: './email-change.component.html',
  styleUrls: ['./email-change.component.scss']
})
export class EmailChangeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(e:any) {
    e.preventDefault();
    this.dialog.open(VerifyComponent, {panelClass: 'custom-dialog-container'});
  }
}
