import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loginForm: FormGroup;
  showMessage: boolean = false;
  successMessage: boolean;
  message: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (
      this.email.value == 'user@gmail.com' &&
      this.password.value == 'user123'
    ) {
      this.showMessage = true;
      this.successMessage = true;
      this.message = 'Welcome ' + this.email.value;
    } else {
      this.showMessage = true;
      this.successMessage = false;
      this.message = 'Email or password incorrect';
    }
  }

  closeMessage() {
    this.showMessage = false;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
