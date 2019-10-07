import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
  user=[{
    "fname": "Janeen",
    "lname": "Hall",
    "tel": "(286)721-5245",
    "address": "2611 Sapien Ln",
    "city": "Brooklyn",
    "state": "MD",
    "zip": 60589
},
{
    "fname": "Dorota",
    "lname": "Dellinger",
    "tel": "(736)843-1328",
    "address": "1275 Nec Dr",
    "city": "Spencer",
    "state": "SC",
    "zip": 36647
},
{
    "fname": "Azra",
    "lname": "Hughesdkaiya",
    "tel": "(916)587-1946",
    "address": "3649 Sagittis Ct",
    "city": "Eagle Pass",
    "state": "IN",
    "zip": 47054
},
{
    "fname": "Artina",
    "lname": "Best",
    "tel": "(686)845-9496",
    "address": "1915 Sed St",
    "city": "Alhambra",
    "state": "NE",
    "zip": 42188
}];

imageUrl="assets/images/model3.jpg";
gayeUrl="assets/images/gaye.jpg"

getSum(num1,num2){
  return num1+num2
}

  constructor() { }

  ngOnInit() {
  }

}
