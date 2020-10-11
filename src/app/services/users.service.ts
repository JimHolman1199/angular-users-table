import { Subject, BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  users;
  userChanged = new Subject<User[]>();
  editForm = new BehaviorSubject<boolean>(false);
  editedUser = new BehaviorSubject<User>(null);
  editedUserSub: Subscription;

  private usersUrl:string = "https://jsonplaceholder.typicode.com/users";

  constructor( private http: HttpClient ) {}

  ngOnInit():void {
    this.fetchUsers();
    this.editedUserSub = this.editedUser.subscribe((user:User)=>{
      this.editUser(user)
    })
  }

  fetchUsers(){
    this.http.get(this.usersUrl).subscribe(users=>{
      this.users = users;
      this.userChanged.next(this.users.slice())
    })
  }

  addNewUser(user:User){    
    this.http.post(this.usersUrl, JSON.stringify(user));
    user.id = this.users.length+1;
    this.users = [...this.users, user]
    this.userChanged.next(this.users)
  }

  delete(user){

    const userStr = this.usersUrl+'/'+user.id;
    
    return this.http.delete(userStr).subscribe(()=>{
      this.users = this.users.filter(el=>{
        return el.id !== user.id
      })
      this.userChanged.next(this.users.slice())
    }, (err)=>{throw new Error("error while deleting user "+ err);
    });
  }

  editUser(userData:User){
    const userStr = this.usersUrl+'/'+userData.id;
    const users = this.users;

    for (let i = 0; i < users.length; i++) {
      if (users[i].id == userData.id) {
        users[i] = userData;
      }
    }
    this.userChanged.next(this.users.slice())
    
    return this.http.put(userStr, userData)
  }

}
