import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName = "";
  password = "";
  registeredUsers = [];

  loginError = false;
  loginSuccess = false;

  constructor(private data : DataService) { 
    this.registeredUsers = data.getUsers();
  }

  ngOnInit() {
  }

  validateLogin(){
    // travel the array
    // compare user and password with each element in the array
    // if you find a match, then login is successful
    for(var i = 0; i < this.registeredUsers.length; i++){
      var user = this.registeredUsers[i];
      if(user.userName == this.userName && user.password == this.password){
        console.log("Credentials are correct, you are logged in!");
        this.loginSuccess = true;
        return true;
      }
    }

    console.log("wrong credentials");
    this.loginError = true;

  }

  
}
