const express = require('express');
const route = express.Router();
const { getAllUser, createUser, updateUser, deleteUser, patchUser } = require('../service/user.service');

route.get('/', async (req, res) => {
  try {
    const data = await getAllUser();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
route.post('/', async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
route.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUser(id, name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
route.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await deleteUser(id, name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

route.patch('/:id', async(req,res)=>{
  try {
    const{id} = req.params;
    const clientData = req.body;
    const data = await patchUser(id, clientData);
    res.send(data);
  } catch (error) {

  }
})

module.exports = route;
