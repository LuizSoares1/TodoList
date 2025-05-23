import React, { useState } from 'react';
import {
  ListItem, Checkbox, ListItemText, IconButton, ListItemSecondaryAction,
  Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, Tooltip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import WarningIcon from '@mui/icons-material/WarningAmber';
import api from '../services/api';

const TaskItem = ({ task, onUpdated }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const [discardDialog, setDiscardDialog] = useState(false);
  const [discardName, setDiscardName] = useState('');
  const [discardReason, setDiscardReason] = useState('');

  const [discardInfoDialog, setDiscardInfoDialog] = useState(false);

  const toggleCheckbox = async () => {
  try {
    let newStatus = '';

    if (task.status === 'active') {
      newStatus = 'review';
    } else if (task.status === 'review') {
      newStatus = 'completed';
    } else if (task.status === 'completed') {
      newStatus = 'active';
    }

    await api.put(`/tasks/${task._id}`, { status: newStatus });
    onUpdated();
  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    alert(error.response?.data?.message || 'Erro ao atualizar tarefa');
  }
};


  const handleDelete = async () => {
    await api.delete(`/tasks/${task._id}`);
    onUpdated();
  };

  const handleUpdate = async () => {
    await api.put(`/tasks/${task._id}`, { title, description });
    setEditing(false);
    onUpdated();
  };

  const handleConcludeReview = async () => {
    await api.put(`/tasks/${task._id}`, { status: 'completed' });
    onUpdated();
  };

  const handleDiscard = async () => {
    await api.put(`/tasks/${task._id}`, {
      status: 'active',
      discardBy: discardName,
      discardReason: discardReason,
    });
    setDiscardDialog(false);
    setDiscardName('');
    setDiscardReason('');
    onUpdated();
  };

  const isDiscarded = task.discardBy && task.discardReason;

  return (
    <ListItem
      style={{
        background: task.status === 'completed' ? '#f5f5f5' : '#fff',
        marginBottom: 8,
        borderRadius: 4,
        border: isDiscarded ? '1px solid orange' : undefined,
      }}
    >
      <Checkbox
        checked={task.status === 'completed'}
        onChange={toggleCheckbox}
        disabled={task.status === 'review'}
      />
      <ListItemText
        primary={
          <span
            style={{
              textDecoration: task.status === 'completed' ? 'line-through' : 'none',
            }}
          >
            {task.title}{' '}
            {isDiscarded && (
              <Tooltip title="Ver motivo do descarte">
                <WarningIcon
                  color="warning"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setDiscardInfoDialog(true)}
                />
              </Tooltip>
            )}
          </span>
        }
        secondary={task.description}
        style={{ opacity: task.status === 'completed' ? 0.6 : 1 }}
      />
      <ListItemSecondaryAction>
        {task.status !== 'review' && task.status !== 'discarded' && (
          <>
            <IconButton onClick={() => setEditing(true)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </>
        )}

        {task.status === 'review' && (
          <>
            <IconButton onClick={handleConcludeReview}>
              <CheckCircleIcon color="success" />
            </IconButton>
            <IconButton onClick={() => setDiscardDialog(true)}>
              <CancelIcon color="error" />
            </IconButton>
          </>
        )}
      </ListItemSecondaryAction>

      {/* Dialog de Edição */}
      <Dialog open={editing} onClose={() => setEditing(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditing(false)}>Cancel</Button>
          <Button onClick={handleUpdate} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog de Descarte */}
      <Dialog open={discardDialog} onClose={() => setDiscardDialog(false)}>
        <DialogTitle>Discard Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Your Name"
            value={discardName}
            onChange={(e) => setDiscardName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Reason for Discarding"
            value={discardReason}
            onChange={(e) => setDiscardReason(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={3}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDiscardDialog(false)}>Cancelar</Button>
          <Button
            onClick={handleDiscard}
            variant="contained"
            color="error"
            disabled={!discardName || !discardReason}
          >
            Descartar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog de Info do Descarte */}
      <Dialog open={discardInfoDialog} onClose={() => setDiscardInfoDialog(false)}>
        <DialogTitle>Reason for Discarding</DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle1">
            <strong>By:</strong> {task.discardBy}
          </Typography>
          <Typography variant="body1">
            <strong>Reason:</strong> {task.discardReason}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDiscardInfoDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </ListItem>
  );
};

export default TaskItem;
