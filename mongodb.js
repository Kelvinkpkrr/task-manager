const { MongoClient } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const database = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log("Unable to connect to the database.");
      return;
    }
    const db = client.db(database);
  }
);
