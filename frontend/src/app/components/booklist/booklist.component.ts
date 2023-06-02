import { Component, OnInit} from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit{
  books?: Book[];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.retrieveBooks()

  }

  retrieveBooks(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);

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
