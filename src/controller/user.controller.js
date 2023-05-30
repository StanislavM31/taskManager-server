const express = require("express");
const route = express.Router();
const {getAllUser} = require("../service/user.service");


route.get("/", async(req,res)=>{
    try{
        const data = await getAllUser();
        res.send(data);
    } catch(error){
        res.send(error.message)
    }
})

module.exports = route;