import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title="Angular";
  public name="Leelavathi";
  public message="";
  constructor() { }

  ngOnInit() {
  }

}
