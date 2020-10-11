import { BehaviorSubject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnInit{

  isOpen = new BehaviorSubject<boolean>(false)

  constructor( ) {}

  ngOnInit():void { 
  }

}
