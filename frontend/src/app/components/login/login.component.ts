import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  model:any = {email:null};
  message = "";

  constructor(
    private authService: AuthService,
    private storage: StorageService,
    private router: Router,
  ){}

  ngOnInit(): void {
    if (this.storage.isLoggedIn())
      this.router.navigateByUrl('booklist');
  }

  signin(){
    this.authService.signin(this.model)
    .subscribe({
        next: (res) => {
          console.log(res);
          this.storage.saveUser(res.user)
          this.router.navigateByUrl('booklist');
        },
        error: (e) => {
          this.message = e.error.error;
        }
      });;
  }
}
