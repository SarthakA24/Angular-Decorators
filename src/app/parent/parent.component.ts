import { Component, OnInit } from '@angular/core';
import { LogsService } from '../logs.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  inputNumber: number = 0;
  dataFromChild: any;

  dataFromChildFun(event:any) {
    this.dataFromChild = event;
  }
  constructor(private service: LogsService) { }

  serviceCall() {
    this.service.serviceFunction();
  }

  ngOnInit(): void {
  }

}
