import { Link, useNavigate } from 'react-router-dom';
import { Group } from '@mantine/core';
import { useAuth } from '../../context/AuthContext';
import classes from './Navbar.module.css';

const Navbar = ({ variant = 'horizontal' }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const navbarClass = variant === 'vertical' 
    ? `${classes.navbar} ${classes.navbarVertical}` 
    : classes.navbar;
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <Group className={navbarClass}>
      <Link to="/" className={classes.link}>Home</Link>
      <Link to="/about" className={classes.link}>About</Link>
      <Link to="/contact" className={classes.link}>Contact</Link>
      {isAuthenticated ? (
        <button onClick={handleLogout} className={classes.logoutButton}>
          Logout
        </button>
      ) : (
        <Link to="/login" className={classes.link}>Login</Link>
      )}
    </Group>
  );
};

export default Navbar;
