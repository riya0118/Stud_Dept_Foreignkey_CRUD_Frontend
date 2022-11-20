import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    AddstudentComponent,
    EditstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
