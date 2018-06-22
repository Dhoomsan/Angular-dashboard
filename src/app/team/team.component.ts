import { Component, OnInit } from '@angular/core';
import {Client} from './client';
import {Teamdata} from './teamdata';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class Team implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clients = [
    new Client(1,  'assets/logos/envato.jpg'),
    new Client(2, 'assets/logos/designmodo.jpg'),
    new Client(3, 'assets/logos/themeforest.jpg'),
    new Client(4, 'assets/logos/creative-market.jpg'),    
  ];
  myclient = this.clients[0];

  teamdatas=[
    new Teamdata(1, 'Kay Garland','Lead Designer','assets/team/1.jpg'),
    new Teamdata(2, 'Larry Parker','Lead Marketer','assets/team/2.jpg'),
    new Teamdata(3,'Diana Pertersen','Lead Developer','assets/team/3.jpg'),
  ];
  myteamdatas = this.teamdatas[0];


}
