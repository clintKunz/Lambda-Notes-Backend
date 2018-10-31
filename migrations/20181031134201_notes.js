exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', table => {
        table.increments();
        table
          .integer('user_id')
          .references('id')
          .inTable('users');
        table
          .string('title', 128)
          .notNullable();
        table
          .text('content')
          .notNullable();
        table
          .boolean('edited')
          .defaultTo(0);
        table
          .timestamp('timestamp')
          .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes');
};