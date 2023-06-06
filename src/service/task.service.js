const {getllTasksDB, createTaskDB, updateTaskDB, deleteTaskByIdDB, patchTaskByIdDB} = require('../repository/task.repository');

async function getAllTasks(){
    const data = await getllTasksDB();
    return data;
}
async function createTask(task, user_id){
    const data = await createTaskDB(task, user_id);
    return data;
}
async function updateTask(id, task, user_id){
    const data = await updateTaskDB(id, task, user_id);
    return data;
}

async function deleteTaskById(id){
    const data = await deleteTaskByIdDB(id);
    return data;
}
async function patchTaskById(id, clientData){
    const data = await patchTaskByIdDB(id, clientData);
    return data;
}

module.exports = {getAllTasks, createTask, updateTask, deleteTaskById, patchTaskById};