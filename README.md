
# Library System

This is a simple library system built with Node.js, following the SOLID design principles. It allows you to manage books in a library, including adding new books, retrieving a list of all books, borrowing books, and returning books.

## Features

- Add a new book
- Retrieve a list of all books
- Borrow a book
- Return a book

## Project Structure

```plaintext
LibrarySystem/
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
├── Dockerfile
├── .dockerignore
├── docker-compose.yml
├── package.json
├── .gitignore
```

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/LibrarySystem.git
   cd LibrarySystem
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

## Usage

### Without Docker

1. Start the server:

   ```sh
   node src/app.js
   ```

2. The server will start and listen on port 3000. You can interact with the API using the following endpoints:

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

### With Docker

1. **Build the Docker Image:**

   ```sh
   docker build -t LibrarySystem .
   ```

2. **Run the Docker Container:**

   ```sh
   docker run -p 3000:3000 LibrarySystem
   ```

3. **Using Docker Compose (Optional):**

   If you want to use Docker Compose to manage both your Node.js application and MySQL:

   - **Start the services:**

     ```sh
     docker-compose up
     ```

   This command will start both the `LibrarySystem` application and a MySQL container. The application will be accessible at `http://localhost:3000`.

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
