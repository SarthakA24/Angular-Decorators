import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  key: any;
  // key!: any;

  @Output()
  eventEmitter = new EventEmitter<string>();

  childButton() {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
