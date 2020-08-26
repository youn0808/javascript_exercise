// class Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI
class UI {
  static display_book() {
    const list = [
      {
        title: "First book",
        author: "seunghwan",
        isbn: "3490123",
      },
      {
        title: "second book",
        author: "seunghwan",
        isbn: "5930283",
      },
    ];

    const books = list;

    books.forEach((book) => {
      UI.make_book(book);
    });
  }

  static make_book(book) {
    const list = document.querySelector("#book_list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><button type="button" class ='btn btn-danger btn-sm delete'>x</button></td>`;
    list.appendChild(row);
  }

  static delete_book_from_list(book) {
    if (book.classList.contains("delete")) {
      book.parentNode.parentNode.remove();
    }
  }

  static add_new_book() {}
}

// dispay book
document.addEventListener("DOMContentLoaded", UI.display_book());

// delete book from list

document.querySelector("#book_list").addEventListener("click", (e) => {
  UI.delete_book_from_list(e.target);
});

// add New book

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();

  var title = document.querySelector("#title").value;
  var author = document.querySelector("#author").value;
  var isbn = document.querySelector("#isbn").value;

  if (title === "" || author === "" || isbn === "") {
    console.log("e");
  } else {
    var newBook = new Book(title, author, isbn);
    UI.make_book(newBook);
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
});
