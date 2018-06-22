import { Component, ViewEncapsulation,HostListener, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PanelService } from '../panel/panel.service';
import {Router} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ScrollEvent } from 'ngx-scroll-event';
import {Homedata} from './homedata';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})


export class Home implements OnInit {
  public bgColor;
  public username = 'Hello';
    
  // //scroll 
  //   @HostListener('scroll', ['$event']) 
  //   scrollHandler(event) {
  //     console.debug("Scroll Event");
  //   }
  
  public handleScroll(event: ScrollEvent) {
    //console.log('scroll occurred', event.originalEvent);
    
    if (event.isReachingBottom) {
      this.bgColor = 'BBFFFF';
    }
    if (event.isReachingTop) {
      this.bgColor = '00FFFF';
    }
    /*if (event.isWindowEvent) {
      alert("3");
    }*/
 
  }
  
  img = {
    src: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
  }

  title = 'JSON to Table Example';

  products  = []; 
  constructor (private router: Router,private httpClient: HttpClient,private modalService: NgbModal, private data:PanelService) { }
//http://dummy.restapiexample.com/api/v1/employees
  ngOnInit () {
    this.httpClient.get('http://localhost/androidApi/AllStudentData.php').subscribe((res : any[])=>{
        this.products = res;
        //console.log (res);
      },
      (err: HttpErrorResponse) => {
        //console.log (err.message);
      }
    );
    
  }

  ngOnChanges(){
    this.data.changeMessage(this.username);
  }

  closeResult: string;
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    this.closeResult="Modal with backdrop custom class";
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
    this.closeResult="Modal with window custom class";
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
    this.closeResult="Small modal";
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
    this.closeResult="Large modal";
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    this.closeResult="Modal vertically centered";
  }

  btnClick= function () {
    this.router.navigate(['/contact']);
  }
  openSnackbar(){
    this.data.changeMessage(this.username);
  }
  
  homes=[
    new Homedata(1, 'openWindowCustomClass(content)', 'Modal with window custom class'),
    new Homedata(2, 'openBackDropCustomClass(content)','Modal with backdrop custom class'),
    new Homedata(3, 'openSm(content)','Small modal'),
    new Homedata(4, 'btnClick();','Add'),    
    new Homedata(5, '"openSm(content)','Small modal'),
    new Homedata(6, 'openLg(content)','Large modal'),
    new Homedata(7, 'openVerticallyCentered(content)','Modal vertically centered'),
  ]
  myhomes = this.homes[0];

}

