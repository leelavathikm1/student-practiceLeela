import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-info',
  templateUrl: './students-info.component.html',
  styleUrls: ['./students-info.component.css']
})
export class StudentsInfoComponent implements OnInit {
  studentDetails={
    fName:"Leela",
    lName:"Krishna",
    contact:7760355535,
    email:"leelavathikm1@gmail.com",
    city:"Bangalore",
    zip:560066
  }

  studentsInfo=Object.keys(this.studentDetails);
  constructor() { }

  ngOnInit() {
  }

}
