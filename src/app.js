const fastify = require("fastify")({ logger: true });
const sequelize = require("./database");
const bookRoutes = require("./routes/bookRoutes");

fastify.register(bookRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    fastify.log.info("MySQL connected successfully");
    await sequelize.sync();
    await fastify.listen(3000);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
