import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private router: Router) {}

  registerUser() {
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Registration Successful! You can now login.');
    this.router.navigate(['/login']);
  }
}
