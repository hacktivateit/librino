import { Component, OnInit} from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book} from 'src/app/models/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit{
  collection?: Book[]

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ){}

  ngOnInit(): void {
    this.retrieveLib()

  }

  retrieveLib(): void{
    this.bookService.getAll()
      .subscribe({
        next: (data) =>{
          this.collection = data;
          console.log(this.collection);
        },
        error: (e) => console.error(e)
      });
  }
}
