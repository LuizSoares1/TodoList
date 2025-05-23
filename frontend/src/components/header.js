import { Typography, Box } from '@mui/material';

const Header = () => (
  <Box my={4} textAlign="center">
    <Typography variant="h3" component="h1" gutterBottom sx={{
      fontSize: '32px',
      color: 'black'
    }}>
      Todo List
    </Typography>
  </Box>
);

export default Header;