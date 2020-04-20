/*
 - adding resources.
 - retrieving a list of resources.
 - the same resource can be used in multiple projects.
 - when adding resources the client must provide a name, the description is optional.
 - 
 */

// const express = require("express");

// const db = require("../data/connection.js");

// const Resources = require("./resources-model.js");

// // Always notice the uppercase R on the router - it creates the router
// const router = express.Router(); // invoke Router()

// // router only cares about what comes after /api/projects
// //? the router handles endpoints that begin with /api/resources

// // retrieving a list of resources
// router.get("/", (req, res) => {
//   Resources.findResources()
//     .then((resourcesList) => {
//       res.status(200).json(resourcesList); // worked on insomnia
//     })
//     .catch(() => {
//       res.status(500).json({ message: "Failed to get resourcesList" });
//     });
// });

// // write an endpoint to create resource
// // CREATE a new obj
// router.post("/", (req, res) => {
//   // reading the data from the body
//   const resourceInfo = req.body;

//   // validate that the resourceInfo is correct before saving
//   Resources.addResources(resourceInfo) // adding it to the array
//     .then((resource) => {
//       res.status(201).json(resource); // Worked on insomnia
//     })
//     .catch(() => {
//       res.status(500).json({ message: "Failed to create new resource" });
//     });
// });

// // GET by id
// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   Resources.findResourceById(id)
//     .then((resource) => {
//       if (resource) {
//         res.status(200).json(resource); // WORKED ON INSOMNIA
//       } else {
//         res.status(404).json({ message: "Resource not found" });
//       }
//     })
//     .catch((error) => {
//       // log error to db
//       console.log(error);
//       res.status(500).json({
//         message: "Error retreiving the resource",
//       });
//     });
// });

// module.exports = router;

/*
resources: [
    {
      id: 1,
      name: 'Lambda Student',
      description: 'a soon to be hired developer'
    },
    {
      id: 2,
      name: 'MacBook Pro #1'
      description: 'an overly expensive laptop computer'
    }
  ]
  */
