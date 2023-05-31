const express = require("express");
const route = express.Router();
const {getAllUser, createUser} = require("../service/user.service");


route.get("/", async(req,res)=>{
    try{
        const data = await getAllUser();
        res.send(data);
    } catch(error){
        res.send(error.message)
    }
})
route.post("/", async(req,res)=>{
    try{
        const {name, surname, email, pwd} = req.body;
        const data = await createUser(name, surname, email, pwd);
        res.send(data);
    } catch(error){
        res.send(error.message)
    }
})

module.exports = route;