import { Component } from '@angular/core';
import {RegistrationRequest} from '../../services/models/registration-request';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registrerRequest: RegistrationRequest = {email: '', firstName: '', lastName: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registrerRequest
    }).subscribe({
      next: () =>{
        this.router.navigate(['activate-account']);
      },
      error: (err)=>{
        this.errorMsg = err.error.validationErrors;
      }
    })
  }

  login() {
    this.router.navigate(['login']);
  }
}
