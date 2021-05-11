exports.seed = function(knex) {

  return knex("tasks").insert([
    {
      task_description: "Kara will look at design",
      task_notes: "She is an expert in design, ask her questions on color schema",
      task_completed: false,
      projects_id: 1,
    },
    {
      task_description: "Catherine will organize the place",
      task_notes: "She is good with feng shui, ask her questions on engergy flow",
      task_completed: false,
      projects_id: 2,
    }
  ]);
};
