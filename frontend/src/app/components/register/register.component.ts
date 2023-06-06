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
  message="";

  constructor(private authService: AuthService){}

  signup(){
    console.log(this.model);
    this.authService.signup(this.model)
    .subscribe({
        next: (res) => {
          console.log(res);
          this.message = "Registration complete";
        },
        error: (e) => {
          this.message = e.error.error;
        }
      });;
  }
}
