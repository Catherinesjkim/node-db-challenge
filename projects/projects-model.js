const db = require('../data/db-config.js');

module.exports = {
  find, 
  findById, 
  postProject, 
  postTask, 
  postResource
}

function find() {
  return db('projects')
}

function findById(id) {
  return db('projects')
    .where({ id })
    .first()
    .then(project => {
      return db('tasks')
        .where({ project_id: id })
        .then(tasks => {
          return { ...project, actions }
        })
    })
}

async function postProject(project) {
  const [id] = await db('projects').insert(project)
  return findById(id)
}

async function postTask(task) {
  const [id] = await db("tasks").insert(task);
  return findById(id);
}

async function postResource(resource) {
  const [id] = await db('resources').insert(resource)
  return findById(resource.project_id)
}