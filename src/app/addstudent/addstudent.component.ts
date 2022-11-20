import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Department } from '../department';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  addForm: FormGroup;
  departments: any = [];

  constructor(private builder: FormBuilder, private router: Router, private service: StudentService) { 
    this.addForm = builder.group({
      rollno: ['', Validators.required],
      name: ['', Validators.required],
      dept: ['', Validators.required],
      age: ['', Validators.required],
      sem: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  add() {
    this.service.addStudent(this.addForm.value.rollno, this.addForm.value.name, this.addForm.value.dept, this.addForm.value.age, this.addForm.value.sem, this.addForm.value.username, this.addForm.value.password);
    this.router.navigate(['studentlist']);
  }

  getDepartments() {
    this.service.getDepartments().subscribe((data: Department[]) => {
      this.departments = data;
    })
  }

  ngOnInit(): void {
    this.getDepartments();
  }

}
