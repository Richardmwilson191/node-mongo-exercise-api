const express = require('express');

const connectDB = require('./database/connection');
const exercises = require('./api/exercise-api');

const app = express();

// connectDB();

app.get('/', (req, res) => {
  // res.redirect('/api/exercises');
  res.send('hello');
});

// app.use(express.json({ extended: false }));
// app.use('/api/exercises', exercises);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
