import React, { useEffect, useState } from 'react'
import { Container, Typography, Box, CircularProgress, Snackbar } from '@mui/material'
import Header from './components/header'
import TaskForm from './components/taskForm'
import FilterTabs from './components/filterTabs'
import TaskList from './components/taskList'
import api from './services/api'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [error, setError] = useState(null)

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return task.status === 'active';
    if (filter === 'active') return task.status === 'active';
    if (filter === 'review') return task.status === 'review';
    if (filter === 'completed') return task.status === 'completed';
    return true;
  });

  return (
    <Container maxWidth={false} style={{ maxWidth: '800px' }}>
      <Header />
      <TaskForm onTaskCreated={fetchTasks} />
      <FilterTabs filter={filter} setFilter={setFilter} tasks={tasks} />
      {loading ? (
        <Box mt={4} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <TaskList tasks={filteredTasks} onTaskUpdated={fetchTasks} />
      )}
      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={() => setError(null)}
        message={error}
      />
    </Container>
  );
};

export default App;