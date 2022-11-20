import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students: Student[] = [];
  constructor(private service: StudentService, private router: Router) { }

  GetStudents() {
    this.service.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    })
  }

  deleteStudent(id: any) {
    this.service.deleteStudent(id).subscribe(res => {
      console.log('Deleted!!');
      this.GetStudents();
    })
  }

  ngOnInit(): void {
    this.GetStudents();
  }

}
