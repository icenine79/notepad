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

router.put("/:id" ,(req, res, next) => {
  const note = new Note({
    project: req.body.project,
    note: req.body.note,
    date:req.body.date,

  });
  Note.updateOne({ _id: req.params.id }, note).then(result => {
    res.status(200).json({ message: "Update successful!" });
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

router.get("/:id",(req,res,next)=>{
  Note.findById(req.params.id).then(note=>{
   if(note){
    res.status(200).json({
      message:"Note found",
      noteId:note._id,
      note:note
    })
  }else{
    res.status(404).json({ message: "Note not found!" });

  }
  })
})

router.delete("/:id",(req,res,next)=>{
Note.deleteOne().then(note=>{
  res.status(200).json({
    message:"Note deleted",
    noteId:note._id

  })
})
})

module.exports = router;
