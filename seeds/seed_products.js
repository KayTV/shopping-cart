
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('products').del(),

    // Inserts seed entries
    knex('products').insert({
      id: 1,
      title: 'rowValue',
      image: '',
      price: '',
      stock: '',
      rating: 3,
      category: '',
      info: ''
    }),
    knex('products').insert({
      id: 2,
      title: 'rowValue',
      image: '',
      price: '',
      stock: '',
      rating: 3,
      category: '',
      info: ''
    }),
    knex('products').insert({
      id: 3,
      title: 'rowValue',
      image: '',
      price: '',
      stock: '',
      rating: 3,
      category: '',
      info: ''
    }),
    knex('products').insert({
      id: 4,
      title: 'rowValue',
      image: '',
      price: '',
      stock: '',
      rating: 3,
      category: '',
      info: ''
    }),
    knex('products').insert({
      id: 5,
      title: 'rowValue',
      image: '',
      price: '',
      stock: '',
      rating: 3,
      category: '',
      info: ''
    })
  );
};
