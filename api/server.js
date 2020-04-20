const express = require("express"); // importing a CommonJS module
const helmet = require("helmet");
const mw = require("./middleware.js");
const logger = mw.logger;

const projectsRouter = require("../projects/projects-router.js");
const resourcesRouter = require("../resources/resources-router.js");
const tasksRouter = require("../tasks/tasks-router.js");

const server = express();

server.use(helmet()); 
server.use(express.json()); 

server.use("/api/projects", logger, projectsRouter); 
server.use("/api/resources", logger, resourcesRouter);
server.use("/api/tasks", logger, tasksRouter);

server.get("/api", (req, res) => {
  const environment = process.env;
  res.status(200).json({ api: "up", environment });
});

server.get("/", addName, (req, res) => {
  const nameInsert = req.name ? `${req.name}` : "";

  console.log("req.name is: ", req.name); 

  res.send(`
    <h2>Lambda Projects API</h2>
    <p>Welcome: ${nameInsert} to the Lambda Projects API</p>
  `);
});

function addName(req, res, next) {
  req.name = "WEB PT 11";

  next();
}

// server.use(notFound);

module.exports = server;
