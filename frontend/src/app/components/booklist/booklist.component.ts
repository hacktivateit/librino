import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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
    private userService: UserService,
  ){}

  ngOnInit(): void {
    this.retrieveLib()

  }

  retrieveLib(): void{
    this.userService.getLibrary(1)
      .subscribe({
        next: (data) =>{
          this.collection = data.collection;
          console.log(this.collection);
        },
        error: (e) => console.error(e)
      });
  }
}
