import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hide = true;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.fb.group({
      firstName: new FormControl('Mahesh'),
      lastName: new FormControl('Kshirsagar'),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[- +()0-9]{10,12}'),
      ]),
      address: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[0-9]).{6,}$'),
      ]),
      confirmPass: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[0-9]).{6,}$'),
      ]),
    });
  }

  SubmitForm() {
    if (this.registerForm.valid) {
      console.log('Submit Form..', this.registerForm.value);
      let registerDetails = JSON.stringify(this.registerForm.value);
      localStorage.setItem('UserData', registerDetails);
      this.router.navigate(['auth/user-login']);
      this.registerForm.reset();
    }
  }
}
