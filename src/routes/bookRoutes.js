const bookController = require("../controllers/bookController");

async function routes(fastify, options) {
  fastify.post("/api/books", bookController.addBook);
  fastify.get("/api/books", bookController.getAllBooks);
  fastify.get("/api/books/getbyid", bookController.getBookById);
  fastify.put("/api/books/borrow/:id", bookController.borrowBook);
  fastify.put("/api/books/return/:id", bookController.returnBook);
}

module.exports = routes;
