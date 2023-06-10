const express = require('express');
const route = express.Router();
const { getAllTasks, createTask, updateTask, deleteTaskById, patchTaskById } = require('../service/task.service');
const {isValidId, isValidTaskBody} = require("../helper/validation");
const {buildResponse} = require("../helper/buildResponse")

route.get('/', async (req, res) => {
  try {
    const data = await getAllTasks();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});
route.post('/', isValidTaskBody, async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createTask(task, user_id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});
route.put('/:id', isValidId, isValidTaskBody,async (req, res) => {
  try {
    const{id} = req.params;
    const { task, user_id } = req.body;
    const data = await updateTask(id, task, user_id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidId, async (req, res) => {
  try {
    const{id} = req.params;
    const data = await deleteTaskById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.patch('/:id', isValidId, async (req, res) => {
  try {
    const{id} = req.params;
    const clientData = req.body;
    const data = await patchTaskById(id, clientData);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
