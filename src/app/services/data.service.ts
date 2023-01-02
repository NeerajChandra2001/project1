import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  userDetails: any = {
    Neeraj: {name: 'Neeraj',phone:123, password: 1000},
    Arjun: {name: 'Arjun',phone:23, password: 1001},
    Sanjay: { name: 'Sanjay',phone:3, password: 1002}

  }

  currentUser:any;
  currentPhone:any;
  currentPswd:any;

  constructor() { }

  
  register(name: any,phone: any,password: any) {
    var userDetails = this.userDetails;
    if (name in this.userDetails) {
      return false;

    }
    else {
      userDetails[name] = {
        name: name,
        phone: phone,
        password: password,
        
      }

      return true;
    }
  }


  




  login(name: any, pswd: any) {
    // var userDetails = this.userDetails;
    if (name in this.userDetails) {
      if (pswd == this.userDetails[name]['password']) {
        this.currentUser=this.userDetails[name]['name'];
        this.currentPswd=this.userDetails[name]['password'];
        // this.saveDetails();

        return true;
      }
      else {
        alert('invalid password')
        return false;
      }

    }
    else {
      alert('invalid userdetails')
      return false;

    }
  }
}
