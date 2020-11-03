
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.boolean('automatic')
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.dropColumn('automatic')
  })
};
