import { Component } from '@angular/core';

@Component({
  selector: 'app-completedproject',
  templateUrl: './completedproject.component.html',
  styleUrls: ['./completedproject.component.css']
})
export class CompletedprojectComponent {
  scrolltop = document.getElementById("scrolltop");
  rootelement = document.documentElement

  scrollToTop() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
