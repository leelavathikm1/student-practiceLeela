import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() public parentData;
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendDataToParent(){
    this.childEvent.emit("Iam from child component To Parent");
  }
}
