import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  openSearch(): void {
    console.log(22);
    let sBtn = this.el.nativeElement.querySelector('.search-box');
    let navBtn = this.el.nativeElement.querySelector('.nav-btn-container');
    sBtn.classList.add('active');
    navBtn.classList.add('active');

  }
  closeSearch(): void {
    let sBtn = this.el.nativeElement.querySelector('.search-box');
    let navBtn = this.el.nativeElement.querySelector('.nav-btn-container');

    navBtn.classList.remove('active');
    sBtn.classList.remove('active');

  }

}
