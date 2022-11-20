import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: any;

  constructor(private builder: FormBuilder, private router: Router, private auth: AuthService) {
    this.loginForm = builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

   login() {
    this.auth.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        complete: () => this.router.navigate(['studentlist']),
        error: () => this.error = "Unauthorized!!"
      })
   }

  ngOnInit(): void {
  }

}
