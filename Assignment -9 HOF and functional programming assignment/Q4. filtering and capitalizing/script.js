document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = parseInt(document.getElementById('year').value);

    // Book object
    const book = {
        title: title,
        author: author,
        year: year
    };

    // Add book to all books list
    addBookToAllBooks(book);

    // Filter and process books
    processBook(book);

    // Clear input fields
    document.getElementById('bookForm').reset();
});

const allBooks = [];
const filteredBooks = [];

function addBookToAllBooks(book) {
    allBooks.push(book);
    displayAllBooks();
}

function processBook(book) {
    if (book.year <= 2010) {
        const filteredBook = { ...book, author: book.author.toUpperCase() }; // Capitalize author name
        filteredBooks.push(filteredBook);
        displayFilteredBooks();
    }
}

function displayAllBooks() {
    const allBooksList = document.getElementById('allBooks');
    allBooksList.innerHTML = '';

    allBooks.forEach(function(book) {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} (${book.year})`;
        allBooksList.appendChild(li);
    });
}

function displayFilteredBooks() {
    const filteredBooksList = document.getElementById('filteredBooks');
    filteredBooksList.innerHTML = '';

    filteredBooks.forEach(function(book) {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} (${book.year})`;
        filteredBooksList.appendChild(li);
    });
}
