const bookService = require("../services/bookService");

class BookController {
  async addBook(req, reply) {
    try {
      const book = await bookService.addBook(req.body);
      reply.code(201).send(book);
    } catch (error) {
      reply.code(500).send(error.message);
    }
  }

  async getAllBooks(req, reply) {
    try {
      const books = await bookService.getAllBooks();
      reply.code(200).send(books);
    } catch (error) {
      reply.code(500).send(error.message);
    }
  }

  async getBookById(req, reply) {
    try {
      const books = await bookService.getBookById(req.query.id);
      reply.code(200).send(books);
    } catch (error) {
      reply.code(500).send(error.message);
    }
  }

  async borrowBook(req, reply) {
    try {
      await bookService.borrowBook(req.params.id);
      reply.code(200).send({ message: "Book borrowed successfully" });
    } catch (error) {
      reply.code(400).send(error.message);
    }
  }

  async returnBook(req, reply) {
    try {
      await bookService.returnBook(req.params.id);
      reply.code(200).send({ message: "Book returned successfully" });
    } catch (error) {
      reply.code(400).send(error.message);
    }
  }
}

module.exports = new BookController();
