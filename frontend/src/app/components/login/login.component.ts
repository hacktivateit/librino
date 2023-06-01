import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [MatButtonModule, MatDialogModule],
  standalone: true,
})
export class LoginComponent {
  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(LoginComponentDialog);
  }
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login.component.dialog.html',
  imports: [MatButtonModule, MatDialogModule],
  standalone: true,
})
export class LoginComponentDialog {}
