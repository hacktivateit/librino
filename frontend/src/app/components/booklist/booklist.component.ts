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
 collection!: Book[]
displayedColumns: string[] = ['actions','title', 'author', 'synopsis', 'completion', 'ISBN'];

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

  delete(id:Number):void{
    this.bookService.delete(id)
      .subscribe({
        next: (data) =>{
          this.collection = data;
          console.log("deleted " +id);
          //reload page
        },
        error: (e) => console.error(e)
      });
  }
}
