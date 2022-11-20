import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = "http://localhost:8000/students";
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this.uri}/login`, { username: username, password: password }, {responseType: "text"})
    .pipe(
      map(result => {
        localStorage.setItem('access-token', result);
        return true;
      })
    )
  }

  logout() {
    localStorage.removeItem('access-token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access-token') !== null)
  }
}
