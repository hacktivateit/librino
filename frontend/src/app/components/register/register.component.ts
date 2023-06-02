import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model = new User();
  submitted = false;

  constructor(private userService: UserService){}

  addNewUser(){
    console.log(this.model);
    this.userService.create(this.model)
    .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });;
  }

}
