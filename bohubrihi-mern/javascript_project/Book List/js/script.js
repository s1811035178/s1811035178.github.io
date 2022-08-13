
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    constructor() {

    }
    addBookList(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td>
         <a href='#' class="delete">X</a>
         </td>`;
        list.appendChild(row);
    }
    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
    showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#new-book');
        container.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteFromBook(target) {
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();
            Store.removeBook(target.parentElement.
                previousElementSibling.textContent.trim());
            let ui = new UI();
            ui.showAlert("Book Removed!", 'success');
        }
    }
}

class Store {
    static getBook() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book) {
        let books = Store.getBook();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static displayBook() {
        let books = Store.getBook();
        let ui = new UI();
        books.forEach(book => {
            ui.addBookList(book);
        });
    }
    static removeBook(isbn) {
        let books = Store.getBook();
        books.forEach((book, index) => {
            if (book.isbn == isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }

}

document.querySelector('#book-list').addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', Store.displayBook());
document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;
    let ui = new UI();
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert("Please fill all the fields", 'error');
    }
    else {
        let book = new Book(title, author, isbn);
        ui.addBookList(book);
        ui.showAlert("Book Added!", 'success');
        Store.addBook(book);
        ui.clearFields();
    }
});
function removeBook(e) {
    e.preventDefault();
    let ui = new UI();
    ui.deleteFromBook(e.target);

}