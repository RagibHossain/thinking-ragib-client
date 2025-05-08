import { Link } from 'react-router-dom';
import { Box } from '@mantine/core';

const Navbar = () => {
  return (
    <Box>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Box>
  );
};

export default Navbar;
