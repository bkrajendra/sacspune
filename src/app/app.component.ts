import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'St. Arnolds Central School';
  constructor(public router: Router ) { }
  ngOnInit() {
    //new WOW().init();
    console.log('Welcome to SACS, Pune');
    console.log(this.router.url);
  }
}
