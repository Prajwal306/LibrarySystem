const Book = require("../models/book");

class BookRepository {
  async addBook(book) {
    return await Book.create(book);
  }

  async getAllBooks() {
    return await Book.findAll();
  }

  async getBookById(id) {
    return await Book.findOne({ where: { id: id } });
  }

  async updateBook(id, updates) {
    return await Book.update(updates, { where: { id } });
  }
}

module.exports = new BookRepository();
