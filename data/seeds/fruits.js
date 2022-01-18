// 1- truncate, not delete (there are libraries to help truncating)
// 2- do NOT try to insert the primary key col
exports.seed = async function (knex) {
  await knex('fruits').truncate()
  await knex('fruits').insert([
    { name: 'orange', avgWeightOz: 1.5, delicious: true },
        { name: 'pear', avgWeightOz: 2.5, delicious: null },
        { name: 'grapes', avgWeightOz: 5, delicious: false },
  ])      
};