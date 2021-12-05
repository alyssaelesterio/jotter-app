import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSectionComponent } from './main-section/main-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sticky: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild('stickyMenu') menuElement: ElementRef;


  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      this.sticky = window.pageYOffset >= 97;
    }
}
