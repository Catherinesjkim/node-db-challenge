const express = require("express");

// will need this to be able to use the model for this and all routes
const projectHelper = require("./tasks-model.js");

const router = express.Router(); // invoke Router()

// GET request by /api/tasks endpoint to view a list of tasks
// Worked on Postman - 200 OK - Pulling in all tasks
router.get("/", async (req, res) => {
  const allTasks = await projectHelper.allTasks();

  try {
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json("ERROR"); 
  }
});

module.exports = router;
