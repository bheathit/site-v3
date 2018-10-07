import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  pageNames: string[];
  constructor() {
    this.pageNames = ['HomePage','ContactPage','Services']

   }

  ngOnInit() {
  }

}
