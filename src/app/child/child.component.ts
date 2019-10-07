import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>{{"Hello" + parentData}}</h2>
    <button (click)="sendDataToParent()">Send To Parent</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendDataToParent(){
    this.childEvent.emit("Hi Iam From Child Component")
  }
}
