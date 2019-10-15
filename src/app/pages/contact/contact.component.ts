import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  map = {
    lat: 18.5503101,
    lng: 73.9140657,
  };
  icon = 'assets/icons/logo.png';
  constructor() { }

  ngOnInit() {
  }

}
