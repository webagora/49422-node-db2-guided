
exports.seed = function(knex) {
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        {name: 'orange', avgWeightOz: 1.5},
        {name: 'pear', avgWeightOz: 1.5},
        {name: 'grapes', avgWeightOz: 1.5},
      ]);
    });
};
