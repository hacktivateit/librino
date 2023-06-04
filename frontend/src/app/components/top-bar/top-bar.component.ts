import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private storage: StorageService){}
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

}
