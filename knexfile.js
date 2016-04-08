module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/shopping_cart'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
