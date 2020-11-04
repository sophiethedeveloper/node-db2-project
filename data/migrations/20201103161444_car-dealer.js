
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id')
      tbl.string('model', 128).notNullable()
      tbl.string('vin').unique().notNullable()
      tbl.integer('mileage').notNullable()
      tbl.string('make', 128).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
