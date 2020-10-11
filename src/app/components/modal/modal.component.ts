import { UsersService } from './../../services/users.service';
import { User } from '../../model/user.model';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  isModalOpen = false;
  modalWindowSub:Subscription;

  constructor( private modalService: ModalService ) { }

  ngOnInit(): void {
    this.modalWindowSub = this.modalService.isOpen.subscribe(status=>{
      this.isModalOpen = status;
    })
  }

  ngOnDestroy(){
    this.modalWindowSub.unsubscribe()
  }
  
  onClose(){
    this.modalService.isOpen.next(false);
  }

}
