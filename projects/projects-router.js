const express = require("express");

//  will need this to be able to use the model for this and all routes
const projectHelper = require("./projects-model.js");

const router = express.Router(); 

// get + post projects requests
router.get("/", async (req, res) => {
  const allProjects = await projectHelper.findProject();
  try {
    res.status(200).json(allProjects);
  } catch (error) {
      res.status(500).json("ERROR");
  }
});

router.post("/", async (req, res) => {
  const changes = req.body;
  const addProjects = await projectHelper.addProject(changes);
  try {
    res.status(201).json(addProjects);
  } catch (error) {
    res.status(500).json("error");
  }
});

// get + post resource requests
router.get("/resource", async (req, res) => {
  const allResources = await projectHelper.findResource();
  try {
    res.status(200).json(allResources);
  } catch (error) {
    res.status(500).json("ERROR");
  };
});

router.post("/resource", async (req, res) => {
  const changes = req.body;
  const addResrouce = await projectHelper.addResource(changes);
  try {
    res.status(201).json(addResrouce);
  } catch (error) {
    res.status(500).json("error");
  }
});

// get + post task requests
router.get("/:id/task", async (req, res) => {
  const allTask = await projectHelper.findTask(req.params.id);
  try {
    res.status(200).json(allTask);
  } catch (error) {
    res.status(500).json("ERROR");
  }
});

module.exports = router;