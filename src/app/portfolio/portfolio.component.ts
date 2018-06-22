import { Component, OnInit } from '@angular/core';
import { Portfoliodata } from './portfoliodata';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class Portfolio implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  portdata = [
    new Portfoliodata('1', 'fa fa-plus fa-3x', '/assets/portfolio/01-thumbnail.jpg', 'Threads', 'Illustration'),
    new Portfoliodata('2', 'fa fa-plus fa-3x','/assets/portfolio/02-thumbnail.jpg', 'Explore', 'Graphic Design'),
    new Portfoliodata('3', 'fa fa-plus fa-3x','/assets/portfolio/03-thumbnail.jpg', 'Finish', 'Identity'),
    new Portfoliodata('4', 'fa fa-plus fa-3x','/assets/portfolio/04-thumbnail.jpg', 'Lines', 'Branding'),    
    new Portfoliodata('5', 'fa fa-plus fa-3x','/assets/portfolio/05-thumbnail.jpg', 'Southwest', 'Website Design'),
    new Portfoliodata('6', 'fa fa-plus fa-3x','/assets/portfolio/06-thumbnail.jpg', 'Window', 'Photography'),
  ];
  myportdata = this.portdata[0];
}
