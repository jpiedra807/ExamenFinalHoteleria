import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  filters = {
    name: '',
    stars: ''
  }

  stars = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    all: true
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  filter() {
    if (!this.stars.five || !this.stars.four || !this.stars.three || !this.stars.two || !this.stars.one){
      this.stars.all = false
    }

    if (!this.stars.five || !this.stars.four || !this.stars.three || !this.stars.two || !this.stars.one || !this.stars.all){
      this.router.navigate(['/hotels']);
    }

    if (this.stars.all) {
      this.filters.stars = '1-2-3-4-5'

    } else {
      this.filters.stars = ''
    }

    if (this.filters.stars.length == 0) {
      if (this.stars.five) {
        this.filters.stars = this.filters.stars + '5-'
      }
      if (this.stars.four) {
        this.filters.stars = this.filters.stars + '4-'
      }
      if (this.stars.three) {
        this.filters.stars = this.filters.stars + '3-'
      }
      if (this.stars.two) {
        this.filters.stars = this.filters.stars + '2-'
      }
      if (this.stars.one) {
        this.filters.stars = this.filters.stars + '1-'
      }
    }

    this.router.navigate(['/hotels-search', this.filters.name, this.filters.stars]);
  }



}
