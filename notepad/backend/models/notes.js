const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  title: { type: String, required: true },
  note: { type: String, required: true },
  date: {type: Date, required:false}

});

module.exports = mongoose.model('Notes', notesSchema);