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
  menuPosition: any;
  elementPosition: any;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('stickyMenu') menuElement: ElementRef;


  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }


  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      console.log(windowScroll, this.elementPosition);
      if(windowScroll >= 97){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}
