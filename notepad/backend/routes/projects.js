const express = require("express");

const Project = require("../models/projects");

const router = express.Router();

router.post("", (req, res, next) => {
  const project = new Project({
    name: req.body.name,


  });

  project.save().then(createdProject => {
    console.log(req.body)
    res.status(201).json({
      message: "Project added successfully",
      projectId: createdProject._id
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get("", (req, res, next) => {
  Project.find().then(project => {
    res.status(200).json({
      message: "Projects fetched successfully!",
      project: project
    });
  });
});


module.exports = router;
