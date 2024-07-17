import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  UserArray : any[] = [];


  name: string ="";
  email: string ="";
  password: string ="";
 
  currentUserID = "";

  constructor(private http:HttpClient){
    //this.getAllUser();
  }


  register()
  {
  
    let bodyData = {
      "name" : this.name,
      "email" : this.email,
      "password" : this.password
    };
 
    this.http.post("http://localhost:8090/user/create",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("user Registered Successfully");
        //this.getAllToDO();
 
        this.name = '';
        this.email = '';
        this.password = '';
    });
  }




}
