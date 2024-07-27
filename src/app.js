const fastify = require("fastify")({ logger: true });
const path = require("path");
const sequelize = require("./database");
const bookRoutes = require("./routes/bookRoutes");

// Register routes
fastify.register(bookRoutes);

// Serve static files
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "../public"),
  prefix: "/", // This will make files accessible at the root URL
});

// Start the server
const start = async () => {
  try {
    await sequelize.sync();
    await fastify.listen(3000);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
