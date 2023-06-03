import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model'
import { User } from 'src/app/models/user.model'
import { BookService } from 'src/app/services/book.service'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  model = new Book();
  submitted = false;

  constructor(private bookService: BookService){}

  addNewBook(){
    //For now the owner add by hand
    const id = 1;
    //i will add it by the JWT token

    console.log(this.model);
    this.bookService.create(this.model)
    .subscribe({
        next: (res) => {
          console.log(res);
        }
    });;
  }

}
