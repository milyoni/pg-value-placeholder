pg-value-placeholder
=====================

Makes setting the numbered pg value placeholders easy for pg queries, so you aren't SOL if you need to use non-common query features, like hstore, arrays, json data types, etc.

# Usage

This example also uses the pg, squel, and underscore modules to demonstrate a typical usage of pg-value-placeholder.

    var pg = require("pg"),
        _ = require("underscore")._,
        squel = require("squel")
        pgValuePlaceholder = require("pg-value-placeholder");

    var placeholder = pgValuePlaceholder();
    pg.connect("db-conn-string", function(error, client) {
      var statement = squel
        .insert({usingValuePlaceholders: true})
        .into("users")
        .set("name", placeholder())
        .set("title", placeholder())
        .set("created_at", placeholder())
        .set("updated_at", placeholder())
        .set("data", "hstore(ARRAY[" + placeholder() + "])"; // Assumes that data is a non-empty Object.

      // insert into users (name, title, created_at, updated_at) values ($1, $2, $3, $4)
      var self = this;
      client.query(statement.toString, _.values(_(self.attributes).pick.apply(self.attributes, _.keys(statement.fields)))), function(error, results) {

      });
    });
