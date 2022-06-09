// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  connection: process.env.DATABASE || {
    user: 'postgres',
    database: 'nodejs_basics',
  },
};
