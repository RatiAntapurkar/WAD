import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  loginUser() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser.email === this.email && storedUser.password === this.password) {
      localStorage.setItem('loggedIn', 'true');
      alert('Login Successful!');
      this.router.navigate(['/']);
    } else {
      alert('Invalid Credentials');
    }
  }
}

