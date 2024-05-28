import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
  scrolltop = document.getElementById("scrolltop");
  rootelement = document.documentElement
  
  scroll(){ 
    this.rootelement.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
}
