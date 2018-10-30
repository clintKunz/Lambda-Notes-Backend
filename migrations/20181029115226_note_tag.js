
exports.up = function(knex, Promise) {
  return knex.schema.createTable('note_tag', table => {
      table.increments();
      table 
        .integer('note_id')
        .notNullable()
        .references('id')
        .inTable('notes');
      table 
        .integer('tag_id')
        .notNullable()
        .references('id')
        .inTable('tags');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('note_tag');
};
