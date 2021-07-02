import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  books: Book[] = []

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    let books  = this.bookService.getAll()
    for (let i = 0; i < books.length; i++) {
      if (books[i].read === true){
        this.books.push(books[i])
      }
    }
    return
  }
    readAgain(index:number) {
      let id =this.books[index].id
      // @ts-ignore
      this.bookService.readAgain(id)
      // @ts-ignore
      alert("đã đọc lại quyển sách "+ this.bookService.getAll()[id].name)
     this.books= [];
      this.getList();
  }

}
