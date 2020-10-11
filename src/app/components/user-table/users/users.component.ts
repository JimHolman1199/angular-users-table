import { UsersService } from '../../../services/users.service';
import { Subscription } from 'rxjs';
import { User } from '../../../model/user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  users = [];

  constructor(private userService: UsersService ) { }

  ngOnInit(): void {
    this.subscription = this.userService.userChanged.subscribe((users: User[])=>{
      this.users = users;
    })
    this.userService.fetchUsers()
  
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
