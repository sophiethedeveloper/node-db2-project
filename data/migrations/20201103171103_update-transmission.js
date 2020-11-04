
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.renameColumn('clean-title', 'clean_title')
  })
};

exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('clean_title', 'clean-title')
    })
};
