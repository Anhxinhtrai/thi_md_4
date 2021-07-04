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
  lastId : number| undefined

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
   this.resetForm()
    this.getList()
  }
  resetForm(){
    this.setLastId();
    this.formAdd = this.fb.group({
      id: [this.lastId],
      name: [],
      read: [false]
    })
  }
  setLastId(){
    let lastIndex = this.bookService.getAll().length -1
    // @ts-ignore
    this.lastId = this.bookService.getAll()[lastIndex].id +1
  }

  getList() {
    this.bookService.fillter()
    let books = this.bookService.list
    for (let i = 0; i < books.length; i++) {
      this.books.push(books[i])
    }
    return
  }

  addBook() {
    let book = this.formAdd?.value
    console.log(book)
    this.bookService.addBook(book)
    alert("thêm thành công")
    this.books = [];
    this.getList()
    this.resetForm()
  }

  read(index:number) {
    let id =this.books[index].id
    // @ts-ignore
    this.bookService.read(id)
    // @ts-ignore
    alert("đã đọc quyển sách "+ this.bookService.getAll()[id].name)
    this.books = []
    this.getList()
    console.log(this.books)

  }


}
