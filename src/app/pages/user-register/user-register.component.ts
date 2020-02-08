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
  reTypePassword = "";  

  constructor(private dataSrv : DataService) { }

  ngOnInit() {
  }

  save(){
    console.log("saving user", this.model, this.reTypePassword);

    this.dataSrv.saveUser(this.model);
  }
}
