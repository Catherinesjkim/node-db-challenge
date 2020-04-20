const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.find()
    res.status(200).json(projects)
  } catch (err) {
    res.status(500).json({
      message: "There was an error retrieving the projects"
    });
  };
});

router.get('/:id/tasks', async (req, res) => {
  const { id } = req.params
  
  try {
    const project = await Projects.findById(id)
    res.status(200).json(project)
  } catch (err) {
    res.status(500).json({
      message: "There was an error retrieving the project with id"
    });
  };
});

router.post('/', async (req, res) => {
  const newProject = req.body
  
  try {
    const project = await Projects.postProject(newProject)
    res.status(201).json(project)
  } catch (err) {
    res.status(500).json({
      message: "There was an error creating a new project"
    });
  };
});

router.post('/:id/resources', async (req, res) => {
  const newResource = {
    description: req.body.description, 
    notes: req.body.notes, 
    completed: req.body.completed, 
    project_id: req.params.id
  }
  try {
    const action = await Projects.postResource(newResource)
    res.status(201).json(resource)
  } catch (err) {
    res.status(500).json({
      message: "There was an error creating the new resource"
    });
  };
});

module.exports = router;