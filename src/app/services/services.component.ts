import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Social } from '../social';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class Services implements OnInit {

  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient) { }
  arrBirds: string [];

  ngOnInit () {
    this.httpService.get('./assets/birds.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  socials=[
    new Social(1, 'fa fa-twitter','https://twitter.com/login?lang=en'),
    new Social(2, 'fa fa-linkedin','https://www.linkedin.com/start/join'),
    new Social(3,'fa fa-facebook','https://www.facebook.com/'),
    new Social(4,'fa fa-google','https://myaccount.google.com/'),  
  ];
  mySocial = this.socials[0];

}
