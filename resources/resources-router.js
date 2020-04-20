const express = require("express");

const Resources = require("./resources-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const resources = await Resources.find();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({
      message: "There was an error retrieving the resources",
    });
  }
});

router.get("/:id/resources", async (req, res) => {
  const { id } = req.params;

  try {
    const resource = await Resources.findById(id);
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json({
      message: "There was an error retrieving the project with id",
    });
  }
});

router.post("/", async (req, res) => {
  const newResource = req.body;

  try {
    const resource = await Resources.postResource(newResource);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({
      message: "There was an error creating a new resource",
    });
  }
});

// router.post("/:id/resources", async (req, res) => {
//   const newResource = {
//     description: req.body.description,
//     notes: req.body.notes,
//     completed: req.body.completed,
//     project_id: req.params.id,
//   };
//   try {
//     const action = await Projects.postResource(newResource);
//     res.status(201).json(resource);
//   } catch (err) {
//     res.status(500).json({
//       message: "There was an error creating the new resource",
//     });
//   }
// });

module.exports = router;