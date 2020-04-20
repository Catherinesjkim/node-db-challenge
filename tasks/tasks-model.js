// const knex = require("knex");
// const config = require("../knexfile.js");
// const db = knex(config.development);
// const mappers = require('../data/helpers/mappers.js');

// module.exports = {
//   findTasks,
//   findTaskById,
//   addTask
// };

// function findTasks() {
//   return db("Tasks");
// }

// function findTaskById(id) {
//   // works with MongoDB also
//   return db("Tasks").where({ id }).first(); // db side: return the first element
// }

// function addTask(taskInfo) {
//   return db("tasks").insert(taskInfo);
// }

// function update(id, changes) {
//   return db("users")
//     .where({ id }) // filter using the id
//     .update(changes)
//     .then(() => {
//       return findById(id); // returns a promise
//     });
// }
