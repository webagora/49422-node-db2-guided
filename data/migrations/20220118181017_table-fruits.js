
exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {
    // shortcut for create col 'id' which is primary key
    table.increments()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
};
