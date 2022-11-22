import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { PassRoleService } from '../services/pass-role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() role: string = '';

  /*   public loginForm: Ilogin = {
      username: '',
      password: ''
    }; */
  public loginForm: FormGroup;
  public loginSubmitted = false;


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService, private passRoleService: PassRoleService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  /*   isValidForm() {
      return (this.loginForm.username.length > 0 && this.loginForm.password.length > 0);
    } */

  cleanForm() {
    this.loginSubmitted = false;
    this.loginForm.get('username')?.setValue('');
    this.loginForm.get('password')?.setValue('');
  }

  get fm() {
    return this.loginForm.controls;
  }

  authenticate() {
    this.loginSubmitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    console.log('🧧Data received', this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(r => {
      if (r.error) {
        Swal.fire({
          icon: 'info',
          text: `${r.message}`
        })
      }
      console.log(r);
    });

  }

  register() {
    this.passRoleService.roleTrigger.emit({
      data:this.role
    });
  }

}
