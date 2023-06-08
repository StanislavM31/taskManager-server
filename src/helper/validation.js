function isValidId(req, res, next){
    const {id} = req.params;
    if(isNaN(id)) throw new Error('id должен быть числом');
    if(id<0) throw new Error('id должен быть больше 0');
    next();
}

module.exports = {isValidId};