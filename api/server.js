const express = require("express"); // importing a CommonJS module
const helmet = require("helmet");

const mw = require("./middleware.js");
const logger = mw.logger;

const projectRouter = require("../projects/projects-router.js");
const resourcesRouter = require("../resources/resources-router.js");
const tasksRouter = require("../tasks/tasks-router.js");

const server = express();

server.use(helmet(), logger, express.json()); 

server.use("/api/projects", projectRouter); 
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter); // move the tasks into its own model and router.

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
  req.name = "WEB PT 13";

  next();
}

module.exports = server;
