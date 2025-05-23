import { Tabs, Tab, Box } from '@mui/material';

const FilterTabs = ({ filter, setFilter, tasks }) => {
  const countByStatus = (status) => tasks.filter((t) => t.status === status).length;

  const allCount = tasks.length;
  const activeCount = countByStatus('active');
  const reviewCount = countByStatus('review');
  const completedCount = countByStatus('completed');

  return (
    <Box mb={2}>
      <Tabs value={filter} onChange={(_, val) => setFilter(val)}>
        <Tab value="all" label={`All (${tasks.filter(t => t.status === 'active').length})`} />
        <Tab value="active" label={`Active (${tasks.filter(t => t.status === 'active').length})`} />
        <Tab value="review" label={`Review (${tasks.filter(t => t.status === 'review').length})`} />
        <Tab value="completed" label={`Completed (${tasks.filter(t => t.status === 'completed').length})`} />
      </Tabs>
    </Box>
  );
};

export default FilterTabs;
