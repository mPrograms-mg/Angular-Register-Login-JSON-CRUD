import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  loginDetails = {
    email: '',
  };
  userDetails: any;

  Message: any = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('UserData'));

    if (this.userDetails) {
      this.loginDetails = {
        email: this.userDetails.email,
      };
    }
  }

  LoginSubmit(loginForm: any) {
    if (
      loginForm.controls.email.value === this.userDetails.email &&
      loginForm.controls.password.value === this.userDetails.password
    ) {
      this.Message = 'Login Successfully';
      this.router.navigate(['home']);
    } else {
      this.Message = 'Email or Password will Incorrect';
    }
    // loginForm.control.email.value;
  }
}
