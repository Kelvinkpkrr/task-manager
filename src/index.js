const express = require("express");
const jwt = require("jsonwebtoken");
//Ensures the file runs and mongoose connects to the db
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

//Parses incoming requests with JSON payloads
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const myFunction = async () => {
  const token = jwt.sign({ _id: "123" }, "thisisthetaskmanagerapp", {
    expiresIn: "7 days",
  });
  console.log(token);
  const verified = jwt.verify(token, "thisisthetaskmanagerapp");
  console.log(verified);
};

myFunction();

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
