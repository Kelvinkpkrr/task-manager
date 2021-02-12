const mongodb = require("mongodb");
//Gives access to the functions needed for CRUD
const MongoClient = mongodb.MongoClient;

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
    //Variable used to access database. Simply accessing it creates da
    //even if it does not exist
    const db = client.db(database);

    db.collection("tasks").insertMany(
      [
        { description: "Clean the house", completed: true },
        { description: "Visit neighbour", completed: false },
        { description: "Catch up on notes", completed: false },
      ],
      (error, result) => {
        if (error) {
          console.log("Unable to insert tasks");
          return;
        }
        console.log(result.ops);
      }
    );
  }
);
