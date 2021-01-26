const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model('Projects', projectsSchema);
