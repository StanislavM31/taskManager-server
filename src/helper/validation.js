function isValidId(req, res, next){
    const {id} = req.params;
    if(isNaN(id)) throw new Error('id должен быть числом');
    if(id<0) throw new Error('id должен быть больше 0');
    next();
}

function IsValidUserBody(req,res,next){
    const{name, surname, email, pwd} = req.body;
    if(!name) throw new Error("name не должно быть пустым");
    if(!surname) throw new Error("surname не должно быть пустым");
    if(!email) throw new Error("email не должно быть пустым");
    if(!pwd) throw new Error("password не должно быть пустым");

    if((pwd.length<8)) throw new Error("password < 8");
    if(!/^[a-z0-9\_\-\.]+@[a-z]+\.[a-z]+$/gm.test(email)) throw new Error("неверный формат почты");

    next();
}

function isValidTaskBody(req,res,next){
    const{task, user_id} = req.body;
    if(!task) throw new Error("error: task is empty");
    if(!user_id) throw new Error("error: user_id is empty");

    if(!isNaN(task)) throw new Error("error: task is number");
    if(isNaN(user_id)) throw new Error("error: user_id is not a number//");

    if(user_id.length<0) throw new Error("error: task is negative//");
    next();
}

module.exports = {isValidId, IsValidUserBody, isValidTaskBody};