exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table){
    table.increments();
    table.string('title');
    table.text('image');
    table.integer('price');
    table.boolean('stock');
    table.integer('rating');
    table.string('category')
    table.text('info');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
