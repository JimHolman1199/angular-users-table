import { ModalService } from '../../../services/modal.service';
import { User } from '../../../model/user.model';
import { UsersService } from '../../../services/users.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-td]',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss']
})
export class TdComponent implements OnInit {
  @Input() value;
  
  constructor(private usersService: UsersService, 
              private modalService: ModalService ) { }

  ngOnInit(): void {
  }

  onDeleteUser(value){
    this.usersService.delete(value)
  }

  onEditUser(user: User){
    this.modalService.isOpen.next(true)
    this.usersService.editedUser.next(user)
  }

  getType(){
    return typeof(this.value)==='object'
  }

}
