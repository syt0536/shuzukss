import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {RestService} from '../../services/rest/rest.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: any;
  username: string;
  constructor(private rest: RestService,
              private router: Router) {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = storedUser;
    this.username = storedUser ? storedUser['user_name'] : null;
    // console.log('user, storedUser', storedUser);
    this.rest.currentUser.subscribe(
      user => {
        this.currentUser = user;
        this.username = user ? user.user_name : null;
      }
    );
  }

  ngOnInit() {

  }

  logout() {
    if (confirm('确认退出当前用户？')) {
      this.rest.logout();
      this.router.navigate(['/home']);
    }
  }

  gotoLogin() {
    if (location.pathname === '/user/sign-up') {
      localStorage.setItem('currentUrl', 'home');
    } else {
      localStorage.setItem('currentUrl', location.pathname);
    }
    this.router.navigate(['/sign-in']);
  }
}