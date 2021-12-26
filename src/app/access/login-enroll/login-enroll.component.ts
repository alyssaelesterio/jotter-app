import { Component, OnInit } from '@angular/core';
//import { loginEnrollAnim } from './login-enroll-animations';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-login-enroll',
  templateUrl: './login-enroll.component.html',
  styleUrls: ['./login-enroll.component.scss'],
  animations: [
    trigger('boxTwoState', [
      state('left', style({
        
      })),
      state('right', style({
        transform : 'translateX(-470px)',
        'border-radius' : '20px 0 0 20px',
        'z-index' : '10'
      })),
      transition('left <=> right', animate(1000))
    ]),

    trigger('boxOneState', [
      state('left', style({
        transform : 'translateX(300px)',
        'border-radius' : '0px 20px 20px 0px',
        'z-index' : '5'
      })),
      state('right', style({
        
      })),
      transition('left <=> right', animate(1000))
    ]),
  ]
})
export class LoginEnrollComponent implements OnInit {
  boxOneState = "right";
  boxTwoState = "left";

  constructor() { }

  ngOnInit(): void {
  }


  onToggleSignUp() {
    this.boxTwoState == 'left' ? this.boxTwoState = 'right' : this.boxTwoState = "left";
    this.boxOneState == 'left' ? this.boxOneState = 'right' : this.boxOneState = "left";
  }

}
