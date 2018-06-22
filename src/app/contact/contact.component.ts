import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import {User} from './contactService';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class Contact implements OnInit {
  form: FormGroup;
  newUser=new User();
  constructor(private httpClient: HttpClient,private formBuilder: FormBuilder) { }
  //get dat afrom api
  public products  = []; 
  public GetResponse:string;
  contactData={
    
  }
  ngOnInit () {
    this.GetResponse="";
    this.getDatFromApi();

    this.form = this.formBuilder.group({
      StudentName:[null,Validators.required],
      StudentClass: [null, [Validators.required, Validators.email]],
      StudentPhone: [null, Validators.required],
      StudentMessage:[null,Validators.required]
    });
    
    
  }

   //get Dat From Api
   getDatFromApi(){
    this.httpClient.get('http://localhost/androidApi/AllStudentData.php').subscribe((res : any[])=>{
        this.products = res;
        console.log (res);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  //set data to api
  ContactSubmit(){
    this.httpClient.post('http://localhost/androidApi/StudentRegister.php', this.newUser)
    .subscribe((res:Response) => {
      console.log ("Response error-  ",res.status);
      this.GetResponse = JSON.stringify(res.status).replace(/['"]+/g, '');
      //alert(this.GetResponse);
    },
    (err: HttpErrorResponse) => {
      console.log ("Response error-  ",err.message);
      this.GetResponse=err.message.replace(/['"]+/g, '');
    }
    );
  }  
}