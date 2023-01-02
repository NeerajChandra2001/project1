import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private ds:DataService,private fb:FormBuilder,private router:Router){}


ngOnInit(): void { //2nd executed
  // initial process of a component
 //when a component is created ,at same time it initialize or authorize
//when a component is created, there is a life cycle for it.
}

loginForm = this.fb.group({

  name: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

}) 


name:any;
pswd:any;
 

    
login(){
 var name=this.loginForm.value.name;
 var pswd=this.loginForm.value.pswd;
 // var userDetails=this.ds.userDetails
 const result=this.ds.login(name,pswd)

 if(result){
   alert("login successfully")
   this.router.navigateByUrl('dashboard')
 }
 else{
   
   alert("login faiure")
 }

}
}
