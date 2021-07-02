import {Component, OnInit} from '@angular/core';
import {BookService} from "../service/book.service";
import {Book} from "../book";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {

  books: Book[] = []
  formAdd: FormGroup | undefined

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    let lastId = this.bookService.getAll().length
    this.formAdd = this.fb.group({
      id: [lastId],
      name: [],
      read: [false]
    })
    this.getList()
  }

  getList() {
    let books = this.bookService.getAll()
    for (let i = 0; i < books.length; i++) {
      if (books[i].read === false) {
        this.books.push(books[i])
      }
    }
    return
  }

  addBook() {
    let book = this.formAdd?.value
    console.log(book)
    this.bookService.addBook(book)
    alert("thêm thành công")
    this.books = []
    this.getList()
  }

  read(index:number) {
    let id =this.books[index].id
    // @ts-ignore
    this.bookService.read(id)
    // @ts-ignore
    alert("đã đọc quyển sách "+ this.bookService.getAll()[id].name)
    this.books = []
    this.getList()
  }


}
