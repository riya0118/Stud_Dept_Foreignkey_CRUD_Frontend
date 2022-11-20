import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  uri = "http://localhost:8000/students";

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.uri}`);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.uri}/getdepts`);
  }

  addStudent(rollno: number, name: string, dept: any, age: number, sem: number, username: string, password: string) {
    const data = {
      rollno: rollno,
      name: name,
      dept: dept,
      age: age,
      sem: sem,
      username: username,
      password: password
    }
    this.http.post(`${this.uri}`, data).subscribe(res => console.log("Student Added!!"));
  }

  getStudentById(id: any) {
    return this.http.get(`${this.uri}/${id}`);
  }

  editStudent(id: any, rollno: number, name: string, dept: any, age: number, sem: number, username: string, password: string){
    const data = {
      rollno: rollno,
      name: name,
      dept: dept,
      age: age,
      sem: sem,
      username: username,
      password: password
    }
    this.http.put(`${this.uri}/${id}`, data).subscribe(res => console.log("Student editted!!!"));
  }

  deleteStudent(id: any) {
    return this.http.delete(`${this.uri}/${id}`);
  }
}
