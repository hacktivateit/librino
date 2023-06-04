import { Component, OnInit} from '@angular/core';
import { Book } from 'src/app/models/book.model'
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  book = new Book();

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.retrieveBook();
  }

retrieveBook(): void{
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.bookService.get(id)
    .subscribe({
      next: (data) =>{
        this.book = data;
        console.log(this.book);
      },
      error: (e) => console.error(e)
    });
  }
}
