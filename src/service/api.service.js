const {createUserDB, getUserByEmailDB} = require("../repository/api.repository");

const bcrypt = require('bcrypt');

const salt = 2;

async function createUser(name, surname, email, pwd){
    const  foundUser = await getUserByEmailDB(email);
    if(foundUser.length) throw new Error('user-email is already exist ');

    const hashedPassword = await bcrypt.hash(pwd, salt);
    const data = await createUserDB(name, surname, email, hashedPassword);
    return data
}

module.exports = {createUser}