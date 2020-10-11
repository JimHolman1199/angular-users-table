import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../model/user.model';
import { UsersService } from '../../../services/users.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  userForm: FormGroup;
  user = new User;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'name': new FormControl('Yurii', Validators.required ),
      'username': new FormControl('test', Validators.required),
      'email': new FormControl('test@test.com', [Validators.required, Validators.email]),
      'phone': new FormControl('123', Validators.required),
      'website': new FormControl('xxx')
    })
  }

  addUser(){
    this.userService.addNewUser(this.userForm.value)
  }

  clickCloseBtn(){
    this.closeModal.emit();
  }

}
