import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModprimengModule } from '../../modprimeng.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,ModprimengModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registroForma: FormGroup;
  constructor(private fb:FormBuilder){
    this.registroForma = this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
}
