const express = require("express");
const { buildResponse } = require("../helper/buildResponse");
const route = express.Router();
const {createUser, authorizationUser} = require('../service/api.service');

route.post('/registration', async (req,res)=>{
    try {
        const{name, surname, email, pwd} = req.body;
        const data = await createUser(name, surname, email, pwd);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.post('/auth', async(req,res)=>{
    try {
        const {email, pwd} = req.body;
        const data = await authorizationUser(email, pwd);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404,error.message)
    }
})

module.exports = route