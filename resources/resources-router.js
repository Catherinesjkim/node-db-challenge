const express = require("express");

//  will need this to be able to use the model for this and all routes
const projectHelper = require("./resources-model.js");

const router = express.Router(); 

// Built an API with endpoints for retrieving a list of resources - /api/resources
// Worked on Postman - 200 OK getting all resources 
router.get("/", async (req, res) => {
  const allResources = await projectHelper.findResource();
  try {
    res.status(200).json(allResources);
  } catch (error) {
    res.status(500).json("ERROR");
  }
});

// Built an API with endpoints for adding resources
// Worked on Postman - 201 Created 
router.post("/", async (req, res) => {
  const changes = req.body;
  const addResrouce = await projectHelper.addResource(changes);
  try {
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json("error");
  }
});

module.exports = router;