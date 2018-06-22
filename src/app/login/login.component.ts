import { Component, OnInit ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


declare var Chartist
declare var jQuery
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login implements OnInit {

  constructor(private httpClient: HttpClient,private router: Router) { }

  private products  = []; 
  ngOnInit () {
//get data from  webAPI
    this.httpClient.get('http://localhost/androidApi/AllStudentData.php').subscribe((res : any[])=>{
        this.products = res;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  Login(email:string,password:string){
    if(email.length==0 || password.length==0){
      alert("All field are required !")
    }
    else{
      for(var i = 1; i <= this.products.length; i++){
        if(this.products[i].email==email && this.products[i].password==password){
          this.router.navigate(['/admin']);
          break;
        }
     }
    }
  }  

}
