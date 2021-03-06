const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  addUser: (body) => {
    return db("users").insert({ ...body });
  },
  findUser: (body) => {
    return db("users")
    .where({user_name: body.user_name})
  },
  getUsers: (departmentStr) => {
    return db("users").select('user_name')
    .where({department: departmentStr})
    .then(rows => {
      console.log(rows);
      return rows;
    }) .catch(function(error) {
      console.error(error);
    });
  },
  userCheck: (strToCheck)=>{
    return db("users").where({user_name : strToCheck})
  }
};