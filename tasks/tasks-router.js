const express = require("express");

const Tasks = require("./tasks-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({
      message: "There was an error retrieving the tasks",
    });
  }
});

router.get("/:id/resources", async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Tasks.findById(id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({
      message: "There was an error retrieving the task with id",
    });
  }
});

router.post("/", async (req, res) => {
  const newTask = req.body;

  try {
    const task = await Tasks.postTask(newTask);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({
      message: "There was an error creating a new task",
    });
  }
});

router.post("/:id/resources", async (req, res) => {
  const newResource = {
    description: req.body.description,
    notes: req.body.notes,
    completed: req.body.completed,
    task_id: req.params.id,
  };
  try {
    const action = await Tasks.taskResource(newResource);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({
      message: "There was an error creating the new resource",
    });
  }
});

module.exports = router;