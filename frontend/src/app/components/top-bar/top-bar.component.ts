import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(
    private storage: StorageService,
    private router: Router,
  ){}
  username= ""

  isLoggedIn(): boolean {
    if (this.storage.isLoggedIn()){
      const user = this.storage.getUser();
      this.username = user.name;
      return true;
    }
    else
      return false;
  }

  signout(){
    console.log("signed out");
    this.storage.clean();
    this.router.navigateByUrl('/');
  }

}
