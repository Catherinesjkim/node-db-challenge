// All custom mw go here
const logger = (req, res, next) => {
  // log info about the requests to the console ---> Get to /
  const method = req.method;
  const endpoint = req.originalUrl;
  const date = new Date();
  console.log(`You made a ${method} request to ${endpoint} on ${date}`);
  next();
};

// better router message than Cannot GET /lost - better UX - controlling response - catch all error handler
function notFound(req, res, next) {
  res
    .status(404)
    .json({ message: "Oops, did not find what you are looking for" });
}

module.exports = {
  logger,
  notFound
};
