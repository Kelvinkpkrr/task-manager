const express = require("express");
const jwt = require("jsonwebtoken");
//Ensures the file runs and mongoose connects to the db
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

//A function that is going to run between request coming to server and route handler
//actually running
app.use((req, res, next) => {
  console.log("Middleware");
});

//Parses incoming requests with JSON payloads
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
