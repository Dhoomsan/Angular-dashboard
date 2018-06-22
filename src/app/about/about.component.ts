import { Component, OnInit } from '@angular/core';
import {Aboutdata} from './aboutdata';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class About implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  abouts = [
    new Aboutdata(1, '', '/assets/about/1.jpg','2009-2011','Our Humble Beginnings','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),
    new Aboutdata(2, 'timeline-inverted', '/assets/about/2.jpg','March 2011','An Agency is Born','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),
    new Aboutdata(3, '', '/assets/about/3.jpg','December 2012','Transition to Full Service','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),
    new Aboutdata(4, 'timeline-inverted', '/assets/about/4.jpg','July 2014','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
  ];
  myabouts = this.abouts[0];

}
