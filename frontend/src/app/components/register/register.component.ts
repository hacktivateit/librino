import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [MatButtonModule, MatDialogModule],
  standalone: true,
})
export class RegisterComponent {
  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(RegisterComponentDialog);
  }

}

@Component({
  selector: 'app-register-login',
  templateUrl: './register.component.dialog.html',
  imports: [MatButtonModule, MatDialogModule],
  standalone: true,
})
export class RegisterComponentDialog {

}
