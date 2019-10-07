import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
  <div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">you picked red color</div>
  <div *ngSwitchCase="'blue'">you picked blue</div>
  <div *ngSwitchCase="'green'">you picked green</div>
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <div *ngSwitchDefault>Pick again</div>

  // <h2 *ngIf="displayName; else elseBlock">
  // Codevolution</h2>
         
  <ng-template #thenBlock>
  <h2>Codevolution</h2>
  </ng-template>
  <ng-template #elseBlock>
  <h2>
  Name is Hidden
  </h2>
  <ng-template>
   
           
            <div *ngFor="let color of colors; index as i">
            <h3>{{i}}  {{color}}</h3>
            </div>
            `,

  styleUrls: []
})
export class StructuralDirectivesComponent implements OnInit {

  public colors =["red","green","Orange","blue"];
  public color ="orange";
  // displayName=true;
  constructor() { }

  ngOnInit() {
  }

}
