import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createdit',
  templateUrl: './createdit.component.html',
  styleUrls: ['./createdit.component.scss']
})
export class CreateditComponent implements OnInit {
  centered = true;
  unbounded = true;

  radius: number = 20;
  color: string = "rgb(51, 51, 51, 0.30)";

  nbfxName: string;

  @ViewChild('customUpload') customUpload:ElementRef;

  @ViewChild('cover') cover:ElementRef;


  constructor(private renderer: Renderer2,
    private elementRef: ElementRef) { }

  ngOnInit(): void {
  }


  onUploadCustomCover(e:any) {
    console.log('contents', e);
    console.log(e.target.files[0]);
    let fileInput = e.target.files[0];
    const reader = new FileReader();
    console.log(reader.readAsDataURL(fileInput))
    //this.renderer.setStyle(this.cover.nativeElement, 'backgroundImage', );

  
    
  }

  onTriggerFileUpload() {
    console.log(this.customUpload);
    this.customUpload.nativeElement.click();
  }

  ngAfterViewInit() {
   // this.renderer.setStyle(this.cover.nativeElement, 'background', 'yellow');
    //this.renderer.setProperty(this.cover.nativeElement, 'innerHTML', '<p>Hello World<p>');
  }
  
} 
