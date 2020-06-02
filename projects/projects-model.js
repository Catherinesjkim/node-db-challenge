const knex = require("knex");
const config = require("../knexfile.js");
const db = knex(config.development);

module.exports = {
  findProject,
  addProject,
  findTasks,
  addTasks
};

// method to get the projects (All)
function findProject() {
  return db("projects");
}

function addProject(body) {
  return db("projects").insert(body);
}

// join statement
function findTasks(taskId) {
  return db
    .select("projects.projects_name", "projects.projects_description", "tasks.*")
    .from("tasks")
    .join("projects", "projects.id", "tasks.projects_id")
    .where({ "tasks.projects_id": taskId })
}

function addTasks(tasks) {
  return db("tasks").insert(tasks)
  .then(ids => ({ id: ids[0] }))
}
