import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  avatarImagePath: string;

  constructor() {
    this.avatarImagePath = '/assets/images/avatar.png'
  }


}
