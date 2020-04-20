exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("projects_name", 128).unique().notNullable();
      tbl.string("projects_description", 128);
      tbl.boolean("projects_completed").notNullable().defaultTo("false");
    })

    .createTable("resource", (tbl) => {
      tbl.increments();
      tbl.string("resource_name").unique().notNullable();
      tbl.string("description", 128)
    })

    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_description", 128).notNullable();
      tbl.string("task_notes", 128);
      tbl.boolean("task_completed").notNullable().defaultTo("false");
      // This iwill be one of my conenction. "FK"
      tbl
        .integer("projects_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      // important connection to FK
    })
      .createTable("projects_resrouce", (tbl) => {
        tbl.increments();
        tbl
          .integer("projects_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("task")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
    };


exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resource")
    .dropTableIfExists("projects");
};
