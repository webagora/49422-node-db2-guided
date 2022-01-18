
exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {
    // shortcut for create col 'id' which is primary key with auto-inc integers
    table.increments('fruit_id') // pass the column name if you want different than 'id'
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
};
