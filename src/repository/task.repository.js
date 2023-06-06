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

async function updateTaskDB(id, task, user_id){
  const client = await pool.connect();
  const sql = `UPDATE tasks SET task =$1, user_id = $2 WHERE id = $3 RETURNING *`;
  const result = (await client.query(sql,[ task, user_id, id])).rows;
  return result;
}

async function deleteTaskByIdDB(id){
  const client = await pool.connect();
  const sql = `DELETE from tasks WHERE id = $1 RETURNING *`;
  const result = (await client.query(sql,[id])).rows;
  return result;
}

async function patchTaskByIdDB(id, clientData){
  const client = await pool.connect();
  const sql = `SELECT * FROM tasks WHERE id=$1`;
  const result = (await client.query(sql,[id])).rows;

  const merge = {...result[0], ...clientData};
  const sql2 = `UPDATE tasks SET task=$1, user_id=$2 WHERE id = $3 RETURNING *`;
  const patchData = (await client.query(sql2, [merge.task, merge.user_id, id])).rows;
  return patchData;
}

module.exports = {getllTasksDB, createTaskDB, updateTaskDB, deleteTaskByIdDB, patchTaskByIdDB}
