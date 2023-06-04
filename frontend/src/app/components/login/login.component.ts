import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model:any = {email:null};
  submitted = false;

  constructor(
    private authService: AuthService,
    private storage: StorageService,
    private router: Router,
  ){}

  signin(){
    this.authService.signin(this.model)
    .subscribe({
        next: (res) => {
          console.log(res);
          this.storage.saveUser(res.user)
          this.router.navigateByUrl('/');
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });;
  }
}
