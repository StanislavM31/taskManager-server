function buildResponse(res, code, message) {
  res.status(code).send(message);
  next();
}

module.exports = {buildResponse};
