import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TAndCDialogComponent } from '../t-and-c-dialog/t-and-c-dialog.component';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {
  testRoute: any;
  enrollForm: FormGroup;
  hide = true;
  chide = true;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private activatedroute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => this.testRoute = data);
    //alert(this.testRoute['onManualRedirect']);

    /*
      "username":"adrian",
      "email":"test@test.com",
      "password":"test3321
    */
    this.enrollForm = this.fb.group({
      username: '',
      email: '',
      password: '',
      cpassword: ''
    })
  }


  onOpenTC() {
    this.dialog.open(TAndCDialogComponent);
  }


  isDirectlyAccessed() {
    return this.testRoute['onManualRedirect'];
  }


  onRegister(enrollForm: user) {
    console.log(enrollForm);
  }



}
