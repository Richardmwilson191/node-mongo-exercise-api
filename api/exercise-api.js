const express = require('express');

const Exercise = require('../database/exercise');

const router = express.Router();

router.post('/post', async (req, res) => {
  const { exerciseName, exerciseType, affectedMuscle } = req.body;

  const exerciseModel = new Exercise({
    exerciseName,
    exerciseType,
    affectedMuscle
  });
  await exerciseModel.save();

  res.json(exerciseModel);
});

router.get('/', async (req, res) => {
  // Exercise.find({}, (err, docs) => {
  //   if (!err) {
  //     res.send(docs);
  //   } else throw err;
  // });

  const result = await Exercise.find({});

  res.status(200).json(result);
});

module.exports = router;
