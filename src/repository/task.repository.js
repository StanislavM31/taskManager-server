const pool = require('../db.js');

async function getllTasksDB() {
  const client = await pool.connect();
  const sql = `SELECT * FROM tasks`;
  const result = (await client.query(sql)).rows;
  return result;
}

async function createTaskDB(task, user_id){
  const client = await pool.connect();
  const sql = `INSERT INTO tasks (task, user_id) values ($1,$2) RETURNING *`;
  const result = (await client.query(sql,[task, user_id])).rows;
  return result;
}

module.exports = {getllTasksDB, createTaskDB}
