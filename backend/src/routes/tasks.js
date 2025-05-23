const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ message: 'Title required' });

  try {
    const newTask = new Task({ title, description });
    const saved = await newTask.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const currentTask = await Task.findById(req.params.id);
    if (!currentTask) return res.status(404).json({ message: 'Task not found' });

    const updates = req.body;

    if (updates.status) {
      if (currentTask.status === 'active' && updates.status === 'completed') {
        return res.status(400).json({ message: 'Active tasks must be reviewed before completed' });
      }
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id/discard', async (req, res) => {
  try {
    const { discardBy, discardReason } = req.body;
    const updateData = {
      status: 'active',
      discardBy,
      discardReason,
    };

    const discardedTask = await Task.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!discardedTask) return res.status(404).json({ message: 'Task not found' });

    res.json(discardedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
