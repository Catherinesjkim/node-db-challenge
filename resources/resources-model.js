const knex = require("knex");
const config = require("../knexfile.js");
const db = knex(config.development);

module.exports = {
  findResource,
  addResource
};

function findResource() {
  return db("resource");
}

function addResource(body) {
  return db("resource").insert(body);
}
