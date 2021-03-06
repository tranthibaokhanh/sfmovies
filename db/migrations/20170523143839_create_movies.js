'use strict';

exports.up = function (Knex) {
  return Knex.schema.createTable('movies', (table) => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.integer('release_year');
  });
};

exports.down = function (Knex) {
  return Knex.schema.dropTable('movies');
};
