import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-tr]',
  templateUrl: './tr.component.html',
  styleUrls: ['./tr.component.scss']
})
export class TrComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit(): void {
  }

}
