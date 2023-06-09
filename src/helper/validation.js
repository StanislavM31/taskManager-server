function isValidId(req, res, next){
    const {id} = req.params;
    if(isNaN(id)) throw new Error('id должен быть числом');
    if(id<0) throw new Error('id должен быть больше 0');
    next();
}

function IsValidUserBody(req,res,next){
    const{name, surname, email, pwd} = req.params;
    if(!name) throw new Error("name не должно быть пустым");
    if(!surname) throw new Error("surname не должно быть пустым");
    if(!email) throw new Error("email не должно быть пустым");
    if(!pwd) throw new Error("password не должно быть пустым");
    next();
}

module.exports = {isValidId, IsValidUserBody};