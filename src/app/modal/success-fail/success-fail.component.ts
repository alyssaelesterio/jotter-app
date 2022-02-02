import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-fail',
  templateUrl: './success-fail.component.html',
  styleUrls: ['./success-fail.component.scss']
})
export class SuccessFailComponent implements OnInit {
  message: string = "We just emailed you with the instructions to reset your password. <br><br>For any questions or problems please email us at  helpdesk@jotter.com";
  title: string = "Check your email";
  constructor() { }

  ngOnInit(): void {
  }

}
