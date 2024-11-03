// Create a "Library Management" program
const library = [];

// Function to add a book to the library
const holdBook = (title, author, yearPublished) => {
  const book = {
    title,
    author,
    yearPublished,
    getSummary: function () {
      return `Title: ${this.title}, Author: ${this.author}, Year: ${this.yearPublished}`;
    },
  };
  library.push(book);
};

// Function to view all books in the library
function viewBooks() {
  if (library.length === 0) {
    console.log("Library is empty");
    return;
  }

  library.forEach((book, index) => {
    console.log(`${index + 1}. ${book.getSummary()}`);
  });
}

// Function to delete a book from the library
function deleteBook(index) {
  if (index > 0 && index <= library.length) {
    library.splice(index - 1, 1);
    console.log("Book deleted successfully.");
  } else {
    console.log("Invalid index.");
  }
}

// Add some books
holdBook("Learning JavaScript", "Ilo Onyinye", 2024);
holdBook("Never give up", "Kosi Ojiteli", 2023);

// View the books
viewBooks();

// Delete a book
deleteBook(1);
