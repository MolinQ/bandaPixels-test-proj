import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "./data/services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService) {
  }
  ngOnInit() {
    const userToken = localStorage.getItem('auth-token');
    const userName = localStorage.getItem('user-name');
    if (userToken !== null || userName !== '') {
      this.auth.setToken(userToken);
      this.auth.setNameToken(userName);
    }
  }
}
