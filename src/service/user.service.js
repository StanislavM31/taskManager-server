const {getAllUserDB, createUserDB} = require("../repository/user.repository");

async function getAllUser(){
    const data = await getAllUserDB();
    return data;
}

async function createUser(name, surname, email, pwd){
    const data = await createUserDB(name, surname, email, pwd);
    return data;
}

module.exports = {getAllUser, createUser}