import { ModalService } from '../../../services/modal.service';
import { Subscription } from 'rxjs';
import { UsersService } from '../../../services/users.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../../../model/user.model';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent implements OnInit, OnDestroy {

  user: User;
  editUserForm: FormGroup;
  editedUserSub: Subscription;

  constructor( private usersService: UsersService,
               private modalService: ModalService) { }

  ngOnInit(): void {
    this.editUserForm = new FormGroup({
      'name': new FormControl('', Validators.required ),
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', Validators.required),
      'website': new FormControl('')
    });

    this.editedUserSub = this.usersService.editedUser.subscribe(user=>{
      if(!user) return false
      this.user = user;
      const { name, username, email, website, phone} = user;
      this.editUserForm.setValue({
        'name': name,
        'username': username,
        'email': email,
        'phone': phone,
        'website': website
      })
    })
  }

  onSubmit(event, userForm){
    const userData = userForm.value;
    userData.id = this.user.id
    this.usersService.editUser(userData).subscribe(()=>{
      this.editUserForm.reset();
    }, (err)=>{
      this.editUserForm.reset();
    })
    this.modalService.isOpen.next(false);
  }

  ngOnDestroy(){
    this.editedUserSub.unsubscribe();
  }

  onClose(){
    this.modalService.isOpen.next(false);
    this.usersService.editedUser.next(null);
  }

}
