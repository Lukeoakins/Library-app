// Helper functions for reading and storing books on local memory
function loadBooks() {
    const saved = localStorage.getItem("books")
    return saved ? JSON.parse(saved) : [];
}

function saveBooks(books) {
    localStorage.setItem("books", JSON.stringify(books)); // turns the json array into a string
}

// Grab elements from HTML:
 const addBookForm = document.querySelector("#add-book-form")
 const addTitle = document.querySelector('#title')
 const addAuthor = document.querySelector('#author')
 const addBlurb = document.querySelector('#blurb')
 const addBookMessage = document.querySelector('#add-book-message')

function showMessage(text, type) { // Show a message once a book as been added
    addBookMessage.className = `alert alert-${type} mt-3 mb-0`
    addBookMessage.textContent = text

}

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault() // Always added for forms to stop the page from reloading

    // Remove any unecessary spaces in the inputs
    const title = addTitle.value.trim();
    const author = addAuthor.value.trim();
    const blurb = addBlurb.value.trim();

    if(!title || !author) { // Ensures the title and author fields are not empty
        showMessage("Title and author are required.")
        return;
    }

    const books = loadBooks();

  const isDuplicate = books.some(
    (book) =>
      book.title.toLowerCase() === title.toLowerCase() &&
      book.author.toLowerCase() === author.toLowerCase()
  );

  if (isDuplicate) {
    showMessage("That book is already in the system.");
    return;
  }

    const newBook = { id: title, author, blurb};
    books.push(newBook);
    saveBooks(books);
   

    addBookForm.reset()
    showMessage(`"${title} was added."`)


});

