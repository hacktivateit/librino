import { Component, OnInit} from '@angular/core';
import { Book } from 'src/app/models/book.model'
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  book = new Book();
  message="";

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
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
      error: (e) => this.message = e.error.error
    });
  }
  delete(id:Number):void{
    if(confirm("Are you sure?")) {
      this.bookService.delete(id)
        .subscribe({
          next: () =>{
            console.log("deleted " +id);
            this.router.navigateByUrl('booklist');
          },
          error: (e) =>  this.message = e.error.error
        });
    }
  }
}
