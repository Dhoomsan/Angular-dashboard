import { Component, OnInit } from '@angular/core';
import{Carouse} from './carousel-data';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent {

  public carouses = [
    new Carouse('1', 'active', '/assets/about/1.jpg','2009-2011','Our Humble Beginnings','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),
    new Carouse('2', '', '/assets/about/2.jpg','March 2011','An Agency is Born','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),
    new Carouse('3', '', '/assets/about/3.jpg','December 2012','Transition to Full Service','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),
    new Carouse('4', '', '/assets/about/4.jpg','July 2014','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
    
    new Carouse('5', '', '/assets/portfolio/01-thumbnail.jpg','jun 2011','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
    new Carouse('6', '', '/assets/portfolio/02-thumbnail.jpg','aug 2009','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
    new Carouse('7', '', '/assets/portfolio/03-thumbnail.jpg','dec 2017','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
    new Carouse('8', '', '/assets/portfolio/04-thumbnail.jpg','jan 2000','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
    new Carouse('9', '', '/assets/portfolio/05-thumbnail.jpg','jan 2005','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
    new Carouse('10', '', '/assets/portfolio/06-thumbnail.jpg','jan 2015','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
    

    new Carouse('11', '', '/assets/team/1.jpg','jan 2004','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
    new Carouse('12', '', '/assets/team/2.jpg','jan 2018','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
    new Carouse('13', '', '/assets/team/3.jpg','jan 2011','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    

    new Carouse('14', '', '/assets/header-bg.jpg','jan 2015','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
    new Carouse('15', '', '/assets/services-bg.jpg','jan 2015','Phase Two Expansion','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'),    
  
  ];
}
