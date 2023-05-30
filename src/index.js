const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const recipesRouter = require("./routers/recipes");
const usersRouter = require("./routers/users");
const { handleError } = require("./utils/error");
const auth = require("./middleware/auth.js");
const run = require("./demo_create_mongo_db");
require("dotenv").config();

const { mongoUri } = process.env;

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("not connected");
    console.log(err);
  });

const app = express();

app.use(cors());

app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
    `New request to: ${method} ${path} at ${new Date().toISOString()}`
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(auth.initialize());

app.get("/", (req, res) => {
  res.redirect("/api/v1/activity");
});

app.use("/api/v1/activity", recipesRouter);
app.use("/api/v1/users", usersRouter);

app.use(handleError);

const port = process.env.PORT || 8080;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/", (req, res) => {
//   res.send("Got a POST request");
// });
// app.delete("/user", (req, res) => {
//   res.send("Got a DELETE request at /user");
// });

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
