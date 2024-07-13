# LibrarySystem
```markdown
# Library System

This is a simple library system built with Node.js, following the SOLID design principles. It allows you to manage books in a library, including adding new books, retrieving a list of all books, borrowing books, and returning books.

## Features

- Add a new book
- Retrieve a list of all books
- Borrow a book
- Return a book

## Project Structure


library-system/
├── src/
│   ├── controllers/
│   │   ├── bookController.js
│   ├── models/
│   │   ├── book.js
│   ├── repositories/
│   │   ├── bookRepository.js
│   ├── services/
│   │   ├── bookService.js
│   ├── routes/
│   │   ├── bookRoutes.js
│   ├── app.js
├── package.json
├── .gitignore


## Installation

1. Clone the repository:

   ```sh
   git clone [https://github.com/your-username/library-system.git](https://github.com/Prajwal306/LibrarySystem)
   cd librarySystem
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

## Usage

1. Start the server:

   ```sh
   node src/app.js
   ```

2. The server will start and listen on port 3000. You can interact with the API using the following endpoints:

### Endpoints

- **Add a new book**
  - **URL:** `POST /api/books`
  - **Body:**
    ```json
    {
      "id": "1",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald"
    }
    ```
  - **Response:** `201 Created`

- **Get all books**
  - **URL:** `GET /api/books`
  - **Response:** `200 OK`
    ```json
    [
      {
        "id": "1",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "isBorrowed": false
      }
    ]
    ```

- **Borrow a book**
  - **URL:** `PUT /api/books/borrow/:id`
  - **Response:** `200 OK` or `400 Bad Request`

- **Return a book**
  - **URL:** `PUT /api/books/return/:id`
  - **Response:** `200 OK` or `400 Bad Request`

## Design Principles

This project adheres to the SOLID design principles:

1. **Single Responsibility Principle (SRP):** Each class has a single responsibility, making the codebase easier to understand and maintain.
2. **Open/Closed Principle (OCP):** The system is designed to be extensible without modifying existing code, reducing the risk of introducing bugs.
3. **Liskov Substitution Principle (LSP):** Subclasses can be used interchangeably with their base classes, ensuring reliability.
4. **Interface Segregation Principle (ISP):** Interfaces are small and specific, reducing the implementation burden on classes.
5. **Dependency Inversion Principle (DIP):** High-level modules depend on abstractions rather than concrete implementations, promoting flexibility and ease of testing.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
