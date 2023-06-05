const {getllTasksDB, createTaskDB} = require('../repository/task.repository');

async function getAllTasks(){
    const data = await getllTasksDB();
    return data;
}
async function createTask(task, user_id){
    const data = await createTaskDB(task, user_id);
    return data;
}

module.exports = {getAllTasks, createTask};