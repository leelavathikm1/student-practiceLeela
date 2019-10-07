import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentsInfoComponent } from './students-info/students-info.component';
import { TeslaComponent } from './tesla/tesla.component';
import { Model3Component } from './model3/model3.component';
import { PracticeComponent } from './practice/practice.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Practice1Component } from './practice1/practice1.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsInfoComponent,
    TeslaComponent,
    Model3Component,
    PracticeComponent,
    StructuralDirectivesComponent,
    ParentComponent,
    ChildComponent,
    Practice1Component,
    Child1Component,
    Parent1Component
    

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
