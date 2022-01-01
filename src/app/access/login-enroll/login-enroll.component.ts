import { Component, OnInit } from '@angular/core';
//import { loginEnrollAnim } from './login-enroll-animations';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-login-enroll',
  templateUrl: './login-enroll.component.html',
  styleUrls: ['./login-enroll.component.scss'],
  animations: [
    trigger('boxTwoState', [
      state('right', style({
        opacity: 1,
        transform : 'translateX(-470px)',
        'border-radius' : '20px 0 0 20px',
        'z-index' : '10'
      })),
      transition('left <=> right', animate(500)),
    ]),

    trigger('boxOneState', [
      state('left', style({
        transform : 'translateX(300px)',
        'border-radius' : '0px 20px 20px 0px',
        'z-index' : '10'
      })),
      transition('left <=> right', animate(500))
    ]),

    trigger('containerState', [
      state('false', style({
        opacity: 1,
        transform: 'translateY(10px)'
      })),
      transition('void <=> *', [
        style({
          opacity: 0,
          transform: 'translateY(-10px)'
        }),
        animate(1000)
      ])
    ]),

  ] //end of animation
})
export class LoginEnrollComponent implements OnInit {
  boxOneState = "right";
  boxTwoState = "left";
  loginState = true;
  enrollState = false;
  containerState = false;


  constructor() { }

  ngOnInit(): void {
  }


  onToggleSignUp() {
    this.boxTwoState == 'left' ? this.boxTwoState = 'right' : this.boxTwoState = "left";
    this.boxOneState == 'left' ? this.boxOneState = 'right' : this.boxOneState = "left";
    this.loginState == true ? this.loginState = false : this.loginState = true;
  }

}

