
exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {
    // shortcut for create col 'id' which is primary key with auto-inc integers
    table.increments()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
};
