// tasks & projects will need access to mappers - general file
module.exports = {
  intToBoolean,
  booleanToint,
  projectToBody,
  resourceToBody,
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function booleanToint(bool) {
  return bool === true ? 1 : 0;
}

function projectToBody(project) {
  const result = {
    ...project,
    completed: intToBoolean(project.completed),
  };

  if (project.resources) {
    result.resources = project.resources.map((resource) => ({
      ...resource,
      completed: intToBoolean(resource.completed),
    }));
  }

  return result;
}

function resourceToBody(resource) {
  return {
    ...resource,
    completed: intToBoolean(resource.completed),
  };
}
