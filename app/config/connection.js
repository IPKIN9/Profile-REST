const { Client } = require('pg')
const client = new Client({
    database: "restprofile",
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'password',
});

client.connect();
module.exports = {
    query: (text, params, callback) => {
        return client.query(text, params, callback)
      },
  }