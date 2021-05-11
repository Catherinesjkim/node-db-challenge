exports.seed = function(knex) {
  // Inserts seed entries
  return knex("projects").insert([
    {
      id: 1,
      projects_name: "Make a Table",
      projects_description: "Make a functional table",
      projects_completed: false, 
    },
    {
      id: 2,
      projects_name: "Make a House",
      projects_description: "Make a gorgeous house",
      projects_completed: false, 
    },
  ]);
};
