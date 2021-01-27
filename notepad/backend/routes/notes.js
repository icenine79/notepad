const express = require("express");

const Note = require("../models/notes");

const router = express.Router();

router.post("", (req, res, next) => {
  const note = new Note({
    project: req.body.project,
    note: req.body.note,
    date:req.body.date,

  });

  note.save().then(createdNote => {
    console.log(req.body)
    res.status(201).json({
      message: "Note added successfully",
      noteId: createdNote._id,
      notes:createdNote.note
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get("", (req, res, next) => {
  Note.find().then(notes => {
    res.status(200).json({
      message: "Notes fetched successfully!",
      notesObj: notes
    });
  });
});


module.exports = router;
