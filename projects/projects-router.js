const express = require("express");

// will need this to be able to use the model for this and all routes
const projectHelper = require("./projects-model.js");

const router = express.Router(); 

// Built an API with endpoints for retrieving a list of projects
// GET projects requests - Worked on Postman 200 OK - all projects pulling in
router.get("/", async (req, res) => {
  const allProjects = await projectHelper.findProject();
  try {
    res.status(200).json(allProjects);
  } catch (error) {
      res.status(500).json("ERROR");
  }
});

// Built an API with endpoints for adding projects
// Worked on Postman with 201 OK Created
router.post("/", async (req, res) => {
  const changes = req.body;
  const addProjects = await projectHelper.addProject(changes);
  try {
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json("error");
  }
});

// get all of the tasks by a project id - join statement in the model
// /projects/id/tasks
// Worked on Postman 200 OK, pulling in per id 
router.get("/:id/tasks", async (req, res) => {
  const findTasks = await projectHelper.findTasks(req.params.id);
  try {
    res.status(200).json(findTasks);
  } catch (error) {
    res.status(500).json("ERROR");
  }
});

// write an endpoint to create tasks - /projects/id/tasks
// CREATE a new obj
router.post("/:id/tasks", async (req, res, next) => {
    const allTheInfoOfTask = { ...req.body, projects_id: req.params.id };
    const addTasks = await projectHelper.addTasks(allTheInfoOfTask);
    try {
      res.status(201).json(req.body);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;