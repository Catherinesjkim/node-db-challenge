const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  postResource,
};

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources")
    .where({ id })
    .first()
}

async function postResource(resource) {
  const [id] = await db("resources").insert(resource);
  return findById(id);
}

// async function postTask(task) {
//   const [id] = await db("tasks").insert(task);
//   return findById(id);
// }

// async function postResource(resource) {
//   const [id] = await db("resources").insert(resource);
//   return findById(resource.project_id);
//}
