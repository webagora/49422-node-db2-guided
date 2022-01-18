
exports.up = async function(knex) {
  await knex.schema.table('fruits', table => {
    table.string('color')
  })
};

exports.down = async function(knex) {
  await knex.schema.table('fruits', table => {
    
  })
};
