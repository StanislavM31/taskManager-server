const express = require('express');
const route = express.Router();
const { getAllTasks, createTask, updateTask, deleteTaskById, patchTaskById } = require('../service/task.service');

route.get('/', async (req, res) => {
  try {
    const data = await getAllTasks();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
route.post('/', async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createTask(task, user_id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
route.put('/:id', async (req, res) => {
  try {
    const{id} = req.params;
    const { task, user_id } = req.body;
    const data = await updateTask(id, task, user_id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

route.delete('/:id', async (req, res) => {
  try {
    const{id} = req.params;
    const data = await deleteTaskById(id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

route.patch('/:id', async (req, res) => {
  try {
    const{id} = req.params;
    const clientData = req.body;
    const data = await patchTaskById(id, clientData);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = route;
