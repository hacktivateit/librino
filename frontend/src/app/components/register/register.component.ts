import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
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
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf],
  standalone: true,
})
export class RegisterComponentDialog {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
