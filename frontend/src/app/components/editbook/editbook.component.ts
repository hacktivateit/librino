import { Component, OnInit} from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit{
  book = new Book()
  message="";

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.bookService.get(id)
      .subscribe({
        next: (data) =>{
          this.book = data;
          console.log(this.book);
        },
        error: (e) => this.message=e.error.error
      });
  }

  updateBook():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.update(id,this.book)
      .subscribe({
        next: (data) =>{
          this.book = data;
          console.log(this.book);
          this.message="Book updated!";
        },
        error: (e) => this.message=e.error.error
      });
  }
}
