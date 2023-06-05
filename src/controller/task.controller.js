const express = require('express');
const route = express.Router();
const { getAllTasks, createTask } = require('../service/task.service');

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

module.exports = route;
