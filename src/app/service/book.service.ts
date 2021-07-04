import {Injectable} from '@angular/core';
import {Book} from "../book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  list : Book[] = [];
  history: Book[] = [];
  books: Book[] = [
    {
      id: 0,
      name: "Elon Musk",
      read: true
    },
    {id: 1, name: "Getting Things Done",read: true},
    {
      id: 2,
      name: "Long Kinh",
     read: true
    },
    {
      id: 3,
      name: "Sapiens",
     read: false
    },
    {
      id: 4,
      name: "Toi di Code dao",
     read: false
    },
    {
      id: 5,
      name: "Hoc nghe",
     read: false
    },
    {
      id: 6,
      name: "Clean Code",
     read: false
    }
  ]

  getAll(){
    return this.books
  }
  constructor() {
  }
  addBook(book:Book){
    this.books.push(book)
  }
  read(id:number){
    for (let i = 0; i < this.books.length; i++) {
      if (id==i){
        this.books[i].read = true;
      }
    }
  }
  fillter(){
  let books = this.books;
  this.list = [];
  this.history = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].read === true){
        this.history.push(books[i])
      }
      if (books[i].read === false){
        this.list.push(books[i])
      }
    }
  }
  readAgain(id: number){
    for (let i = 0; i < this.books.length; i++) {
      if (id==i){
        this.books[i].read = false;
      }
    }
  }
}
