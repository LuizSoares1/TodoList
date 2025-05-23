import { List, Typography } from '@mui/material';
import TaskItem from './taskItem';

const TaskList = ({ tasks, onTaskUpdated }) => {
  if (!tasks.length) {
    return <Typography>No tasks found. Add your first task!</Typography>;
  }
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onUpdated={onTaskUpdated} />
      ))}
    </List>
  );
};

export default TaskList;