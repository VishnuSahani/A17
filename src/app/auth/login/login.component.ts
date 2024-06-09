import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private router : Router
  ){}

  loginSubmit(){
    let authObj ={
      name: "Vishnu Sahani",
      userId: "1234",
      authKey: "Tengo1020"
    };

    sessionStorage.setItem("authData",JSON.stringify(authObj));
    this.router.navigate(['/home']);
  }
}
