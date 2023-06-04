const pool = require('../db.js');

async function getllTasksDB() {
  const client = await pool.connect();
  const sql = `SELECT * FROM tasks`;
  const result = (await client.query(sql)).rows;
  return result;
}

module.exports = {getllTasksDB}
