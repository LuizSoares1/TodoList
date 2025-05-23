import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import api from '../services/api';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await api.post('/tasks', { title, description });
    setTitle('');
    setDescription('');
    onTaskCreated();
  };

  return (
    <Box component="form" onSubmit={formSubmit} mb={3}>
      <TextField
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={3}
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        startIcon={<AddIcon />}
        disabled={!title.trim()}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;