import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';

@Component({
  selector: 'app-practice',
  template: `
    <h2> Welcome To Angular {{name}}</h2>  
    <input [id]="myId" type="text" value="Leelavathi"> 
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Leelavathi"> 
    <h2 class="text-success">Practice Angular</h2>
    <h2 [class.text-danger]="hasError">Practice Angular</h2>
    <h2 [class.text-special]="hasError">Practice Angular</h2>
    <h2 [style.color]="'red'">Style Binding</h2>
    <h2 [style.color]="hilightColor">Hilight Color</h2>
    <h2 [ngStyle]="titleColor">Hilight Color</h2>

    <button (click)="onClick($event)">ClickEvent</button>
    {{greetMe}}

    <input #myInput type="text" value="">
    <button (click)="logMessage(myInput.value)">template Reference</button>

    <input [(ngModel)]="fName" type="text">
    {{fName}}

    <div *ngFor="let persons of personDetails">
    <h3>{{personDetails}}</h3></div>
  `,
  styles: [`
        .text-success{
          color:green;
        }     
        .text-danger{
          color:red;
        } 
        .text-special{
          font-style:italic;
        }    
  `]
})
export class PracticeComponent implements OnInit {

  public name="Codevolution";
  public myId="testId";
  public isDisabled =true;
  public successClass="text-special";
  public hasError=true;
  public hilightColor="orange";
  public  titleColor={
    color:"red",
    fontStyle:"italic",
    fontSize:"50px"
  }
  
  public greetMe="";

  person={
    "fname": "Janeen",
    "lname": "Hall",
    "tel": "(286)721-5245",
    "address": "2611 Sapien Ln",
    "city": "Brooklyn",
    "state": "MD",
    "zip": 60589
}

personDetails=Object.keys(this.person)
  constructor() { }

  ngOnInit() {
  }
  onClick(event){
    console.log(event);
    this.greetMe='Welcome to Click Event';
  }
  logMessage(value){
    console.log(value)
  }
  

}
