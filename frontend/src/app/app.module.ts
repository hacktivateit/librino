import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

//Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    TopBarComponent,
    RegisterComponent,
    BooklistComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
