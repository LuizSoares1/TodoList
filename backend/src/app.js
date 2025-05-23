const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const tasksRouter = require('./routes/tasks');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasksRouter);
app.get('/', (req, res) => {
  res.send('Todo API is running');
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

module.exports = app;
