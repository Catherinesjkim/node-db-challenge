exports.seed = function(knex) {
    // Inserts seed entries
    return knex("projects_resource").insert([
      {
        projects_id: 1,
        resource_id: 1,
      },
      {
        projects_id: 1,
        resource_id: 2,
      },
      {
        projects_id: 2,
        resource_id: 1,
      },
      {
        projects_id: 2,
        resource_id: 2
      },
    ]);
};
