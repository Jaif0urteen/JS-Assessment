// Array of book objects
let library = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", alreadyRead: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", alreadyRead: false }
];

// Iterate through the array of books
library.forEach(book => {
    // Log title and author of each book
    console.log(`${book.title} by ${book.author}`);

    // Check if the book has been read
    if (book.alreadyRead) {
        console.log(`You already read "${book.title}" by ${book.author}`);
    } else {
        console.log(`You still need to read "${book.title}" by ${book.author}`);
    }
});
