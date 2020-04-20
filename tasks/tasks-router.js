/*
 - adding tasks: done
 - retrieving a list of tasks. The list of tasks should include the project name and project description:
 - A task belongs to only one project
 - when adding a task the client must provide a description, the notes are optional.
 - when adding a task the client must provide the id of an existing project.
 - if no value is provided for the completed property, the API should provide a default value of false - DEFAULT ON SQLITE STUDIO
 */
// const express = require("express");
// const db = require("../data/connection.js");

// const Tasks = require("./tasks-model.js");
// Always notice the uppercase R on the router - it creates the router
// const router = express.Router(); // invoke Router()

// router only cares about what comes after /api/projects
//? the router handles endpoints that begin with /api/tasks

// GET request by /api/taks endpoint to view a list of tasks
// router.get("/", (req, res) => {
//   Tasks.findTasks()
//     .then((tasks) => {
//       res.status(201).json({ tasks }); // Worked on Insomnia
//     })
//     .catch(() => {
//       res.status(500).json({ message: "Failed to get tasks" });
//     });
// });

// returns a task with a specific id
// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   Tasks.findTaskById(id)
//     .then((task) => {
//       res.status(200).json(task); // Worked on Insomnia
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "problem with the db" });
//     });
// });

// write an endpoint to create tasks
// CREATE a new obj
// router.post("/", (req, res) => {
//   const taskInfo = req.body;

//   Tasks.addTask(taskInfo)
//     .then((task) => {
//       taskInfo.completed === null ? false : true;
//       res.status(201).json(task); // worked on insomnia 0 === false
//     })
//     .catch(() => {
//       res.status(500).json({ message: "Failed to create new task" });
//     });
// });

// module.exports = router;

/*
tasks: [
    {
      id: 1,
      description: 'task description',
      notes: 'the task notes',
      completed: false // or true
    },
    {
      id: 7,
      description: 'another task description',
      notes: 'the task notes',
      completed: false // or true
    }
*/
