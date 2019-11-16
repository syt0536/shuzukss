import { Component, OnInit,Input } from '@angular/core';
import {ThemePalette,MatRipple} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../services/rest/rest.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signInForm: FormGroup;
  currentUser: any;
  hide: true;
  constructor(private fb: FormBuilder,
              private rest: RestService,
              private router: Router) {
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.rest.currentUser.subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }

  onSubmit() {
    const username = this.signInForm.value.username;
    const password = this.signInForm.value.password;
    console.log(username, password); // todo delete
    this.rest.login(username, password).subscribe(
      user => {
        if (user) {
          console.log(username, 'sign-in', 'token is', user.user_token); // todo delete
        }
      },
      errorRes => {
        alert('用户名或者密码不正确!');
        console.log(errorRes);
      },
      () => {
        const perUrl = localStorage.getItem('currentUrl');
        console.log('perUrl', perUrl)
        this.router.navigate([perUrl]);
      }
    );
  }
}
