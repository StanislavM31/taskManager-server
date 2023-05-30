const {getAllUserDB} = require("../repository/user.repository");

async function getAllUser(){
    const data = await getAllUserDB();
    return data;
}

module.exports = {getAllUser}