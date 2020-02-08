import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = [];
  // todo = "";

  constructor(private data : DataService) { 
    console.log(data.getUsers());
    this.users = data.getUsers();
  }

  ngOnInit() {
  }

  // saveToDo(){
  //   this.users.push(this.todo);
  //   this.todo = "";
  // }

  // resetArray(){
  //   this.users = [];
  // }
}


