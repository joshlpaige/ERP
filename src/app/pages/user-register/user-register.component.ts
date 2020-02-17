import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  reTypePassword: string;
  savedAlertVisible = false;

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
  }

  save() {
    console.log("saving user", this.model, this.reTypePassword);

    this.dataSrv.saveUser(this.model);

    this.model = new User();
    this.reTypePassword = null;
    this.savedAlertVisible = true;
  }

  isPasswordStrong() {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return strongRegex.test(this.model.password);
  }

  isDataCorrect() {


    if (this.isPasswordStrong()) {
      return true;
    }

    return !this.model.email
      || !this.model.userName
      || !this.model.password
      || this.model.password.length < 6
      || this.model.password != this.reTypePassword

  }
}

