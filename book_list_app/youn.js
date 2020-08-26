// // Book class
// class Book {
//   constructor(title, author, isbn) {
//     this.tittle = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }

// // UI Class

// class UI {
//   static display_book() {
//     const book_list = [
//       {
//         title: "book one",
//         author: "Youn",
//         isbn: "1034932",
//       },
//       {
//         title: "book two",
//         author: "james",
//         isbn: "3434932",
//       },
//       {
//         title: "book three",
//         author: "Cameron",
//         isbn: "095332",
//       },
//     ];

//     const books = book_list;

//     books.forEach((book) => UI.add_to_book_list(book));
//   }

//   static add_to_book_list(book) {
//     const list = document.querySelector("#book-list");
//     const row = document.createElement("tr");
//     row.innerHTML = `
//     <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}<td>
//         <td><a href='#' class = 'btn btn-danger btn-sm delete>X</a></td>`;

//     list.appendChild(row);
//   }
// }

// // display book List

// document.addEventListener("DOMContentLoaded", UI.display_book);

// class book

class Book {
  constructor(tittle, author, isbn) {
    this.tittle = tittle;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class

class UI {
  static display_book() {
    const book_list = [
      {
        tittle: "first book",
        author: "james",
        isbn: "354350",
      },
      {
        tittle: "second book",
        author: "youn",
        isbn: "3059239",
      },
    ];

    const books = book_list;
    books.forEach((book) => UI.add_book_in_list(book));
  }

  static add_book_in_list(book) {
    const line = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.tittle}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class = 'btn btn-danger btn-sm delete'>X</a></td>`;

    line.appendChild(row);
  }

  static delete_book(el) {
    if ((el.classList.contains = "delete")) {
      el.parentNode.parentNode.remove();
    }
  }

  static clear_field() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static show_alert(message, class_name) {
    const div = document.createElement("div");
    // div.style.color = "red";
    div.className = `alert alert-${class_name}`;
    const form = document.querySelector("#book-form");
    const container = document.querySelector(".container");
    div.appendChild(document.createTextNode(message));
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }
}

// delete book
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.delete_book(e.target);
});

// display books

document.addEventListener("DOMContentLoaded", UI.display_book());

// add Book

document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const tittle = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  if (tittle === "" || author === "" || isbn === "") {
    UI.show_alert("Please fill in all fields", "info");
  } else {
    const new_book = new Book(tittle, author, isbn);
    UI.add_book_in_list(new_book);
    UI.show_alert("Success inpput new book", "success");
  }
  UI.clear_field();
});
