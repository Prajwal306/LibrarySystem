const apiUrl = "http://localhost:3000/api/books";

async function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, author }),
  });

  if (response.ok) {
    alert("Book added successfully!");
  } else {
    alert("Failed to add book.");
  }
}

async function getBooks() {
  const response = await fetch(apiUrl);

  if (response.ok) {
    const books = await response.json();
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    books.forEach((book) => {
      const li = document.createElement("li");
      li.textContent = `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Borrowed: ${book.isBorrowed}`;
      bookList.appendChild(li);
    });
  } else {
    alert("Failed to retrieve books.");
  }
}

async function borrowBook() {
  const id = document.getElementById("borrow-id").value;

  const response = await fetch(`${apiUrl}/borrow/${id}`, {
    method: "PUT",
  });

  if (response.ok) {
    alert("Book borrowed successfully!");
  } else {
    alert("Failed to borrow book.");
  }
}

async function returnBook() {
  const id = document.getElementById("return-id").value;

  const response = await fetch(`${apiUrl}/return/${id}`, {
    method: "PUT",
  });

  if (response.ok) {
    alert("Book returned successfully!");
  } else {
    alert("Failed to return book.");
  }
}
