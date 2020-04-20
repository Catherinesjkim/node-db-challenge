const knex = require("knex");
const config = require("../knexfile.js");
const db = knex(config.development);
const mappers = require("../data/helpers/mappers.js");

module.exports = {
  findProject,
  addProject,
  findResource,
  addResource,
  findTask
};

// method to get the projects (All)
function findProject() {
  return db("Project");
}

function addProject(body) {
  return db("projects").insert(body);
}

function findResource() {
  return db("resource");
}

function addResource(body) {
  return db("resource").insert(body);
}

function findTask(taskId) {
  return db("task")
    .join("project", "project.id", "task.project_id")
    .where({ "task.project_id": taskId })
    .select("project.project_name", "project.project_description", "task.*");
}
