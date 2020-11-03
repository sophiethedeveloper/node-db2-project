
exports.up = function(knex) {
  return knex.schema.createTable('cars-dealer', tbl => {
      tbl.increments('id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars-dealer')
};
