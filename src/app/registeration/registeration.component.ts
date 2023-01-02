import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {

  constructor(private ds:DataService,private router :Router,private fb : FormBuilder){}
  ngOnInit(): void {
  }

  registerForm = this.fb.group({

    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    phone: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  }) //control passes through html page
  register() {
    var phone = this.registerForm.value.phone;
    var pswd = this.registerForm.value.pswd;
    var name = this.registerForm.value.name;
    // var userDetails=this.ds.userDetails;
    const result = this.ds.register(phone, name, pswd)
    if (this.registerForm.valid) {

      if (result) {
        alert("register successfully");
        this.router.navigateByUrl('');
      }
      else {

        alert("register faiure")
        console.log(this.registerForm.get('uname')?.errors);
        
      }
    
    }


  }

}




