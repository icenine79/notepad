const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  project: { type: String, required: false },
  note: { type: String, required: true },
  date: {type: Date, required:false}
});

module.exports = mongoose.model('Notes', notesSchema);
