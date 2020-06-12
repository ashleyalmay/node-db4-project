exports.seed = function(knex) {
  // Inserts seed entries
  return knex('ingredients').insert([
    {id:1, name: 'egg'},
    {id:2, name: 'milk'},
    {id:3, name: 'butter'}
  ]);
};