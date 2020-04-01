const mongoose = require('mongoose');

const exercise = new mongoose.Schema({
  exerciseName: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  exerciseType: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  affectedMuscle: {
    type: String,
    required: true,
    min: 6,
    max: 255
  }
});

Exercise = mongoose.model('exercise', exercise);

module.exports = Exercise;
