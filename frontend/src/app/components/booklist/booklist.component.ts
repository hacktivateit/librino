import { Component, OnInit} from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit{
  books?: Book[];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.retrieveBooks()
  }

  retrieveBooks(): void{
    this.bookService.getAll()
      .subscribe({
        next: (data) =>{
          this.books = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
