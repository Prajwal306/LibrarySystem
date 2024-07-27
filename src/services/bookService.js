const bookRepository = require("../repositories/bookRepository");

class BookService {
  async addBook(book) {
    return await bookRepository.addBook(book);
  }

  async getAllBooks() {
    return await bookRepository.getAllBooks();
  }

  async getBookById(id) {
    return await bookRepository.getBookById(id);
  }

  async borrowBook(id) {
    const book = await bookRepository.getBookById(id);
    if (book && !book.isBorrowed) {
      return await bookRepository.updateBook(id, { isBorrowed: true });
    }
    throw new Error("Book is not available or already borrowed");
  }

  async returnBook(id) {
    const book = await bookRepository.getBookById(id);
    if (book && book.isBorrowed) {
      return await bookRepository.updateBook(id, { isBorrowed: false });
    }
    throw new Error("Book is not borrowed");
  }
}

module.exports = new BookService();
