const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Create a task
router.post('/', async (req, res) => {
  const { title, description, status, priority, deadline } = req.body;
  try {
    const task = new Task({ title, description, status, priority, deadline, user: req.userId });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get tasks for a user
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  const { title, description, status, priority, deadline } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { title, description, status, priority, deadline }, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
