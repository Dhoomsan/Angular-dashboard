import { Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private route:ActivatedRoute) { }

  public login(credential,cb){
      localStorage.setItem('currentUser', '1234');
      cb(true)
  }

  public logout(){
    localStorage.removeItem('currentUser');
  }

  public isLogged(){
    if (localStorage.getItem('currentUser')){
      return true;
    } else {
      return false;
    }
  }
}
