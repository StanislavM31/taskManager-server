const pool = require('../db');

async function getAllUserDB(){
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows;
    return result;
}

async function createUserDB(name, surname, email, pwd){
    const client = await pool.connect();
    const sql = ` INSERT INTO users (name, surname, email, pwd) VALUES( $1 , $2, $3, $4) returning *`
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
}
module.exports = {getAllUserDB, createUserDB}