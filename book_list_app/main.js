// book class: represent a book

class Book {
  constructor(tittle, author, isbn) {
    this.tittle = tittle;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class : handle UI task
class UI {
  static display_books() {
    const store_books = [
      {
        tittle: "Book one",
        author: "Jone Doe",
        isbn: "3434343",
      },
      {
        tittle: "Book Two",
        author: "seung Doe",
        isbn: "1112532",
      },
      {
        tittle: "Book Three",
        author: "Jone nathan",
        isbn: "55236134",
      },
    ];

    const books = store_books;

    books.forEach((book) => UI.add_book_to_list(book));
  }

  static show_alert(message, class_name) {
    const div = document.createElement("div");
    div.className = `alert alert-${class_name}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    // vanish in 3 seconds

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
  // delete book
  static delete_book(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clear_field() {
    document.querySelector("#tittle").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static add_book_to_list(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.tittle}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
    `;

    list.appendChild(row);
  }
}

//   store class: handles storage
class Store {
  static get_books() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static add_book(book) {
    const books = Store.get_books();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static remove_book(isbn) {
    const books = Store.get_books();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}
// store class : handles storage

// event display Books

document.addEventListener("DOMContentLoaded", UI.display_books);
// Event: add a book

document.querySelector("#book-form").addEventListener("submit", (e) => {
  //   prevent actual submit

  e.preventDefault();

  // get form values

  const tittle = document.querySelector("#tittle").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  // Validate

  if (tittle === "" || author === "" || isbn === "") {
    // check condition
    UI.show_alert("please fill in all fields", "info");
  } else {
    //   instatiate book
    const book = new Book(tittle, author, isbn);

    //   add Book to UI

    UI.add_book_to_list(book);

    // show success message
    UI.show_alert("Book added", "success");

    //   clear fields

    UI.clear_field();
  }
});

// event : remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.delete_book(e.target);

  //   show success message
  UI.show_alert("book Removed", "success");
});
