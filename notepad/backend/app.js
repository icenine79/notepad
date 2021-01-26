const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const notesRoutes = require("./routes/notes");
const projectsRoutes = require("./routes/projects");


const app = express();

mongoose
.connect('mongodb+srv://icenine:qN4pI8Tuy0chs7qK@mean-robot-cluster.zyjkf.mongodb.net/Mean-Robot-Cluster?retryWrites=true&w=majority'
)

  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/notes", notesRoutes);
app.use("/api/projects", projectsRoutes);


module.exports = app;


