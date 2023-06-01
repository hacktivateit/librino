import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { LoginComponent } from './components/login/login.component';
import { LoginComponentDialog } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterComponentDialog } from './components/register/register.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

//Material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    //Dialogs
    LoginComponent,
    LoginComponentDialog,
    RegisterComponent,
    RegisterComponentDialog,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
