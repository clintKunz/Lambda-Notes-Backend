
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
      table.increments();
      table
        .string('username', 64)
        .notNullable()
        .unique();
      table
        .string('password', 128)
        .notNullable();
      table
        .timestamp('signup_date')
        .defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
