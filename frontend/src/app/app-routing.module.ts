import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookComponent } from './components/book/book.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'register/', component: RegisterComponent },
  { path: 'login/', component: LoginComponent },
  { path: 'booklist/:id', component: BooklistComponent },
  { path: 'book/:id', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
