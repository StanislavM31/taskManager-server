const { getAllUserDB, createUserDB, updateUserDB, deleteUserDB } = require('../repository/user.repository');

async function getAllUser() {
  const data = await getAllUserDB();
  return data;
}

async function createUser(name, surname, email, pwd) {
  const data = await createUserDB(name, surname, email, pwd);
  return data;
}

async function updateUser(id, name, surname, email, pwd) {
  const data = await updateUserDB(id, name, surname, email, pwd);
  return data;
}

async function deleteUser(id, name, surname, email, pwd) {
  const data = await deleteUserDB(id, name, surname, email, pwd);
  return data;
}

module.exports = { getAllUser, createUser, updateUser, deleteUser };
