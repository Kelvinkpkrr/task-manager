// const mongodb = require("mongodb");
// //Gives access to the functions needed for CRUD
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

//Object destructuring
const { MongoClient, ObjectID } = require("mongodb");

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

    // db.collection("tasks").insertMany(
    //   [
    //     { description: "Clean the house", completed: true },
    //     { description: "Visit neighbour", completed: false },
    //     { description: "Catch up on notes", completed: false },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log("Unable to insert tasks");
    //       return;
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").findOne(
    //   //Cannot simply use string as id as id is not a string but a binary type from ObjectID
    //   { _id: new ObjectID("6026053e29f1db4db856b67a") },
    //   (error, response) => {
    //     if (error) {
    //       console.log("Unable to fetch");
    //       return;
    //     }
    //     console.log(response);
    //   }
    // );

    //Find returns a cursor and not the document
    //Use the toArray method on the cursor
    // db.collection("users")
    //   .find({ age: 23 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });
    // //Return the count of found records
    // db.collection("users")
    //   .find({ age: 23 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });
  }
);
