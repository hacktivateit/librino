import { Component, OnInit} from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit{
  library?: Book[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private BookService: BookService,
  ){}

  ngOnInit(): void {
    this.retrieveBooks()

  }

  retrieveBooks(): void{
    // const id = Number(this.route.snapshot.paramMap.get('id'));

    // this.userService.getLibrary(id)
    this.BookService.getAll()
      .subscribe({
        next: (data) =>{
          this.library = data;
          console.log(this.library);

        },
        error: (e) => console.error(e)
      });
  }
}
