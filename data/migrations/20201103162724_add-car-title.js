
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.boolean('clean-title')
  })
};

exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('clean-title')
    })
};
