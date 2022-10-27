import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from "../services/users-service.service";
import {User} from "../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[] | undefined;

  constructor(public user_service: UsersServiceService) {
    this.user_service.get_data()
    this.user_service.currentUsers.subscribe( s => this.users = s)
  }

  ngOnInit(): void {
  }

}
