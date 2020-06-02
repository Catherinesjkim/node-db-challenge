const knex = require("knex");
const config = require("../knexfile.js");
const db = knex(config.development);

module.exports = {
  allTasks
};

function allTasks() {
  return db("tasks");
}


