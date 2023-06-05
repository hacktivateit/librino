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
  collection!: Book[];
  error = "";
  empty=false;

  displayedColumns: string[] = ['actions','title', 'author', 'synopsis', 'completion', 'ISBN'];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ){}

  ngOnInit(): void {
    this.bookService.getAll()
      .subscribe({
        next: (data) =>{
          this.collection = data;
          console.log(this.collection);
          if (this.collection.length == 0)
            this.empty = true;
        },
        error: (e) => console.error(e)
      });
  }

  delete(id:Number):void{
    if(confirm("Are you sure?")) {
      this.bookService.delete(id)
        .subscribe({
          next: (data) =>{
            const pos = this.collection.findIndex(b => b.id == id)
            this.collection.splice(pos,1);
            console.log("deleted " +id);
          },
          error: (e) =>  this.error = e.error.message
        });
    }
  }
}
