const {getllTasksDB} = require('../repository/task.repository');

async function getAllTasks(){
    const data = await getllTasksDB();
    return data;
}

module.exports = {getAllTasks};