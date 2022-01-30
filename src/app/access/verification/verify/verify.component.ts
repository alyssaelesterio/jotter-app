import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessFailComponent } from 'src/app/modal/success-fail/success-fail.component';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(e:any) {
    e.preventDefault();
    this.dialog.open(SuccessFailComponent);
  }
}
