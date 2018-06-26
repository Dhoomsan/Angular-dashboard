import { Component, HostListener, OnInit } from '@angular/core';
import { Navbar } from './navbar';
import { Social } from './social';
import { ScrollEvent } from 'ngx-scroll-event';


declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  btnDisplay;
  topHeadPosition;
  centerPanelPadding;
  winScroll;
  height;
  scrolled;
  headerTop;
  headerDiv;
  navDiv;
  getheaderHeight;
  getNavHeight;
  title = 'Angular';
  public ngOnInit()
  {
    this.btnDisplay ="none";
    this.scrolled=0;

    //get height of div
    this.headerDiv=document.getElementById("headerDiv");
    this.navDiv=document.getElementById("navDiv");

   
    this.getheaderHeight=this.headerDiv.clientHeight;
    this.getNavHeight=this.navDiv.clientHeight;
    //alert(this.getheaderHeight);

    this.centerPanelPadding=this.getheaderHeight.toString()+"px";

    //set initial scroll width
    document.getElementById("myBar").style.width = this.scrolled + "%";
  }

  public navScroll(event: ScrollEvent) {

    this.winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    this.height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrolled = (this.winScroll / this.height) * 100;
    document.getElementById("myBar").style.width = this.scrolled + "%";

    if(window.pageYOffset<this.getheaderHeight){
      //this.topHeadPosition='block';
      this.centerPanelPadding=this.getheaderHeight.toString()+"px";
      $('#headerDiv').slideDown(); //
      $('.topHead').slideDown(); //
      this.btnDisplay = 'none';
    }
    else{
      //this.topHeadPosition='none';
      
      this.centerPanelPadding=this.getNavHeight.toString()+"px";
     // setTimeout(() => {
        $('.topHead').slideUp(); 
     // }, 5000);
      this.btnDisplay = 'block';
    }

  }

  onTop(){
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    //document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

// class format
  navbars = [
    new Navbar(1, 'Home', '/home'),
    new Navbar(2, 'Services','/services'),
    new Navbar(3, 'Portfolio','/portfolio'),
    new Navbar(4, 'Gallery','/gallery'),
    new Navbar(5, 'About','/about'),    
    new Navbar(6, 'Team','/team'),
    new Navbar(7, 'Contact','/contact'),
  ];
  mynavbars = this.navbars[0];

  socials=[
    new Social(1, 'fa fa-twitter','https://twitter.com/@SANJITROCKS224'),
    new Social(2, 'fa fa-linkedin','https://in.linkedin.com/in/sanjit-kushwaha-764206113'),
    new Social(3,'fa fa-facebook','https://www.facebook.com/sanjitrocks224'),
    new Social(4,'fa fa-google','https://mail.google.com/mail/u/0/#inbox?compose=new'),  
    new Social(5,'fa fa-youtube','https://www.youtube.com/channel/UCWPmyLfCt5w3pHBdAcniqpg')
  ];
  mySocial = this.socials[0];

  //when select navbar
  selectedHero: Navbar;
  onSelect(hero: Navbar): void {
    this.selectedHero = hero;
  }
}