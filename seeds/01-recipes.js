exports.seed = function(knex) {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'curry chicken'},
        {id: 2, name: 'cherry pie'},
        {id: 3, name: 'pear pie'}
      ]);
    };

