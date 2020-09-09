
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl =>{
    tbl.increments('id')
    tbl.string("VIN").notNullable().index().unique()
    tbl.string("Make").notNullable().index()
    tbl.string("Model").notNullable().index()
    tbl.integer("Mileage").notNullable()
    tbl.string("Transmission").index()
    tbl.string("Title").index()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
