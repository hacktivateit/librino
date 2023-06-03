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
  library!: Book[];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ){}

  ngOnInit(): void {
    this.retrieveLib()

  }

  retrieveLib(): void{
    this.bookService.getLibrary(1)
      .subscribe({
        next: (data) =>{
          this.library = data;
          console.log(this.library);

        },
        error: (e) => console.error(e)
      });
  }
}
