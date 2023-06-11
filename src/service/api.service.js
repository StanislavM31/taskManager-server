const { createUserDB, getUserByEmailDB } = require('../repository/api.repository');

const bcrypt = require('bcrypt');

const salt = 2;

async function createUser(name, surname, email, pwd) {
  const foundUser = await getUserByEmailDB(email);
  if (foundUser.length) throw new Error('user-email is already exist ');

  const hashedPassword = await bcrypt.hash(pwd, salt);
  const data = await createUserDB(name, surname, email, hashedPassword);
  return data;
}
async function authorizationUser(email, pwd) {
  const foundUser = await getUserByEmailDB(email);
  if (!foundUser.length) throw new Error("user not found. Authorization can't be done");

  const bool = await bcrypt.compare(pwd, foundUser[0].pwd);
  if (!bool) throw new Error('вы ввели неправильный пароль. Авторизация невозможна');
  //пароли не совпадают hash из db и введенный пароль
  return foundUser;
}
module.exports = { createUser, authorizationUser };
