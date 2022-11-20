import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  editForm: FormGroup;
  student: any = {};
  departments: any = [];
  selectedDept: any;

  constructor(private builder: FormBuilder, private service: StudentService, private router: Router, private route: ActivatedRoute) { 
    this.editForm = builder.group({
      rollno: ['', Validators.required],
      name: ['', Validators.required],
      dept: ['', Validators.required],
      age: ['', Validators.required],
      sem: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  GetStudentById() {
    this.route.params.subscribe(params => {
      this.service.getStudentById(params['id']).subscribe(res => {
        this.student = res
        this.selectedDept = this.student.dept;
      });
    });
  }

  getDepartments() {
    this.service.getDepartments().subscribe((data: Department[]) => {
      this.departments = data;
    })
  }

  update(){
    this.service.editStudent(this.student._id, this.editForm.value.rollno, this.editForm.value.name, this.editForm.value.dept, this.editForm.value.age, this.editForm.value.sem, this.editForm.value.username, this.editForm.value.password);
    this.router.navigate(['studentlist']);
  }

  ngOnInit(): void {
    this.GetStudentById();
    this.getDepartments();
  }

}
