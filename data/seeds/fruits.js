
exports.seed = function (knex) {
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        { name: 'orange', avgWeightOz: 1.5, delicious: true, color: 'green' },
        { name: 'pear', avgWeightOz: 2.5, delicious: false, color: 'orange' },
        { name: 'grapes', avgWeightOz: 5, delicious: true, color: 'green' },
      ]);
    });
};
