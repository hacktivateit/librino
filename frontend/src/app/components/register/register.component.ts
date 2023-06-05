import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model = new User();
  submitted = false;
  message = "Registration complete, now login";

  constructor(private authService: AuthService){}

  signup(){
    console.log(this.model);
    this.authService.signup(this.model)
    .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => {
          this.message = e.error.message;
          this.submitted = true;
        }
      });;
  }
}
