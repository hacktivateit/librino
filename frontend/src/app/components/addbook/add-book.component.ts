import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model'
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
    console.log(this.model);
    this.bookService.create(this.model)
    .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted=true;
        }
    });;
  }

}
