import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModprimengModule } from '../../modprimeng.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ModprimengModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForma = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)
      ]]
    });
  }

  get email() {
    return this.loginForma.controls['email'];
  }

  get password() {
    return this.loginForma.controls['password'];
  }
}
