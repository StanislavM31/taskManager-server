const express = require('express');
const route = express.Router();
const {getAllTasks} = require("../service/task.service");


route.get('/', async (req, res) => {
    try {
      const data = await getAllTasks();
      res.send(data);
    } catch (error) {
      res.send(error.message);
    }
  });

module.exports = route