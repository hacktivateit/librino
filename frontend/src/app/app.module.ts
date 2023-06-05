import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatList, MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookComponent } from './components/book/book.component';
import { LoginComponent } from './components/login/login.component';

import { authInterceptorProvider } from './interceptors/auth.interceptor';
import { EditbookComponent } from './components/editbook/editbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    TopBarComponent,
    RegisterComponent,
    BooklistComponent,
    BookComponent,
    LoginComponent,
    EditbookComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
