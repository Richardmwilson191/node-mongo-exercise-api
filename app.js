const express = require('express');

const connectDB = require('./database/connection');
const exercises = require('./api/exercise-api');

const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use('/api/exercises', exercises);

const Port = process.env.Port || 3000;

app.listen(Port, () => {
  console.log('started');
});