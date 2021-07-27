const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'naps',
  host: 'localhost',
  database: 'embhead',
  password: 'password',
  port: 5432
})

module.exports = {
  pool
};
