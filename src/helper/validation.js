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

module.exports = {isValidId, IsValidUserBody};