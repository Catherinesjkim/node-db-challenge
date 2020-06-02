exports.seed = function(knex) {
  // Inserts seed entries
  return knex("resource").insert([
    {
      id: 1,
      resource_name: "Kara",
      description: "She is an epxert in design",
    },
    {
      id: 2,
      resource_name: "Catherine",
      description: "She is an epxert in organizing",
    }
  ]);
};
