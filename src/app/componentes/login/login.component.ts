import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModprimengModule } from '../../modprimeng.module';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { passwordMatchValidator } from '../../shared/password-match.directives';
import { AuthService } from '../../servicios/auth.service';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/user';
import { Mensaje } from '../../interfaces/Mensaje';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ModprimengModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForma: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private messageService: MessageService, private router: Router) {
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

  login() {
    const { email, password } = this.loginForma.value;
    const usuario: User = {
      id: "1",
      full_name: "",
      email: email,
      password: password
    };

    this.authService.getUserByEmail(usuario as User).subscribe(
      (response) => {
        console.log(response);
        let mensaje: Mensaje = response;
        console.log("Respuesta ", mensaje.message);

        if (mensaje.respuesta === 1) {
          sessionStorage.setItem('email', email as string);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: mensaje.message });
          this.router.navigate(['/productlist']); //cambie /home por /productlist
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email o Contraseña Incorrecta' });
        }
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email o Contraseña Incorrecta' });
      }
    );
  }
}
