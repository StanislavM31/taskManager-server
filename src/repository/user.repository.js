const pool = require('../db');

async function getAllUserDB() {
  const client = await pool.connect();
  const sql = `SELECT * FROM users`;
  const result = (await client.query(sql)).rows;
  return result;
}

async function getUserByIdDB(id){
  const client = await pool.connect();
  const sql = `SELECT * FROM USERS WHERE id=$1`;
  const data = (await client.query(sql, [id])).rows;
  return data;
}

async function createUserDB(name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = ` INSERT INTO users (name, surname, email, pwd) VALUES( $1 , $2, $3, $4) returning *`;
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    await client.query('COMMIT');

    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    return null;
  }
}

async function updateUserDB(id, name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `UPDATE users SET name=$1, surname=$2, email=$3, pwd=$4 WHERE id=$5 returning *`;
    const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    await client.query('COMMIT');

    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    return null;
  }
}

async function deleteUserDB(id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `DELETE FROM users WHERE id = $1 returning *`;
    const result = (await client.query(sql, [id])).rows;
    await client.query('COMMIT');

    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    return null;
  }
}

async function patchUserDB(id, clientData){
  const client = await pool.connect();
  const sql_select = `SELECT * FROM users WHERE id=$1`;
  const result_select = (await client.query(sql_select,[id])).rows;

  const newObj = {...result_select[0], ...clientData};

  const sql_update = `UPDATE users SET name= $1, surname= $2, email= $3, pwd= $4 WHERE id=$5 returning *`;
  const result_update = (await client.query(sql_update, [newObj.name, newObj.surname, newObj.email, newObj.pwd, newObj.id])).rows;
  return result_update;
}


module.exports = { getAllUserDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB, patchUserDB };
